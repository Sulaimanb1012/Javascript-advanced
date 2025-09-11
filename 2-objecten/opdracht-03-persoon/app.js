const person = {
  name: 'Emma de Vries',
  age: 30,
  birthDate: '1994-02-14',
  gender: 'Female',
  isAlive: true,
  hobbies: ['Reading', 'Dancing', 'Painting', 'Traveling'],


  changeName: function(newName) {
    this.name = newName;
  },


  toggleIsAlive: function() {
    this.isAlive = !this.isAlive;
  },


  addHobby: function(newHobby) {
    this.hobbies.push(newHobby);
  }
};

const output = document.querySelector('.output');

function showPerson() {
  output.innerHTML = `
    <p>Name: ${person.name}</p>
    <p>Age: ${person.age}</p>
    <p>Birth Date: ${person.birthDate}</p>
    <p>Gender: ${person.gender}</p>
    <p>Is Alive: ${person.isAlive ? 'Yes' : 'No'}</p>
    <p>Hobbies: ${person.hobbies.join(', ')}</p>
  `;
}

showPerson();


