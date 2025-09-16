fetch('https://fortnite-api.com/v2/cosmetics/new')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cosmetics');
    
    for (let cosmetics of data.data.items) {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${cosmetics.name}</h3>
        <p>Type: ${item.type.displayValue}</p>
        <img src="${cosmetics.images.icon}" alt="${item.name}" width="100">
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
    document.getElementById('cosmetics').innerHTML =
      '<p>Sorry, de data kan niet geladen worden.</p>';
  });
