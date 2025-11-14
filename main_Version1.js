const products = [
    {
        name: "Laptop",
        category: "Laptop",
        description: "Powerful and sleek laptop for modern tasks.",
        price: "$899",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
        payLink: "https://checkout.stripe.com/pay/test_laptop"
    },
    {
        name: "Smartphone",
        category: "Smartphone",
        description: "Latest smartphone with high-resolution camera.",
        price: "$599",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        payLink: "https://checkout.stripe.com/pay/test_smartphone"
    },
    {
        name: "Headphones",
        category: "Headphones",
        description: "Noise-cancelling over-ear headphones.",
        price: "$149",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        payLink: "https://checkout.stripe.com/pay/test_headphones"
    },
    {
        name: "Smartwatch",
        category: "Smartwatch",
        description: "Stay connected with this stylish smartwatch.",
        price: "$249",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
        payLink: "https://checkout.stripe.com/pay/test_smartwatch"
    }
];

// Helper: renders product cards
function renderProducts(list) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    if (list.length === 0) {
        productList.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No products found.</p>';
        return;
    }
    list.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <span class="price">${product.price}</span>
                <a href="${product.payLink}" class="buy-link" target="_blank">Buy Now</a>
            </div>
        `;
        productList.appendChild(card);
    });
}

// Filtering + Search
function filterProducts() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    let filtered = products.filter(product =>
        (category === "All" || product.category === category)
        && product.name.toLowerCase().includes(searchText)
    );
    renderProducts(filtered);
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
});