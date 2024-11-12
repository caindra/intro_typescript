export class Person {
    //public name: string;
    //private address: string;

    constructor(
        public firstName: string, 
        public lastName: string, 
        private address: string = 'No address'
    ) {
        //this.firstName = firstName;
        //this.lastName = lastName;
        //this.address = address;
    }
}

/*
export class Hero extends Person {
    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'New York');
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
    }
}
*/

export class Hero {

    //public person: Person;

    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        //this.person = new Person(realName);
        this.alterEgo = alterEgo;
        this.age = age;
    }
}

const person = new Person('Caindra', 'Watts', 'Neverland');
//console.log(person);
const ironman = new Hero('IronMan', 45, 'Tony', person);
console.log(ironman);
//console.log(ironman.address);