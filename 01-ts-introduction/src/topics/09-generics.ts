//Don't use the data type 'any', you should be very careful about it since using it means that you exatly know which type
//you're managing with your functions, and that's not always the case

//The '<>' makes the function a generic one. It's used to writing a 'T', although it can be any letter
export function whatsMyType<T>( argument: T): T {
    return argument;
}

const amIString = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));