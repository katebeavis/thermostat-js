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

  $('.reset').click( function() {
    thermo.resetButton();
    $('#temperature').text(thermo.temperature);
  });

  $('.powerSave').click( function() {
    thermo.switchPowerSaving();
    $('#power').text(thermo.isPowerSaving);
    $('#temperature').text(thermo.temperature);

  });

});
