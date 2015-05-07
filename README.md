[![Code Climate](https://codeclimate.com/github/katebeavis/thermostat-js/badges/gpa.svg)](https://codeclimate.com/github/katebeavis/thermostat-js)
# Thermostat

Thermostat is a responsive thermometer that changes colour according to the temperature is it set at.

It has a range of temperatures from 10 - 32 and has the following set of rules applied to it:
- Starts at 20 degrees by default
- The gauge is coloured orange between temperatues of 18 - 24
- Turns red between temperatures 25 - 32
- Turns green between temperatures 10 - 17
- Has a powersaving mode that is on by default and limits the maximum temperature to 25

## Objectives
To understand jQuery and how it works in the DOM.

I really enjoyed this project as I felt we got to see just a little peek of how powerful Javascript can be when combined with jQuery. It's exciting to think of all the possibilities that could be done with it, and how simple static websites can be transformed into dynamic ones with a few lines of code!

## Screenshots
<div align="center">
  <img width="90%" src="public/images/orange-thermo.png">
</div>
<div>
  <img width="45%" src="public/images/red-thermo.png">
</div>
<div>
  <img width="45%" src="public/images/green-thermo.png">
</div>

My design was based on that of one of my coaches, Roi Driscoll

## Technology
- Javascript
- jQuery
- Jasmine
- HTML
- CSS

## To Run
```
$ git clone https://github.com/katebeavis/thermostat-js.git
$ cd thermostat-js
$ open index.html
```

## To Run Tests
```
$ open SpecRunner.html
```
