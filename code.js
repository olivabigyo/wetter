// Here we go

// Init variables
let city = document.querySelector('#searchField');
const btnSubmit = document.querySelector('form button');
const icon = document.querySelector('.icon img');

// Add listeners
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  getRequest();

});


function getRequest() {
  // Call API
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=947cf804c478eb1c791115fe97a3238e&units=metric`).then(response => {
    response.json().then(data => {
      console.log(data.weather[0].icon);
      getIcon(data.weather[0].icon);
    });
  });  
}

// Get icon
function getIcon(icon) {
  icon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}