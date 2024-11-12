export class Person {
    //public name: string;
    //private address: string;

    constructor(
        public name: string, 
        private address: string = 'No address'
    ) {
        this.name = name;
        this.address = address;
    }
}

const ironman = new Person('Caindra', 'Neverland');
console.log(ironman);
//console.log(ironman.address);