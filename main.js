// Store cart items
let cart = [];

// Add item to cart
function addToCart(name, price) {
    let product = { name, price };
    cart.push(product);

    updateCartUI();
}

// Update Cart Count
function updateCartUI() {
    const cartCountEl = document.getElementById("cart-count");

    if(cartCountEl) {
        cartCountEl.innerText = cart.length;
    }

    // Save to localStorage so cart stays on page reload
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    let storedCart = localStorage.getItem("shoppingCart");
    if(storedCart) {
        cart = JSON.parse(storedCart);
        updateCartUI();
    }
}

window.onload = loadCart;
