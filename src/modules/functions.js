// Constructor function
function WeatherData(inData) {
  console.log(inData);
  this.location = `${inData.name}, ${inData.sys.country}`;
  this.weather = inData.weather[0].main;
  this.temp = inData.main.temp;
  this.feelsLike = inData.main.feels_like;
  this.windSpeed = inData.wind.speed;
}

function addWeatherInfo(field, fieldData) {
  const temp = document.createElement('div');
  temp.classList.add(field);
  temp.textContent = fieldData;

  return temp;
}

function displayWeatherData(data) {
  const container = document.querySelector('#weather-container');

  container.innerHTML = '';

  container.appendChild(addWeatherInfo('location', data.location));
  container.appendChild(addWeatherInfo('weather', data.weather));
  container.appendChild(addWeatherInfo('temp', data.temp));
  container.appendChild(addWeatherInfo('feels-like', data.feelsLike));
}

// Async API call to Openweathermap
async function getWeather(searchTerm = 'Vancouver') {
  const key = '3e29cd90c5f97f11339309c26aa8e4a9';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${key}&units=metric`;

  try {
    const response = await fetch(url, { mode: 'cors' });
    const responseData = await response.json();
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
}

export default loadFeatures;
