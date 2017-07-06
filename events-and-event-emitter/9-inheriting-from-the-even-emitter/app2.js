var util = require('util');

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

Person.prototype.greet = function() {
  console.log('Hello ' + this.firstname + '' +
  this.lastname);
}

function Policeman() {
  Person.call(this);
  this.badgenumber = '1234';
}

function Fireman() {
  this.enginenumber = '1234';
}

var person = new Person();

util.inherits(Fireman, Person);
var fireman = new Fireman();

//returns Hello undefinedundefined because 'Person.call(this);' is not run
fireman.greet();

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
console.log(officer.__proto__ !== person.__proto__);
