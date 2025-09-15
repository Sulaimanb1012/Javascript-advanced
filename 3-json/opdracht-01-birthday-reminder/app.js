const title = document.getElementById("title");
const list = document.getElementById("list");
const clearBtn = document.getElementById("clearbtn");

let people = [];


fetch("birthday.json")
  .then(res => res.json())
  .then(data => {
    people = data;
    renderList();
  });


function renderList() {
  list.innerHTML = "";
  title.textContent = `${people.length} birthdays today`;

  people.forEach(person => {
    const li = document.createElement("li");
    li.classList.add("person");

    li.innerHTML = `
      <img src="${person.image}" alt="${person.name}">
      <div>
        <h4>${person.name}</h4>
        <p>${person.age} years</p>
      </div>
    `;

    list.appendChild(li);
  });
}


clearBtn.addEventListener("click", () => {
  people = [];
  renderList();
});
