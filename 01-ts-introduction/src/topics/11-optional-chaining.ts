export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Sheldon'
}

const passenger2: Passenger = {
    name: 'Alissa',
    children: ['Rob', 'Zoey']
}

const returnChildrenNumber = (passenger: Passenger): number => {
    //const howManyChildren = passenger.children!.length; >> it's always going to receive a number
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);