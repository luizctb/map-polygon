const polygonsData = [
    {
      name: 'Polígono 1',
      coordinates: [[51.509, -0.08], [51.503, -0.06], [51.51, -0.047], [51.52, -0.065], [51.509, -0.08]],
      info: 'Informação sobre Polígono 1'
    },
    {
      name: 'Polígono 2',
      coordinates: [[51.5, -0.06], [51.48, -0.05], [51.52, -0.04], [51.5, -0.06]],
      info: 'Informação sobre Polígono 2'
    },
    // Adicione mais dados conforme necessário
  ];
  
  // Inicializando o mapa
  const map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Adicionando polígonos ao mapa e ações de clique
  const polygons = [];
  polygonsData.forEach(data => {
    const polygon = L.polygon(data.coordinates, { color: 'blue' }).addTo(map);
    polygon.bindPopup(data.info); // Mostra informações ao clicar no polígono
    polygons.push(polygon);
  
    polygon.on('click', () => {
      addToTable(data);
    });
  });
  
  // Função para adicionar entrada à tabela
  function addToTable(data) {
    const tableBody = document.querySelector('#data-table tbody');
    const row = `<tr><td>${data.name}</td><td>${data.info}</td></tr>`;
    tableBody.innerHTML += row;
  }