
class UI {

    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
        this.minTemp = document.getElementById('w-min-temp');
        this.maxTemp = document.getElementById('w-max-temp');
    }

    paint(weather){

      this.location.textContent = weather.name;
      this.description.textContent = weather.weather[0].description;
      this.temp.textContent = weather.main.temp + '˚F';
      this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
      this.wind.textContent = `Wind Speed: ${weather.wind.speed}`
      this.minTemp.textContent = `Lows: ${weather.main.temp_min}˚F`;
      this.maxTemp.textContent = `Highs: ${weather.main.temp_max}˚F`;
      console.log(weather);
     // this.location.description = weather.weather.description;
      


    }




}