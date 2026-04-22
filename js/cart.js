// js/cart.js

// Initialize cart from localStorage
export let cart = JSON.parse(localStorage.getItem('CULTURE_CART')) || [];

export function updateCartUI() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('total-price');
    const shipSelect = document.getElementById('cart-shipping-select');
    
    if (!container || !totalEl) return;

    container.innerHTML = '';
    let subtotal = 0;

    cart.forEach((product, index) => {
        subtotal += product.price;
        container.innerHTML += `
            <div class="cart-item">
                <img src="${product.image}">
                <div class="item-info">
                    <h4>${product.name}</h4>
                    <p>Size: ${product.size || 'Digital Access'}</p>
                    <p>$${product.price.toFixed(2)}</p>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
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
}

export function closeCart() {
    document.getElementById('cart-drawer').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    const shipSelect = document.getElementById('cart-shipping-select');
    if (shipSelect) {
        shipSelect.addEventListener('change', updateCartUI);
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('CULTURE_CART', JSON.stringify(cart));
            updateCartUI();
        }

        if (e.target.classList.contains('checkout-btn')) {
            if (cart.length === 0) return alert("Your cart is empty!");
            window.location.href = 'checkout.html';
        }

        if (e.target.id === 'close-cart' || e.target.id === 'cart-overlay') {
            closeCart();
        }
    });
});

window.openCart = openCart;
window.closeCart = closeCart;
window.generateOrderMessage = generateOrderMessage;

updateCartUI();