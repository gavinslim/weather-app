import icons from './icons.json';

function capitalizeFirstLetters(string) {
  const words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(' ');
}

// Constructor function
function WeatherData(inData) {
  this.location = `${inData.name}, ${inData.sys.country}`;
  this.icon = inData.weather[0].id;
  this.weather = inData.weather[0].description;
  this.temp = inData.main.temp;
  this.feelsLike = inData.main.feels_like;
  this.windSpeed = inData.wind.speed;

  this.minTemp = inData.main.temp_max;
  this.maxTemp = inData.main.temp_min;
  this.pressure = inData.main.pressure;
  this.humidity = inData.main.humidity;
}

function getWeatherIcon(code) {
  const weatherDict = {
    thunderstorm: 'fa-cloud-rain',
    clouds: 'fa-cloud',
    rain: 'fa-cloud-showers-heavy',
    snow: 'fa-snowflake',
    clear: 'fa-sun',
    drizzle: 'fa-cloud-rain',
    mist: 'fa-smog',
    tornado: 'fa-wind',
    squall: 'fa-wind',
    ash: 'fa-meteor',
  };

  const weather = document.querySelector('.weather-icon');
  weather.className = '';
  weather.classList.add('weather-icon', 'fa-solid', weatherDict[icons[code].icon]);
}

function setWeatherInfo(field, fieldData) {
  const temp = document.querySelector(`#${field}`);
  temp.textContent = fieldData;
}

function displayWeatherData(data) {
  // Load data for top-left container
  setWeatherInfo('location', data.location);
  setWeatherInfo('weather', capitalizeFirstLetters(data.weather));
  setWeatherInfo('temperature', `${parseInt(data.temp, 10)} °C`);

  getWeatherIcon(data.icon);
}

// Async API call to Openweathermap
async function getWeather(searchTerm = 'Vancouver') {
  const key = '3e29cd90c5f97f11339309c26aa8e4a9';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${key}&units=metric`;

  try {
    const response = await fetch(url, { mode: 'cors' });
    const responseData = await response.json();
    console.log(responseData);
    const data = new WeatherData(responseData);
    displayWeatherData(data);
  } catch (err) {
    console.log(new Error(err));
  }
}

// Adding user location input feature
function addUserInputFeature() {
  window.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter') && (e.target.matches('input'))) {
      const location = e.target.value;
      getWeather(location);
      e.target.value = '';
    }
  });
}

function loadFeatures() {
  addUserInputFeature();
  getWeather('Vancouver');
}

export default loadFeatures;
