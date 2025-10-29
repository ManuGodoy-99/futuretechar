// Future Tech AR - Catálogo con imágenes reales y animaciones

// Inyectar estilos dinámicos (hover y botón)
const style = document.createElement('style');
style.textContent = `
.product img { transition: transform .4s ease; }
.product:hover img { transform: scale(1.05); }
.btn { transition: background .3s ease, transform .2s ease; }
.btn:hover { background: #ffa64d; transform: translateY(-2px); }
`;
document.head.appendChild(style);

// Catálogo con imágenes reales y funcionales
const productos = [
  { nombre: "iPhone 13", img: "https://images.unsplash.com/photo-1633477197493-6f7f0f1e5a6a?auto=format&fit=crop&w=800&q=80" },
  { nombre: "iPhone 14", img: "https://images.unsplash.com/photo-1663071901501-9b0a7dbeed52?auto=format&fit=crop&w=800&q=80" },
  { nombre: "iPhone 15", img: "https://images.unsplash.com/photo-1695044874050-d651d81d77ec?auto=format&fit=crop&w=800&q=80" },
  { nombre: "iPhone 15 Pro", img: "https://images.unsplash.com/photo-1706818325039-b2b6f0d6798f?auto=format&fit=crop&w=800&q=80" },
  { nombre: "iPhone 16", img: "https://images.unsplash.com/photo-1721947033287-c85a3b3d7d61?auto=format&fit=crop&w=800&q=80" },
  { nombre: "iPhone 17 Pro Max", img: "https://images.unsplash.com/photo-1721924840311-c58a64c85c3e?auto=format&fit=crop&w=800&q=80" },
  { nombre: "AirPods Pro", img: "https://images.unsplash.com/photo-1587574293340-e0011c4e8f9b?auto=format&fit=crop&w=800&q=80" },
  { nombre: "MacBook Pro", img: "https://images.unsplash.com/photo-1502880191013-6ae8a3d48b12?auto=format&fit=crop&w=800&q=80" },
  { nombre: "Apple Watch", img: "https://images.unsplash.com/photo-1600181953360-7756ccdfcbf1?auto=format&fit=crop&w=800&q=80" },
  { nombre: "iPad", img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80" },
];

// Mostrar productos en la grilla
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
