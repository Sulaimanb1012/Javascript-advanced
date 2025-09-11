const boek = {
  title: 'Het Leven Van Loser',
  author: 'Jeff Kinney',
  publisher: 'Leopold',
  year: 2007,
  sold: 2000000,
  price: '€12.99'
};

const output = document.querySelector('.output');

const toonBoek = () => {
  output.innerHTML = `
    <p>Titel: ${boek.title}</p>
    <p>Schrijver: ${boek.author}</p>
    <p>Uitgever: ${boek.publisher}</p>
    <p>Jaar: ${boek.year}</p>
    <p>Verkocht: ${boek.sold}</p>
    <p>Prijs: ${boek.price}</p>
  `;
};

toonBoek();
