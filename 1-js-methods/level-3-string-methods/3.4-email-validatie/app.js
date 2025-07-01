// Opdracht 3.4: Email Validatie
console.log('🚀 Opdracht 3.4: Email Validatie');

function valideerEmail(email) {
    // TODO: Check of email geldig is
    // Regels: moet @ bevatten, geen spaties, eindigt op .com/.nl/.org
    
    const schoonEmail = email.trim().toLowerCase();/* jouw code hier - trim en lowercase */
    
    // Check @ aanwezig
    if (!schoonEmail.includes('@')) return false;
    
    // Check geen spaties
    if (!schoonEmail.includes(' ')) return false;
    
    // Check geldig einde
    const geldigeEindes = ['.com', '.nl', '.org'];
    return geldigeEindes.some(domein => schoonEmail.endsWith(domein));
}

// Test de functie
const testEmails = ['jan@test.com', 'marie@voorbeeld.nl', 'fout@test.be', 'fout email@test.com'];
testEmails.forEach(email => {
    console.log(`${email}: ${valideerEmail(email)}`);
});