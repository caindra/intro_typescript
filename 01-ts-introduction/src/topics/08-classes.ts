export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Caindra';
        this.address = 'Neverland';
    }
}

const ironman = new Person();
console.log(ironman);
console.log(ironman.address);