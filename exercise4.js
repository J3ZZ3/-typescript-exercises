var Person = /** @class */ (function () {
    function Person(name, age, socialSecurityNumber) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getSocialSecurityNumber = function () {
        return this.socialSecurityNumber;
    };
    return Person;
}());
var Name = 'Danny Phantom';
var Age = 32;
var SocialSecurityNumber = '0101114288196';
var person = new Person(Name, Age, SocialSecurityNumber);
console.log("Name: ".concat(person.getName()));
console.log("Age: ".concat(person.getAge()));
console.log("Social Security Number: ".concat(person.getSocialSecurityNumber()));
