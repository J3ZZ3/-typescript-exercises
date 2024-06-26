class Basic_calculator {
    
    add(a: number, b: number): number {
        return a + b;
    }

    minus(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Undefined";
        }
        return a / b;
    }
}

const results = new Basic_calculator();

console.log("6 + 12 =", results.add(6, 12));  
console.log("2 - 9 =", results.minus(2, 9)); 
console.log("18 * 22 =", results.multiply(18, 22)); 
console.log("138 / 2 =", results.divide(138, 2));
console.log("6 / 0 =", results.divide(6, 0));