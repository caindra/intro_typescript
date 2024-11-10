import { Product, taxCalculation } from './06-functions-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nintendo Switch',
        price: 350
    },
    {
        description: 'Sony Headset',
        price: 300
    }
];

//Tax = 0.15%
const totalTax = 0.15;
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: totalTax
});

console.log(`Total; ${total}`);
console.log(`Tax; ${tax}`);