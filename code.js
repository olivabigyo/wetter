// Here we go

// Init variables
let city = document.querySelector('#searchField');
const btnSubmit = document.querySelector('form button');
let icon = document.querySelector('.icon img');
let temp = document.querySelector('.temp');
let description = document.querySelector('.description');
// let location = document.querySelector('.location')
// let wind = document.querySelector('.wind');
// let hum = document.querySelector('.hum');

// Add listeners
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  getRequest();

});

// Get JSON of the API
function getRequest() {
  // Call API
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=947cf804c478eb1c791115fe97a3238e&units=metric`).then(response => {
    response.json().then(data => {
      console.log(data);
      console.log(data.weather[0].icon);
      getIcon(data.weather[0].icon);
      setData(data);
    });
  });  
}

// Get icon for actual weather
function getIcon(icon) {
  icon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

// Set weather data
function setData(data) {
  temp.innerText = data.main.temp;
}