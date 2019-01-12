class Weather {
  constructor(city, country) {
    this.apiKey = "cbec1d4e1dfa5934aaa1ad16a13cbc74";
    this.city = city;
    this.country = country;
  }

  // fetch weather from api

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&APPID=${this.apiKey}&units=imperial`
    );

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }
}