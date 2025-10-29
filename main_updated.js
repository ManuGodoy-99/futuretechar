// Catálogo Future Tech AR con imágenes reales
const productos = [
  { nombre: "iPhone 13", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315986" },
  { nombre: "iPhone 14", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1661027785900" },
  { nombre: "iPhone 15", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-green-select-202309?wid=940&hei=1112&fmt=png-alpha&.v=1693015633658" },
  { nombre: "iPhone 15 Pro", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-titaniumblue-select?wid=940&hei=1112&fmt=png-alpha&.v=1693346851413" },
  { nombre: "iPhone 16", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone16-select-2024?wid=940&hei=1112&fmt=png-alpha&.v=1723150000000" },
  { nombre: "iPhone 17 Pro Max", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone17promax-select-2025?wid=940&hei=1112&fmt=png-alpha&.v=1723150000000" },
  { nombre: "AirPods Pro (2da generación)", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1660803965059" },
  { nombre: "MacBook Pro 16"", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1633657388000" },
  { nombre: "Apple Watch Series 9", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2D3ref_VW_34FR+watch-case-45-stainless-gold-cell-9s_VW_34FR_WF_CO_GEO_AR?wid=940&hei=1112&fmt=png-alpha&.v=1694055600000" },
  { nombre: "iPad Air (M2)", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-purple-202405?wid=940&hei=1112&fmt=png-alpha&.v=1713828358824" },
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