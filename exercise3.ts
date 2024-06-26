// 1. Write a function that takes two numbers as parameters and returns their sum.
let Calculator = (a: 18, b: 22): number {
    return a + b;
}

// 2. Write a function that returns a fixed number.
let FixedNumber = (): number {
    return 69;
}

//Write a function that takes a string and an optional boolean parameter.
// If the boolean is true, return the string in uppercase; otherwise, return it in lowercase.
let Condition = (input: string, toUpperCase?: boolean): string {
    return toUpperCase ? input.toUpperCase() : input.toLowerCase();
}

console.log(Calculator(18,22));
console.log(FixedNumber());
console.log(Condition("Ballocks", false));
console.log(Condition("Ballocks", true));
