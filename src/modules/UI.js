import loadFeatures from './functions';
import sunny from '../images/sunny.jpeg';
import night from '../images/night.jpg';

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

// Main weather data
function addMainWeatherContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'main-container');

  container.appendChild(addWeatherInfo('weather'));
  container.appendChild(addWeatherInfo('location'));

  const iconContainer = document.createElement('div');
  iconContainer.setAttribute('id', 'icon-container');

  const icon = document.createElement('div');
  icon.classList.add('weather-icon');
  iconContainer.appendChild(icon);
  iconContainer.appendChild(addWeatherInfo('temperature'));

  container.appendChild(iconContainer);

  container.appendChild(addUserInput());

  return container;
}

// Supplemental weather data
function addSuppWeatherContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'supp-container');

  return container;
}

// Daily weather data
function addDailyWeatherContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'daily-container');

  return container;
}

function addWeatherContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'weather-container');

  container.appendChild(addMainWeatherContainer());
  container.appendChild(addSuppWeatherContainer());
  container.appendChild(addDailyWeatherContainer());

  return container;
}

function initHeader() {
  const header = document.createElement('div');
  header.setAttribute('id', 'header');
  content.appendChild(header);
}

function initMain() {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');
  main.classList.add('background-img');

  // const img = new Image();
  // img.src = night;
  // img.classList.add('background-img');
  // main.appendChild(img);

  // main.appendChild(addUserInput());
  main.appendChild(addWeatherContainer());
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
