var Basic_calculator = /** @class */ (function () {
    function Basic_calculator() {
    }
    Basic_calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Basic_calculator.prototype.minus = function (a, b) {
        return a - b;
    };
    Basic_calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Basic_calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            return "Undefined";
        }
        return a / b;
    };
    return Basic_calculator;
}());
var results = new Basic_calculator();
console.log("6 + 12 =", results.add(6, 12));
console.log("2 - 9 =", results.minus(2, 9));
console.log("18 * 22 =", results.multiply(18, 22));
console.log("138 / 2 =", results.divide(138, 2));
console.log("6 / 0 =", results.divide(6, 0));
