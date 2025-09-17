// main.js
import { laptopAccessories, GroceryItem, fitnessItem } from './product.js';


// 🛒 Cart array
const cart = [];

// 🔔 Toast element
const toast = document.getElementById('toast');

// ✅ Show toast message
function showToast(message = "Added to cart!") {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// 🧱 Render products into container
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Container with ID '${containerId}' not found.`);
    return;
  }

  container.innerHTML = '';

  products.forEach(product => {
    const item = document.createElement('div');
    item.className = 'item fade-in';
    item.innerHTML = `
      <a href="${product.link}" target="_blank">
        <img src="${product.image}" alt="${product.alt}" />
      </a>
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;

    // 🛒 Add to cart logic
    item.querySelector('.add-to-cart').addEventListener('click', () => {
      cart.push(product);
      showToast(`${product.name} added to cart!`);
    });

    container.appendChild(item);
  });
}

// 🚀 Initial render
renderProducts(laptopAccessories, 'electronics-container');
renderProducts(GroceryItem, "grocery-container");
renderProducts(fitnessItem, "fitness-container");

// 🔍 Search functionality
document.getElementById('searchInput')?.addEventListener('input', e => {
  const query = e.target.value.toLowerCase();

  const filteredElectronics = laptopAccessories.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  const filteredGroceries = GroceryItem.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  renderProducts(filteredElectronics, 'electronics-container');
  renderProducts(filteredGroceries, "grocery-container");
  renderProducts(filteredFitness, "fitness-container")
});



