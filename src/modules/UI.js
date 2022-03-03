import loadFeatures from './functions';
// import sunny from '../images/sunny.jpeg';
// import night from '../images/night.jpg';

const content = document.querySelector('.content');

function addUserInput() {
  const container = document.createElement('div');
  container.setAttribute('id', 'input-container');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'user-input');
  input.setAttribute('placeholder', 'Search for location');
  container.appendChild(input);

  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-magnifying-glass');
  container.appendChild(icon);

  return container;
}

function addWeatherInfo(field) {
  const temp = document.createElement('div');
  temp.setAttribute('id', `${field}`);
  return temp;
}

function addSubSuppContainer(iconClass, field) {
  const container = document.createElement('div');
  container.classList.add('sub-supplemental');

  // Add icon
  const icon = document.createElement('div');
  icon.classList.add('supp-icon', 'fa-solid', iconClass);
  container.appendChild(icon);

  // Add value
  container.appendChild(addWeatherInfo(field));

  return container;
}

function addTempContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'temperature-container');

  const icon = document.createElement('div');
  icon.classList.add('weather-icon');
  container.appendChild(icon);

  const temperature = document.createElement('div');
  temperature.setAttribute('id', 'data-container');

  const currentTempText = document.createElement('div');
  currentTempText.textContent = 'Current';
  temperature.appendChild(currentTempText);

  temperature.appendChild(addWeatherInfo('temperature'));
  container.appendChild(temperature);

  return container;
}

// Main weather data
function addMainWeatherContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'main-container');

  container.appendChild(addWeatherInfo('weather'));
  container.appendChild(addWeatherInfo('location'));

  container.appendChild(addTempContainer());
  container.appendChild(addUserInput());

  const range = document.createElement('div');
  range.setAttribute('id', 'range');
  range.appendChild(addSubSuppContainer('fa-temperature-low', 'temp-low'));
  range.appendChild(addSubSuppContainer('fa-temperature-high', 'temp-high'));
  container.appendChild(range);

  return container;
}

// Supplemental weather data
function addSuppWeatherContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'supplemental-container');

  // Wind speed, pressure, humidity
  container.appendChild(addSubSuppContainer('fa-wind', 'wind'));
  container.appendChild(addSubSuppContainer('fa-stopwatch', 'pressure'));
  container.appendChild(addSubSuppContainer('fa-droplet', 'humidity'));

  // Sunrise and sunset time
  container.appendChild(addSubSuppContainer('fa-sun', 'sunrise'));
  container.appendChild(addSubSuppContainer('fa-moon', 'sunset'));

  return container;
}

// Daily weather data
function addDailyWeatherContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'daily-container');

  return container;
}

function initMain() {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');
  main.classList.add('background-img');

  main.appendChild(addMainWeatherContainer());
  main.appendChild(addSuppWeatherContainer());
  main.appendChild(addDailyWeatherContainer());

  content.appendChild(main);
}

function initFooter() {
  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');
  content.appendChild(footer);
}

function loadpage() {
  // initHeader();
  initMain();
  initFooter();

  loadFeatures();
}

export default loadpage;
