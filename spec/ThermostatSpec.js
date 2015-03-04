describe ("Thermostat", function() {

  var thermo;

  it ("should have a temperature of 20 degrees to start", function() {
    var thermo = new Thermostat;
    expect(thermo.temperature).toEqual (20);
  });

});