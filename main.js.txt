document.getElementById('year').textContent = new Date().getFullYear();

const productos = [
  { nombre: 'iPhone 13', precio: 999000, img: 'https://via.placeholder.com/400x300?text=iPhone+13' },
  { nombre: 'iPhone 14', precio: 1120000, img: 'https://via.placeholder.com/400x300?text=iPhone+14' },
  { nombre: 'iPhone 15', precio: 1300000, img: 'https://via.placeholder.com/400x300?text=iPhone+15' },
  { nombre: 'iPhone 15 Pro', precio: 1550000, img: 'https://via.placeholder.com/400x300?text=iPhone+15+Pro' },
  { nombre: 'iPhone 16', precio: 1650000, img: 'https://via.placeholder.com/400x300?text=iPhone+16' },
  { nombre: 'iPhone 17 Pro Max', precio: 1950000, img: 'https://via.placeholder.com/400x300?text=iPhone+17+Pro+Max' },
];

const grid = document.getElementById('product-grid');
grid.innerHTML = productos.map(p => `
  <div class="card">
    <img src="${p.img}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p>$${p.precio.toLocaleString('es-AR')}</p>
    <a href="https://wa.me/5493584409995?text=Hola!%20Quiero%20consultar%20por%20el%20${encodeURIComponent(p.nombre)}" class="btn" target="_blank">Consultar</a>
  </div>
`).join('');
