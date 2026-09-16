// Inicializar carrito en localStorage
function initializeCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

// Actualizar contador de carrito en todas las páginas
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCounts = document.querySelectorAll('#cartCount');
    cartCounts.forEach(el => el.textContent = count);
}

// Inicializar al cargar
initializeCart();
updateCartCount();

// Actualizar contador cuando cambia el storage
window.addEventListener('storage', () => {
    updateCartCount();
});