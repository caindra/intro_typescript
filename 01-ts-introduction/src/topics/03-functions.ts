// function addNumbers(a: any, b)
function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number):string => { return `${a + b}` }

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

addNumbers(1, 2);

const result: number = addNumbers(1, 2);
const result2: string = addNumbers(1, 2).toString();
const multiplyResult = multiply(5);

console.log({ result: result });
console.log({ result });
console.log({ addNumbersArrow });

export {};