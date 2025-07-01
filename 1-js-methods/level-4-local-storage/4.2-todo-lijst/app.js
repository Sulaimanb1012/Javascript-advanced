// Opdracht 4.2: Todo Lijst
console.log('🚀 Opdracht 4.2: Todo Lijst');

let taken = [];

function voegTaakToe() {
    const input = document.getElementById('nieuwe-taak');
    const taakTekst = input.value.trim();/* jouw code hier - haal waarde op en trim */;
    
    if (taakTekst === '') return;
    
    // TODO: Voeg taak toe aan array
    taken.push({
        id: Date.now(),
        tekst: taakTekst/* jouw code hier */,
        voltooid: false
    });
    
    // TODO: Sla taken op in localStorage
    /* jouw code hier - gebruik JSON.stringify */;
   localStorage.setItem('taken', JSON.stringify(taken));

    // Maak input leeg en update UI
    input.value = '';
    toonTaken();
}

function laadTaken() {
    // TODO: Haal taken op uit localStorage
    const opgeslagenTaken = localStorage.getItem('taken');/* jouw code hier */
    
    if (opgeslagenTaken) {
        // TODO: Parse JSON naar array
        taken = JSON.parse(opgeslagenTaken);/* jouw code hier */
    }
}

function toonTaken() {
    const container = document.getElementById('taken-lijst');
    
    // TODO: Genereer HTML voor alle taken
    const takenHTML = taken.map(taak => `
        <div class="taak">
            ${ taak.tekst/* jouw code hier - taak tekst */}
            <button onclick="verwijderTaak(${taak.id})">🗑️</button>
        </div>
    `).join('');
    
    container.innerHTML = takenHTML;
}

function verwijderTaak(taakId) {
    // TODO: Verwijder taak uit array
    /* jouw code hier - gebruik filter */;
     taken = taken.filter(taak => taak.id !== taakId);
    // TODO: Sla taken op en update UI
  
   
    /* jouw code hier */;
     localStorage.setItem('taken', JSON.stringify(taken));
    toonTaken();
}

window.addEventListener('DOMContentLoaded', () => {
    laadTaken();
    toonTaken();
});

// TODO: Initialisatie bij pagina laden
/* jouw code hier */;
