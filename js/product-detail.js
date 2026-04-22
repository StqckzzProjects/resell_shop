import inventory from './products.js';
import { updateCartUI, openCart, cart } from './cart.js';

const params = new URLSearchParams(window.location.search);
const item = inventory.find(p => p.id === params.get('id'));

// Tracker for the currently selected colorway name
let selectedColorName = "";

if (item) {
    document.getElementById('p-name').innerText = item.name;
    document.getElementById('p-price').innerText = `$${item.price}`;
    document.getElementById('p-desc').innerText = item.description;
    document.getElementById('main-img').src = item.image;
    
    // Set default color name if colorways exist
    if (item.colorways && item.colorways.length > 0) {
        selectedColorName = item.colorways[0].name;
    }

    // Load Colorways
    const colorContainer = document.getElementById('color-options');
    if (item.colorways) {
        item.colorways.forEach((c, index) => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn' + (index === 0 ? ' active' : '');
            btn.innerText = c.name;
            btn.onclick = () => {
                document.getElementById('main-img').src = c.img;
                selectedColorName = c.name; // Update tracker
                colorContainer.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            };
            colorContainer.appendChild(btn);
        });
    }

    // Load Sizes
    const sizeContainer = document.getElementById('size-options');
    if (item.sizes) {
        item.sizes.forEach(size => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.innerText = size.us;
            btn.onclick = () => {
                sizeContainer.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            };
            sizeContainer.appendChild(btn);
        });
    }
}

// Add to Cart Logic
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-now')) {
        const activeSizeBtn = document.querySelector('#size-options .opt-btn.active');
        const selectedSize = activeSizeBtn ? activeSizeBtn.innerText : null;
        
        if (item.type === 'physical' && !selectedSize) {
            alert("Please select a size first!");
            return;
        }

        // Combine item name with specific colorway name
        const specificName = selectedColorName ? `${item.name} (${selectedColorName})` : item.name;

        const cartItem = {
            id: item.id,
            name: specificName,
            price: item.price,
            image: document.getElementById('main-img').src,
            size: selectedSize || "Digital"
        };

        cart.push(cartItem);
        localStorage.setItem('CULTURE_CART', JSON.stringify(cart));
        updateCartUI();
        openCart();
    }
});