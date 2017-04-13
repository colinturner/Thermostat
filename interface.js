$(document).ready(function(){
  var thermo = new Thermostat();
  updateTemp();

  $('#up').on('click', function(){
    thermo.up();
    updateTemp();
  })

  $('#down').click(function(){
    thermo.down();
    updateTemp();
  })

  $('#powerSave').on('click', function(){
    thermo.switchPowerSave();
     if ($(this).text() == 'ON') {
       $('#powerSave').text('OFF')
     } else {
       $('#powerSave').text('ON')
   }
  })

  $('#reset').on('click', function(){
    thermo.reset();
    updateTemp();
  })

  // $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6bc57444942161bf608502df76fc9c0f&units=metric', function(data) {
  //   $('#current-temperature').text(data.main.temp);
  // })

  displayWeather("London");

  $("#select-city").submit(function(event) {
    event.preventDefault();
    var city = $("#current-city").val();
    displayWeather(city);
  });

  // $("#current-city").change(function() {
  //   var city = $("#current-city").val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6bc57444942161bf608502df76fc9c0f&units=metric', function(data) {
  //   $('#current-temperature').text(data.main.temp);
  //   })
  // });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=6bc57444942161bf608502df76fc9c0f';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $("#current-temperature").text(data.main.temp);
    });
  }

  function updateTemp() {
    $('#temp').text(thermo.temp);
    $('#temp').attr('class', thermo.energyUsage());
    $('#energy-display').text(thermo.energyUsage());
  }


})
