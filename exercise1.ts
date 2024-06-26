// 1. Declare a variable that holds a string value without explicitly stating its type
let Zeus = " God Of The Sky!";

// 2. Declare a variable that holds a number value and explicitly state its type
let Athena: number = 42;

// 3. Declare a variable that can hold a value of any type
let Artemis: any = "Hunting!";
Artemis = 1000; 
Artemis = true; 

// 4. Declare a variable that can hold either a string or a number
let  Aphrodite: string | number;
Aphrodite = "love And Passion";
Aphrodite = 30; 

console.log(Zeus)
console.log(Athena)
console.log(Artemis)
console.log(Aphrodite)

