
let marvels = ['Iron Man', 'The Avengers', 'Black Panther', 'Doctor Strange'];

const addMarvel = (film) => {
    marvels.push(film);
};


addMarvel('Spider-Man: No Way Home');


for (let film of marvels) {
    console.log(film);
}




