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

  // $('#energyUsage').on('click', function(){
  // })

  function updateTemp() {
    $('#temp').text(thermo.temp);
    $('#temp').attr('class', thermo.energyUsage());
  }

})
