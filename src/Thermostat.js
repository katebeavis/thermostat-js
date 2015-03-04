var Thermostat = function() {
  this.temperature = 20;
  this.isPowerSaving = true;
};

Thermostat.prototype.increase = function() {
	this.temperature += 1;
};

Thermostat.prototype.decrease = function(number) {
	number = number || 1;
  this.temperature -= number;
  if (this.temperature < 10)
  	this.temperature = 10;
};

Thermostat.prototype.switchPowerSaving = function() {
  this.isPowerSaving = !this.isPowerSaving;
};