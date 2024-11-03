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
const multiplyResult: number = multiply(5);
/*
console.log({ result: result });
console.log({ result, result2, multiplyResult });
console.log({ addNumbersArrow });
*/

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

strider.showHp();
healCharacter(strider, 10);
strider.showHp();
healCharacter(strider, 50);
strider.showHp();


export {};