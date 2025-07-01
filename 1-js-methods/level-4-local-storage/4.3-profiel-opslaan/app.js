// Opdracht 4.3: Profiel Opslaan
console.log('🚀 Opdracht 4.3: Profiel Opslaan');

function slaProfielOp() {
    // TODO: Maak profiel object
    const naam = document.getElementById('naam').value;
    const email = document.getElementById('email').value;
    const kleur = document.getElementById('kleur').value;
    
    const profiel = {
        naam: naam/* jouw code hier */,
        email: email /* jouw code hier */,
        kleur: kleur/* jouw code hier */,
        opgeslagenOp: new Date().toISOString()
    };
    
    // TODO: Valideer verplichte velden
    if ((!naam || !email || naam.trim() === '' || email.trim() === '')/* jouw code hier */) {
        alert('Naam en email zijn verplicht!');
        return;
    }
    
    // TODO: Sla profiel op in localStorage
    /* jouw code hier */;
    localStorage.setItem('profiel', JSON.stringify(profiel));
    toonProfiel();
}

function laadProfiel() {
    // TODO: Haal profiel op uit localStorage
    const opgeslagenProfiel = localStorage.getItem('profiel');/* jouw code hier */;
    
    if (opgeslagenProfiel) {
        // TODO: Parse JSON en vul formulier
        const profiel = JSON.parse(localStorage.getItem('profiel'));/* jouw code hier */;
        
        document.getElementById('naam').value = profiel.naam || '';            /* jouw code hier */;
        document.getElementById('email').value = profiel.email || '';         /* jouw code hier */;
        document.getElementById('kleur').value =  profiel.kleur || '';            /* jouw code hier */;
        
        return profiel;
    }
    return null;
}

function toonProfiel() {
    const profiel = laadProfiel();
    const container = document.getElementById('profiel-weergave');
    
    if (profiel) {
        // TODO: Toon profiel gegevens
        container.innerHTML = `
            <h3>Opgeslagen Profiel:</h3>
            <p><strong>Naam:</strong> ${profiel.naam/* jouw code hier */}</p>
            <p><strong>Email:</strong> ${profiel.email/* jouw code hier */}</p>
            <p><strong>Kleur:</strong> ${profiel.kleur/* jouw code hier */}</p>
        `;
    } else {
        container.innerHTML = '<p>Nog geen profiel opgeslagen.</p>';
    }
}

window.addEventListener('DOMContentLoaded', () => {
laadProfiel();
toonProfiel();
});
// TODO: Initialisatie
/* jouw code hier */;

