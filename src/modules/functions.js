import icons from './icons.json';

function capitalizeFirstLetters(string) {
  const words = string.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(' ');
}

const initDate = () => {
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December',
  ];

  const getToday = () => {
    const date = new Date();
    return `${weekday[date.getDay()]},  ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getDay = (unixTime) => {
    const date = new Date(unixTime * 1000);

    return {
      str: weekday[date.getDay()].substr(0, 3),
      num: date.getDate(),
    };
  };

  const convertTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    let hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;

    const end = hours < 12 ? 'am' : 'pm';
    if (hours > 12) { hours -= 12; }

    const formattedTime = `${hours}:${minutes.substr(-2)} ${end}`;
    return formattedTime;
  };

  return { getToday, getDay, convertTime };
};

// Constructor function
function WeatherData(inData) {
  this.icon = inData.weather[0].id;
  this.weather = inData.weather[0].description;
  this.temp = inData.temp;
  this.feelsLike = inData.feels_like;
  this.windSpeed = inData.wind_speed;
  this.pressure = inData.pressure;
  this.humidity = inData.humidity;
  this.sunrise = inData.sunrise;
  this.sunset = inData.sunset;

  this.setLocation = (location) => {
    this.location = location;
  };

  this.setTempRange = (min, max) => {
    this.minTemp = parseInt(min, 10);
    this.maxTemp = parseInt(max, 10);
  };

  this.setDay = (day) => {
    this.day = day;
  };
}

function setWeatherIcon(field, code) {
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
    haze: 'fa-smog',
  };

  const weather = document.querySelector(field);
  weather.className = '';
  weather.classList.add('weather-icon', 'fa-solid', weatherDict[icons[code].icon]);
}

function setWeatherInfo(field, fieldData) {
  const temp = document.querySelector(field);
  temp.textContent = fieldData;
}

function displayCurrentWeatherData(inData) {
  const data = new WeatherData(inData);
  const date = initDate();

  // Load data for main container
  setWeatherInfo('#weather', capitalizeFirstLetters(data.weather));
  setWeatherInfo('#temperature', `${parseInt(data.temp, 10)} °C`);
  setWeatherInfo('#date', date.getToday());
  setWeatherIcon('.weather-icon', data.icon);

  // Load wind, pressure, and humidity
  setWeatherInfo('#wind', `${parseInt(data.windSpeed, 10)} m/s`);
  setWeatherInfo('#pressure', `${data.pressure} hPa`);
  setWeatherInfo('#humidity', `${data.humidity}%`);

  // Load data for supplemental container
  setWeatherInfo('#sunrise', date.convertTime(data.sunrise));
  setWeatherInfo('#sunset', date.convertTime(data.sunset));
}

// Async API call to Openweathermap
function displayDailyWeatherData(inData) {
  inData.forEach((dayData, index) => {
    if (index !== 0) {
      // Retrieve temperature range for today
      // const todayData = new WeatherData(dayData);
      // setWeatherInfo('temp-min', `${parseInt(todayData.temp.min, 10)} °C`);
      // setWeatherInfo('temp-max', `${parseInt(todayData.temp.max, 10)} °C`);

      const data = new WeatherData(dayData);
      data.setTempRange(dayData.temp.min, dayData.temp.max);

      const day = initDate().getDay(dayData.dt);
      setWeatherInfo(`#date-str-${index}`, day.str);
      setWeatherInfo(`#date-num-${index}`, day.num);
      setWeatherIcon(`#icon-${index}`, data.icon);
      setWeatherInfo(`#min-${index}`, `${data.minTemp}°`);
      setWeatherInfo(`#max-${index}`, `${data.maxTemp}°`);
    }
  });
}

async function getWeather(searchTerm = 'Vancouver') {
  const key = 'a4c83ab0b3a1b833a65c948cf5fe6e58';

  try {
    // Get long and lat
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=3&appid=${key}`;
    const response = await fetch(url, { mode: 'cors' });
    const responseData = await response.json();
    setWeatherInfo('#location', `${responseData[0].name}, ${responseData[0].country}`);

    // Perform One Call API
    const urlCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${responseData[0].lat}&lon=${responseData[0].lon}&exclude=minutely,hourly,alerts&appid=${key}&units=metric`;
    const responseCall = await fetch(urlCall, { mode: 'cors' });
    const responseDataCall = await responseCall.json();

    displayCurrentWeatherData(responseDataCall.current);
    displayDailyWeatherData(responseDataCall.daily);
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
