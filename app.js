/*
  SFU Hackathan: Mountain Madness
  The Weatherman
  Hakim Bashe, Trevor Pinto, Sumeet Sara
 */


var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


// API using 'OpenWeatherMap'
button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=3fb8cb913d2ab2379bb82c7cb4abdf89&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  tempValue = tempValue.toFixed(1);
  temp.innerHTML = "Temp: "+tempValue + '\u00B0' +" C";
  input.value ="";

  // If "snow", "rain", "clouds", or "sun" appear in description from weather api
  // Set the image accordingly to the weather
  if(descValue.includes("snow")) {
    var randomImageSource = "weathers/snow.png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource);
  } else if(descValue.includes("clear") || descValue.includes("sun")) {
    var randomImageSource = "weathers/sun.jpg";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource);
  } else if(descValue.includes("cloud")) {
    var randomImageSource = "weathers/cloud.jpg";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource);
  } else if(descValue.includes("rain") || descValue.includes("showers")) {
    var randomImageSource = "weathers/rain.jpg";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource);
  }

})

.catch(err => alert("Wrong city name!"));
})
