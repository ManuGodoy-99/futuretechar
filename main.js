const productos = [
  { nombre: "iPhone 13", img: "https://via.placeholder.com/600x400?text=iPhone+13" },
  { nombre: "iPhone 14", img: "https://via.placeholder.com/600x400?text=iPhone+14" },
  { nombre: "iPhone 15", img: "https://via.placeholder.com/600x400?text=iPhone+15" },
  { nombre: "iPhone 15 Pro", img: "https://via.placeholder.com/600x400?text=iPhone+15+Pro" },
  { nombre: "iPhone 16", img: "https://via.placeholder.com/600x400?text=iPhone+16" },
  { nombre: "iPhone 17 Pro Max", img: "https://via.placeholder.com/600x400?text=iPhone+17+Pro+Max" },
  { nombre: "AirPods Pro", img: "https://via.placeholder.com/600x400?text=AirPods+Pro" },
  { nombre: "MacBook Pro", img: "https://via.placeholder.com/600x400?text=MacBook+Pro" },
  { nombre: "Apple Watch", img: "https://via.placeholder.com/600x400?text=Apple+Watch" },
  { nombre: "iPad", img: "https://via.placeholder.com/600x400?text=iPad" },
];

const grid = document.getElementById('grid');
if (grid){
  grid.innerHTML = productos.map(p => `
    <article class="product">
      <img src="${p.img}" alt="${p.nombre}" loading="lazy">
      <div class="info">
        <div class="title">${p.nombre}</div>
        <div class="cta">
          <a class="btn" target="_blank" href="https://wa.me/5493584409995?text=Hola!%20Quiero%20consultar%20por%20${encodeURIComponent(p.nombre)}">Consultar</a>
        </div>
      </div>
    </article>
  `).join('');
}
const y=document.getElementById('year'); if (y) y.textContent=new Date().getFullYear();