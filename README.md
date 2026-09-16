# AutoPartes Pro - Plataforma de Venta de Autopartes

¡Bienvenido a AutoPartes Pro! Una plataforma moderna de comercio electrónico dedicada a la venta de autopartes de calidad.

## 🚀 Características Principales

### 1. **Catálogo de Productos**
- Más de 12 productos disponibles
- Categorización por tipo (Motores, Frenos, Suspensión, Eléctricos)
- Búsqueda y filtrado avanzado
- Información detallada de cada producto
- Disponibilidad de stock en tiempo real

### 2. **Carrito de Compras**
- Agregar/eliminar productos
- Modificar cantidades
- Cálculo automático de subtotal, envío y total
- Envío gratuito para compras mayores a $100
- Persistencia de datos con LocalStorage

### 3. **Proceso de Checkout**
- Formulario de información de envío
- Múltiples métodos de pago (Tarjeta, Transferencia, Efectivo, PayPal)
- Resumen de orden
- Confirmación de compra

### 4. **Páginas del Sitio**
- **Inicio**: Hero section con llamada a acción
- **Productos**: Catálogo completo con filtros
- **¿Quiénes Somos?**: Información sobre la empresa, valores y equipo
- **Contactanos**: Formulario de contacto e información de contacto
- **Carrito**: Gestión completa del carrito de compras

### 5. **Diseño Responsivo**
- Compatible con dispositivos móviles
- Navegación adaptable
- Interfaz intuitiva y moderna

## 📁 Estructura del Proyecto

```
autopartes-ecommerce/
├── index.html                 # Página de inicio
├── pages/
│   ├── productos.html        # Catálogo de productos
│   ├── quienes-somos.html    # Información de la empresa
│   ├── contactanos.html      # Formulario de contacto
│   └── carrito.html          # Carrito de compras
├── css/
│   ├── styles.css            # Estilos principales
│   ├── navbar.css            # Estilos de navegación
│   ├── hero.css              # Estilos de hero section
│   └── footer.css            # Estilos de pie de página
├── js/
│   ├── cart.js               # Funcionalidad del carrito
│   ├── productos.js          # Funcionalidad de productos
│   ├── carrito.js            # Gestión del carrito detallada
│   ├── navbar.js             # Funcionalidad de navegación
│   └── contacto.js           # Funcionalidad de formulario de contacto
├── assets/
│   ├── logo.svg              # Logo de la empresa
│   └── categories/           # Imágenes de categorías
└── README.md                 # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsivo y animaciones
- **JavaScript Vanilla**: Funcionalidad interactiva
- **LocalStorage**: Persistencia de datos

## 🎨 Colores y Diseño

- **Color Primario**: #c41e3a (Rojo)
- **Color Secundario**: #f39c12 (Naranja)
- **Color Oscuro**: #2c3e50 (Azul Oscuro)
- **Color Claro**: #ecf0f1 (Gris Claro)

## 📱 Características Responsivas

- Pantallas de escritorio: Diseño multi-columna
- Tablets (768px): Ajustes en grid y espaciado
- Móviles: Menú hamburguesa y diseño de una columna

## 🚀 Funcionalidades JavaScript

### Carrito de Compras
```javascript
// Agregar producto al carrito
addToCart(productId)

// Actualizar cantidad
updateQuantity(productId, quantity)

// Eliminar del carrito
removeFromCart(productId)

// Procesar compra
processCheckout(event)
```

### Productos
```javascript
// Renderizar productos
renderProducts(productsToRender)

// Filtrar y buscar
filterProducts()
```

### Navegación
```javascript
// Toggle menú móvil
hamburger.addEventListener('click', ...)

// Actualizar enlace activo
updateActiveLink()
```

## 💾 Almacenamiento Local

Los datos se guardan en LocalStorage:
- `cart`: Carrito de compras actual
- `orders`: Historial de órdenes completadas
- `contactMessages`: Mensajes de contacto enviados

## 📊 Productos Disponibles

1. **Filtro de Aire** - $25.99
2. **Pastillas de Freno** - $45.50
3. **Amortiguadores** - $89.99
4. **Batería Automotriz** - $120.00
5. **Correa de Distribución** - $35.75
6. **Discos de Freno** - $65.00
7. **Resortes de Suspensión** - $55.25
8. **Alternador** - $150.00
9. **Aceite Sintético 5W-30** - $18.99
10. **Cilindro Maestro de Freno** - $85.50
11. **Barra Estabilizadora** - $75.00
12. **Motor de Arranque** - $180.00

## 🎯 Cómo Usar

### Para Clientes
1. Explora el catálogo de productos
2. Usa los filtros para encontrar lo que necesitas
3. Agrega productos al carrito
4. Ve a tu carrito y ajusta cantidades si es necesario
5. Completa el formulario de envío
6. Selecciona tu método de pago
7. Finaliza tu compra

### Para Desarrolladores
1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. No requiere servidor ni dependencias externas
4. Personaliza colores, productos y contenido según necesites

## 🔧 Personalización

### Agregar Nuevos Productos
Edita `js/productos.js` y agrega objetos al array `products`:

```javascript
{
    id: 13,
    name: 'Nombre del Producto',
    category: 'categoria',
    price: 99.99,
    image: 'emoji',
    description: 'Descripción',
    stock: 50
}
```

### Cambiar Colores
Modifica las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #tu-color;
    --secondary-color: #tu-color;
    /* ... */
}
```

### Cambiar Contenido
Edita el texto en los archivos HTML según sea necesario.

## 📞 Información de Contacto

- **Teléfono**: +1 (555) 123-4567
- **Email**: info@autopartespro.com
- **Horario**: Lunes a Viernes 9:00 AM - 6:00 PM

## ✨ Características Futuras

- [ ] Sistema de pago integrado (Stripe, PayPal)
- [ ] Panel de administración
- [ ] Sistema de reseñas y calificaciones
- [ ] Cuenta de usuario y historial de pedidos
- [ ] Wishlist/Favoritos
- [ ] Búsqueda por voz
- [ ] Chat en vivo con soporte
- [ ] Integración con redes sociales
- [ ] App móvil nativa

## 📄 Licencia

Este proyecto está disponible para uso personal y comercial.

## 👨‍💻 Autor

Desarrollado por: DiegoC050

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Gracias por usar AutoPartes Pro** ❤️
