// Opdracht 3.3: Template Literals
console.log('🚀 Opdracht 3.3: Template Literals');

const personen = [
    {naam: 'Jan', leeftijd: 25, stad: 'Amsterdam'},
    {naam: 'Marie', leeftijd: 30, stad: 'Rotterdam'},
    {naam: 'Piet', leeftijd: 22, stad: 'Utrecht'}
];

// TODO: Maak beschrijvingen met template literals
const beschrijvingen = personen.map(persoon => `${persoon.naam} (${persoon.leeftijd} jaar) woont in ${persoon.stad}.`);/* jouw code hier - gebruik map() en template literals */

console.log('Beschrijvingen:', beschrijvingen);
console.log('Verwacht: ["Jan (25 jaar) woont in Amsterdam.", ...]');