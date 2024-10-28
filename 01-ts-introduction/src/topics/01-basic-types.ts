
const name: string = 'Caindra';
//name = 123; Type Error

//let hpPoints: number = 95;
//hpPoints = 'FULL'; Type Error

let hpPoints: number | 'FULL' = 95;
const isAlive : boolean = true;

console.log({
    name, hpPoints, isAlive
});

export {};