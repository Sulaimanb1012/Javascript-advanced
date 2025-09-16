fetch('https://restcountries.com/v3.1/all')
  .then(countries => countries.json())
  .then(countries => {

    const container = document.getElementById('countries');
    
    for (let country of countries.data.city) {
        console.log(countries);
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${country.name}</h3>
        <p>Type: ${country.type}</p>
        <img src="${country.images.large}" alt="${country.name}" width="100">
      `;
      div.style.border = '1px solid #ccc';
      div.style.margin = '10px';
      div.style.padding = '10px';
      div.style.borderRadius = '5px';
      
      container.appendChild(div);
    }
  })
  .catch(error => {
    console.log('Fout:', error);
    document.getElementById('countries').innerHTML =
      '<p>Sorry het ding kan niet geladen worden.</p>';
  });
