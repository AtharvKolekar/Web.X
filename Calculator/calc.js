"use strict";
class Calculator {
    add(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    mul(a, b) {
        return a * b;
    }
}
const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.sub(5, 3));
console.log(calc.mul(5, 3));
