describe ("Thermostat", function() {

  var thermo;

  beforeEach(function() {
    thermo = new Thermostat;
  });

  it ("should have a temperature of 20 degrees to start", function() {
    expect(thermo.temperature).toEqual (20);
  });

  it ("should be able to have it's temperature increased", function() {
  	thermo.increase();
  	expect(thermo.temperature).toEqual (21);
  });

  it ("should be able to have it's temperature decreased", function() {
    thermo.decrease();
    expect(thermo.temperature).toEqual (19);
  });

  it ("should be able to decrease temperature by a specific number of degrees", function() {
    thermo.decrease(10);
    expect(thermo.temperature).toEqual (10);
  });

  it("should have a minimum temperature of 10", function() {
  	thermo.decrease(11)
  	expect(thermo.temperature).toEqual (10);
  });

});