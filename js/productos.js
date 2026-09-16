// Datos de productos
const products = [
    {
        id: 1,
        name: 'Filtro de Aire',
        category: 'motores',
        price: 25.99,
        image: '🔧',
        description: 'Filtro de aire de alta calidad para motores',
        stock: 50
    },
    {
        id: 2,
        name: 'Pastillas de Freno',
        category: 'frenos',
        price: 45.50,
        image: '🛑',
        description: 'Pastillas de freno de cerámica premium',
        stock: 35
    },
    {
        id: 3,
        name: 'Amortiguadores',
        category: 'suspension',
        price: 89.99,
        image: '🏎️',
        description: 'Amortiguadores ajustables para suspensión deportiva',
        stock: 20
    },
    {
        id: 4,
        name: 'Batería Automotriz',
        category: 'electricos',
        price: 120.00,
        image: '🔋',
        description: 'Batería de 12V 100Ah para todo tipo de vehículos',
        stock: 15
    },
    {
        id: 5,
        name: 'Correa de Distribución',
        category: 'motores',
        price: 35.75,
        image: '⚙️',
        description: 'Correa de distribución resistente',
        stock: 40
    },
    {
        id: 6,
        name: 'Discos de Freno',
        category: 'frenos',
        price: 65.00,
        image: '🔴',
        description: 'Discos de freno ventilados',
        stock: 28
    },
    {
        id: 7,
        name: 'Resortes de Suspensión',
        category: 'suspension',
        price: 55.25,
        image: '↕️',
        description: 'Resortes de suspensión progresivos',
        stock: 32
    },
    {
        id: 8,
        name: 'Alternador',
        category: 'electricos',
        price: 150.00,
        image: '⚡',
        description: 'Alternador de 100A para carga de batería',
        stock: 12
    },
    {
        id: 9,
        name: 'Aceite Sintético 5W-30',
        category: 'motores',
        price: 18.99,
        image: '🛢️',
        description: 'Aceite sintético de larga duración',
        stock: 100
    },
    {
        id: 10,
        name: 'Cilindro Maestro de Freno',
        category: 'frenos',
        price: 85.50,
        image: '🔩',
        description: 'Cilindro maestro de freno de calidad OEM',
        stock: 18
    },
    {
        id: 11,
        name: 'Barra Estabilizadora',
        category: 'suspension',
        price: 75.00,
        image: '➖',
        description: 'Barra estabilizadora reforzada',
        stock: 22
    },
    {
        id: 12,
        name: 'Motor de Arranque',
        category: 'electricos',
        price: 180.00,
        image: '🚀',
        description: 'Motor de arranque de alto torque',
        stock: 10
    }
];

// Función para renderizar productos
function renderProducts(productsToRender = products) {
    const container = document.getElementById('productsContainer');
    const noProducts = document.getElementById('noProducts');
    
    if (productsToRender.length === 0) {
        container.innerHTML = '';
        noProducts.style.display = 'block';
        return;
    }
    
    noProducts.style.display = 'none';
    container.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-stock ${product.stock > 0 ? '' : 'out-of-stock'}">
                        ${product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
                    </div>
                </div>
                <button class="btn btn-primary btn-small btn-block" 
                        onclick="addToCart(${product.id})" 
                        ${product.stock === 0 ? 'disabled' : ''}>
                    ${product.stock > 0 ? 'Agregar al Carrito' : 'No disponible'}
                </button>
            </div>
        </div>
    `).join('');
}

// Función para filtrar y buscar productos
function filterProducts() {
    const searchInput = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || '';
    const sort = document.getElementById('sortFilter')?.value || 'nombre';
    
    let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchInput) || 
                            product.description.toLowerCase().includes(searchInput);
        const matchesCategory = !category || product.category === category;
        return matchesSearch && matchesCategory;
    });
    
    // Ordenar
    switch(sort) {
        case 'precio-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'precio-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'nombre':
        default:
            filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    renderProducts(filtered);
}

// Función para agregar al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} agregado al carrito`);
}

// Función para mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '80px';
    notification.style.right = '20px';
    notification.style.zIndex = '1000';
    notification.style.maxWidth = '300px';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Event listeners para filtros
if (document.getElementById('searchInput')) {
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('sortFilter').addEventListener('change', filterProducts);
}

// Renderizar productos al cargar la página
if (document.getElementById('productsContainer')) {
    renderProducts();
}

// Actualizar contador de carrito
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Actualizar contador al cargar
updateCartCount();