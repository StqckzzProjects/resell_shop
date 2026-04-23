// js/cart.js

// Initialize cart from localStorage - Using 'CULTURE_CART' consistently
export let cart = JSON.parse(localStorage.getItem('CULTURE_CART')) || [];

export function updateCartUI() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('total-price');
    const shipSelect = document.getElementById('cart-shipping-select');
    
    // Refresh the local cart variable from storage to ensure it's up to date
    cart = JSON.parse(localStorage.getItem('CULTURE_CART')) || [];
    
    if (!container || !totalEl) return;

    container.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 20px; color: #888;">Your cart is empty</p>';
    }

    cart.forEach((product, index) => {
        subtotal += product.price;
        container.innerHTML += `
            <div class="cart-item" style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 8px;">
                <img src="${product.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                <div class="item-info" style="flex: 1;">
                    <h4 style="margin: 0; font-size: 0.9rem;">${product.name}</h4>
                    <p style="margin: 2px 0; font-size: 0.8rem; color: #888;">Size: ${product.size || 'Standard'}</p>
                    <p style="margin: 0; font-weight: bold; color: var(--accent-blue);">$${product.price.toFixed(2)}</p>
                </div>
                <button class="remove-item" data-index="${index}" style="background: none; border: none; color: #ff4d4d; cursor: pointer; font-size: 1.2rem;">&times;</button>
            </div>
        `;
    });

    let shippingCost = 0;
    let shippingLabel = "N/A";

    if (cart.length > 0 && shipSelect) {
        shippingCost = parseFloat(shipSelect.value);
        shippingLabel = shipSelect.options[shipSelect.selectedIndex].getAttribute('data-label');
    }

    const finalTotal = subtotal + shippingCost;
    totalEl.innerText = `$${finalTotal.toFixed(2)}`;

    // Store shipping info for checkout
    localStorage.setItem('SELECTED_SHIPPING', JSON.stringify({
        label: shippingLabel,
        price: shippingCost
    }));
}

export function generateOrderMessage(customerData = null) {
    const currentCart = JSON.parse(localStorage.getItem('CULTURE_CART')) || [];
    const shipData = JSON.parse(localStorage.getItem('SELECTED_SHIPPING')) || { label: "N/A", price: 0 };
    
    if (currentCart.length === 0) return "";

    let itemsText = "";
    let subtotal = 0;

    currentCart.forEach(item => {
        itemsText += `• ${item.name}\n  Size: ${item.size}\n  Price: $${item.price.toFixed(2)}\n  Image: ${item.image}\n\n`;
        subtotal += item.price;
    });

    const total = subtotal + shipData.price;

    let shippingInfo = "📍 SHIPPING TO:\n(No address provided)";
    if (customerData) {
        shippingInfo = `📍 SHIPPING TO:\nName: ${customerData.name}\nAddress: ${customerData.address}\nCity: ${customerData.city}, ${customerData.zip}\nCountry: ${customerData.country}`;
    }

    return `🧾 NEW ORDER REQUEST\n\n${shippingInfo}\n\n🛒 ITEMS:\n${itemsText}🚢 METHOD: ${shipData.label}\n💵 TOTAL: $${total.toFixed(2)}\n\n❓ How can I buy this?`;
}

export function openCart() {
    document.getElementById('cart-drawer').classList.add('open');
    document.getElementById('cart-overlay').classList.add('active');
    updateCartUI();
}

export function closeCart() {
    document.getElementById('cart-drawer').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('active');
}

// Global Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    const shipSelect = document.getElementById('cart-shipping-select');
    if (shipSelect) {
        shipSelect.addEventListener('change', updateCartUI);
    }

    document.addEventListener('click', (e) => {
        // FIXED: Targeted Removal Logic
        if (e.target.classList.contains('remove-item')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            let currentCart = JSON.parse(localStorage.getItem('CULTURE_CART')) || [];
            
            // Remove ONLY the item at that index
            currentCart.splice(index, 1);
            
            // Save and Refresh
            localStorage.setItem('CULTURE_CART', JSON.stringify(currentCart));
            updateCartUI();
        }

        if (e.target.classList.contains('checkout-btn')) {
            const currentCart = JSON.parse(localStorage.getItem('CULTURE_CART')) || [];
            if (currentCart.length === 0) return alert("Your cart is empty!");
            window.location.href = 'checkout.html';
        }

        if (e.target.id === 'close-cart' || e.target.id === 'cart-overlay') {
            closeCart();
        }
    });
});

// Map to window for HTML onclick attributes
window.openCart = openCart;
window.closeCart = closeCart;
window.generateOrderMessage = generateOrderMessage;