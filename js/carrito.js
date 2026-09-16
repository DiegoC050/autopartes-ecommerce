// Carrito de compras

// Función para obtener carrito
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Función para guardar carrito
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Función para actualizar cantidad
function updateQuantity(productId, quantity) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        } else {
            item.quantity = quantity;
        }
    }
    
    saveCart(cart);
    renderCart();
}

// Función para eliminar del carrito
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
}

// Función para renderizar carrito en la página de carrito
function renderCart() {
    const cart = getCart();
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');
    const cartItems = document.getElementById('cartItems');
    
    if (!cartItems) return; // Si no estamos en la página de carrito
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartContent.style.display = 'none';
        return;
    }
    
    emptyCart.style.display = 'none';
    cartContent.style.display = 'block';
    
    cartItems.innerHTML = cart.map(item => `
        <tr>
            <td>
                <strong>${item.image} ${item.name}</strong>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <div class="quantity-selector">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="1" 
                           onchange="updateQuantity(${item.id}, parseInt(this.value))">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </td>
            <td><strong>$${(item.price * item.quantity).toFixed(2)}</strong></td>
            <td>
                <button class="btn btn-small" style="background-color: #e74c3c; color: white;" 
                        onclick="removeFromCart(${item.id})">Eliminar</button>
            </td>
        </tr>
    `).join('');
    
    updateSummary();
}

// Función para actualizar resumen
function updateSummary() {
    const cart = getCart();
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 15) : 0;
    const total = subtotal + shipping;
    
    if (document.getElementById('subtotal')) {
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('shipping').textContent = shipping === 0 ? 'GRATIS' : `$${shipping.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }
}

// Función para actualizar contador del carrito
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCounts = document.querySelectorAll('#cartCount');
    cartCounts.forEach(el => el.textContent = count);
}

// Función para procesar compra
function processCheckout(event) {
    event.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        zipCode: document.getElementById('zipCode').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        cart: getCart(),
        orderDate: new Date().toISOString()
    };
    
    // Guardar orden
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(formData);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Limpiar carrito
    localStorage.removeItem('cart');
    updateCartCount();
    
    // Mostrar mensaje de éxito
    alert('¡Gracias por tu compra!\n\nNúmero de orden: ' + (orders.length) + '\n\nTe hemos enviado una confirmación a tu correo.');
    
    // Redirigir
    window.location.href = 'productos.html';
}

// Event listener para formulario de checkout
if (document.getElementById('checkoutForm')) {
    document.getElementById('checkoutForm').addEventListener('submit', processCheckout);
}

// Renderizar carrito al cargar
if (document.getElementById('cartItems')) {
    renderCart();
}

// Actualizar contador al cargar
updateCartCount();