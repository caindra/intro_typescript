//decorators are just functions that can affets the functionality of functions, 
//and we're usually going to use the ones that are already created 

function classDecorator<T extends { new(...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New property';
        hello = 'override';
    }    
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);