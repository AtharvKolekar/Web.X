class Calculator{

    add(a:number, b:number): number{
        return a+b
    }

    sub(a:number, b:number): number{
        return a-b
    }

    mul(a:number, b:number): number{
        return a*b
    }
}

const calc = new Calculator();
console.log(calc.add(5,3));
console.log(calc.sub(5,3));
console.log(calc.mul(5,3));