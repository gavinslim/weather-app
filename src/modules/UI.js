import loadFeatures from './functions';

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

function addWeatherContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'weather-container');
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
  main.appendChild(addUserInput());
  main.appendChild(addWeatherContainer());
  content.appendChild(main);
}

function initFooter() {
  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');
  content.appendChild(footer);
}

function loadpage() {
  initHeader();
  initMain();
  initFooter();

  loadFeatures();
}

export default loadpage;
