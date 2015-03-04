var Thermostat = function() {
  this.temperature = 20;
  this.isPowerSaving = true;
};

Thermostat.prototype.increase = function(number) {
	number = number || 1;
	this.temperature += number;

if (this.isPowerSaving)
  if (this.temperature > 25)
		this.temperature = 25;

if (this.temperature > 32)
  this.temperature = 32;

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

Thermostat.prototype.resetButton = function() {
  this.temperature = 20;
};