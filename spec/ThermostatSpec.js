describe ("Thermostat", function() {

  var thermo;

  it ("should have a temperature of 20 degrees to start", function() {
    var thermo = new Thermostat;
    expect(thermo.temperature).toEqual (20);
  });

  it ("should be able to have it's temperature increased", function() {
  	var thermo = new Thermostat;
  	thermo.increase();
  	expect(thermo.temperature).toEqual (21);
  });

});