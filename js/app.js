import inventory from './products.js';

const grid = document.getElementById('featured-grid');

// 1. Function to create the card
inventory.slice(0, 4).forEach(item => {
    
    // --- THIS IS THE PRICE LOGIC ---
    // We check if 'oldPrice' exists in your products.js for this item
    const oldPriceHTML = item.oldPrice ? `<span class="old-price">$${item.oldPrice}</span>` : '';
    
    const card = `
        <div class="card">
            <div class="sale-tag">HOT</div>
            <img src="${item.image}" alt="${item.name}">
            <div class="card-info">
                <h3>${item.name}</h3>
                
                <div class="price-row">
                    <span class="current-price">$${item.price}</span>
                    ${oldPriceHTML} 
                </div>

                <a href="product-detail.html?id=${item.id}" class="btn">View Product</a>
            </div>
        </div>
    `;
    
    grid.innerHTML += card;
});

// 2. The "Purchase Notification" (The Toast)
// This pops up 3 seconds after the page loads
setTimeout(() => {
    const toast = document.getElementById('purchase-toast');
    if(toast) {
        toast.style.display = 'block';
    }
}, 3000);