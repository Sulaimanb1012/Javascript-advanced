// Opdracht 4.1: Simpele Opslag
console.log("🚀 Opdracht 4.1: Simpele Opslag");

function slaOpNaam() {
  console.log("slaOpNaam() aangeroepen");

  // TODO: Haal naam uit input veld
  const naam = document.getElementById("naam-input").value;

  // TODO: Check of naam niet leeg is
  if (naam === "" /* jouw code hier */) {
    alert("Voer eerst een naam in!");
    return;
  }

  // TODO: Sla naam op in localStorage
  localStorage.setItem("naam", naam); /* jouw code hier */

  // TODO: Toon welkomstbericht
  toonWelkom();

  // Maak input leeg
  document.getElementById("naam-input").value = "";
}

function toonWelkom() {
  // TODO: Haal naam op uit localStorage
  const opgeslagenNaam = localStorage.getItem("naam"); /* jouw code hier */

  const welkomElement = document.getElementById("welkom-bericht");

  // TODO: Toon juiste bericht
  if (opgeslagenNaam && opgeslagenNaam.trim() !== "" /* jouw code hier */) {
    welkomElement.textContent = `Welkom, ${opgeslagenNaam}!`; /* jouw code hier */
  } else {
    welkomElement.textContent = "Geen naam opgeslagen.";
  }
}

function wisNaam() {
  // TODO: Verwijder naam uit localStorage
  /* jouw code hier */ localStorage.removeItem("naam");
  toonWelkom();
}

// TODO: Roep toonWelkom() aan bij pagina laden
/* jouw code hier */ window.onload = function () {
  toonWelkom();
};
