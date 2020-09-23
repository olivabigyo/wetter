// Here we go

// Init variables
let city = document.querySelector('#searchField');
const btnSubmit = document.querySelector('form button');

// Add listeners
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  getRequest();

});


function getRequest() {
  // Call API
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=947cf804c478eb1c791115fe97a3238e`).then(response => {
    response.json().then(data => {
      console.log(data);
    });
  });  
}