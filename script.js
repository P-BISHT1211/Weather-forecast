const apiKey = '0bbc8921abbd338af4062cb6beffed2e'; // Replace with your OpenWeatherMap API key
function getWeather() {
  const city = document.getElementById('city-input').value;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        alert('City not found');
        return;
      }

      document.getElementById('city-name').textContent = data.name;
      document.getElementById('temperature').textContent = `${data.main.temp}°C`;
      document.getElementById('weather-description').textContent = data.weather[0].description;
      document.getElementById('humidity').textContent = `${data.main.humidity}%`;
      document.getElementById('wind-speed').textContent = `${data.wind.speed} km/h`;
      document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
    })
    .catch(() => {
      alert('Error fetching weather data');
    });

  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      const forecastContainer = document.getElementById('forecast-container');
      forecastContainer.innerHTML = ''; // Clear previous forecast

      for (let i = 0; i < data.list.length; i += 8) { // 8 intervals per day, so one per day
        const dayData = data.list[i];
        const date = new Date(dayData.dt_txt).toDateString();
        const temp = dayData.main.temp;
        const description = dayData.weather[0].description;

        // Create forecast card
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `
          <h4>${date}</h4>
          <p>${temp}°C</p>
          <p>${description}</p>
        `;
        forecastContainer.appendChild(forecastCard);
      }
    })
    .catch(() => {
      alert('Error fetching forecast data');
    });
}
function getDefault() {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=${apiKey}&units=metric`;

  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        alert('City not found');
        return;
      }

      document.getElementById('city-name').textContent = data.name;
      document.getElementById('temperature').textContent = `${data.main.temp}°C`;
      document.getElementById('weather-description').textContent = data.weather[0].description;
      document.getElementById('humidity').textContent = `${data.main.humidity}%`;
      document.getElementById('wind-speed').textContent = `${data.wind.speed} km/h`;
      document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
    })
    .catch(() => {
      alert('Error fetching weather data');
    });

  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      const forecastContainer = document.getElementById('forecast-container');
      forecastContainer.innerHTML = ''; // Clear previous forecast

      for (let i = 0; i < data.list.length; i += 8) { // 8 intervals per day, so one per day
        const dayData = data.list[i];
        const date = new Date(dayData.dt_txt).toDateString();
        const temp = dayData.main.temp;
        const description = dayData.weather[0].description;

        // Create forecast card
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `
          <h4>${date}</h4>
          <p>${temp}°C</p>
          <p>${description}</p>
        `;
        forecastContainer.appendChild(forecastCard);
      }
    })
    .catch(() => {
      alert('Error fetching forecast data');
    });
}


getDefault()