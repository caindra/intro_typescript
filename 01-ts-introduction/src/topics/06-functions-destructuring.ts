interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Pro",
    price: 450.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//function taxCalculation(options: TaxCalculationOptions): [number, number] {
//function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {tax, products} = options;
    let total = 0;
    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxResult] = taxCalculation({
    products: shoppingCart,
    tax: tax
    //also it can be just 'tax'
});

console.log(`Total: ${total}`);
console.log(`Tax: ${taxResult}`);

export {};