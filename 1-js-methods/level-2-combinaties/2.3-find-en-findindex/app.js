// Opdracht 2.3: Find en FindIndex
console.log('🚀 Opdracht 2.3: Find en FindIndex');

const producten = [
    {naam: 'laptop', prijs: 800},
    {naam: 'muis', prijs: 25},  
    {naam: 'toetsenbord', prijs: 75},
    {naam: 'monitor', prijs: 300}
];

// TODO: Zoek het product met naam 'laptop'
const laptop =  producten.find(product  => product.naam === "laptop")
console.log('Laptop product:', laptop);

// TODO: Zoek de index van product 'muis'
const muisIndex = producten.findIndex(product  => product.naam === "muis")
console.log('Index van muis:', muisIndex);

// TODO: Zoek het eerste product boven €200
const duurProduct = producten.find(product => product.prijs > 200); /* jouw /* jouw code hier */
console.log('Eerste dure product:', duurProduct);