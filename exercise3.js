// 1. Write a function that takes two numbers as parameters and returns their sum.
var Calculator = function (a, b) {
    return a + b;
};
// 2. Write a function that returns a fixed number.
var FixedNumber = function () {
    return 69;
};
//Write a function that takes a string and an optional boolean parameter.
// If the boolean is true, return the string in uppercase; otherwise, return it in lowercase.
var Condition = function (input, toUpperCase) {
    return toUpperCase ? input.toUpperCase() : input.toLowerCase();
};
console.log(Calculator(18, 22));
console.log(FixedNumber());
console.log(Condition("Ballocks", false));
console.log(Condition("Ballocks", true));
