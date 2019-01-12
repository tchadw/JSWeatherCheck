// init storage object
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();
// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// init ui object
const ui= new UI();


// add change location event
document.addEventListener('DOMContentLoaded', getWeather)



// this getWeather function will be called as soon as the DOM loads
document.getElementById('w-change-btn').addEventListener('click', () => {

  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country)

  // set location data in local storage
  storage.setLocationData(city, country);


  // get and display weather
  getWeather();

  // need to use jquery here :( 
  $('#locModal').modal('hide');

})



// this gets the weather and displays it (by means of a ui instance)
function getWeather(){
// call getWeather method on the weather instance
weather.getWeather()
  .then(results => {
    //console.log(results)
    ui.paint(results)})
    .catch(err => err);
  }

    //results => ui.paint(results)