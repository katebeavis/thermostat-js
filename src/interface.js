var thermo = new Thermostat();

$(document).ready(function() {

  $('#temperature').text(thermo.temperature);

  $('.increaseTemperature').click( function() {
  	thermo.increase();
  	$('#temperature').text(thermo.temperature);
  });

  $('.decreaseTemperature').click( function() {
    thermo.decrease();
    $('#temperature').text(thermo.temperature);
  });

});
