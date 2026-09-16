# Guía de Uso del Sitio

## Para Clientes

### Navegación Principal

1. **Inicio** - Página principal con información destacada
2. **Productos** - Catálogo completo de autopartes
3. **¿Quiénes Somos?** - Información sobre la empresa
4. **Contactanos** - Formulario para enviar mensajes
5. **Carrito** - Gestión de compras

### Comprar un Producto

#### Paso 1: Explorar Productos
1. Ve a la sección "Productos"
2. Busca por nombre usando la barra de búsqueda
3. Filtra por categoría
4. Ordena por precio o nombre

#### Paso 2: Agregar al Carrito
1. Selecciona un producto
2. Haz clic en "Agregar al Carrito"
3. Verás una notificación de confirmación
4. El contador del carrito se actualizará

#### Paso 3: Revisar Carrito
1. Haz clic en el icono del carrito (esquina superior derecha)
2. Revisa los productos agregados
3. Puedes:
   - Aumentar/disminuir cantidad
   - Eliminar productos
   - Ver el total actualizado

#### Paso 4: Checkout
1. Completa el formulario de envío:
   - Nombre completo
   - Email
   - Teléfono
   - Dirección
   - Ciudad
   - Código postal

2. Selecciona método de pago:
   - Tarjeta de Crédito/Débito
   - Transferencia Bancaria
   - Pago en Efectivo
   - PayPal

3. Revisa el resumen:
   - Subtotal
   - Costo de envío
   - Total a pagar

4. Haz clic en "Finalizar Compra"

#### Paso 5: Confirmación
- Recibirás una confirmación en pantalla
- Se enviará un email de confirmación
- Puedes continuar comprando o ir al inicio

### Buscar y Filtrar Productos

**Barra de Búsqueda:**
- Escribe el nombre del producto
- O parte de la descripción
- Los resultados se actualizan en tiempo real

**Filtros:**
- Categoría: Motores, Frenos, Suspensión, Eléctricos
- Ordenar por: Nombre, Precio (menor/mayor)

**Ejemplo:**
```
Buscar: "freno"
Filtro: "Frenos"
Orden: "Precio: Menor a Mayor"
```

### Contactar a la Empresa

1. Ve a "Contactanos"
2. Completa el formulario:
   - Nombre
   - Email
   - Teléfono (opcional)
   - Asunto
   - Mensaje
3. Haz clic en "Enviar Mensaje"
4. Recibirás confirmación en pantalla

### Información de Envío

**Costo de Envío:**
- Compras menores a $100: $15 USD
- Compras de $100 o más: GRATIS

**Tiempo de Entrega:**
- Tiempo estándar: 24-48 horas
- Según disponibilidad de zona

### Garantía y Devoluciones

- Garantía de satisfacción: 30 días
- Si no estás satisfecho, puedes devolver el producto
- Reembolso completo o cambio
- Sin preguntas incómodas

---

## Para Administradores/Desarrolladores

### Gestionar Productos

Edita `js/productos.js`:

```javascript
const products = [
    {
        id: 1,
        name: 'Nombre del Producto',
        category: 'motores|frenos|suspension|electricos',
        price: 99.99,
        image: 'emoji o símbolo',
        description: 'Descripción del producto',
        stock: 50
    }
];
```

### Agregar Nuevo Producto

1. Abre `js/productos.js`
2. Agrega un objeto al array `products`
3. Asigna un ID único (mayor al último)
4. Completa todos los campos requeridos
5. Guarda y recarga la página

### Ver Órdenes Completadas

En el navegador, abre DevTools (F12):
```javascript
// En la consola:
JSON.parse(localStorage.getItem('orders'))
```

### Ver Mensajes de Contacto

En DevTools:
```javascript
JSON.parse(localStorage.getItem('contactMessages'))
```

### Personalizar Estilos

#### Cambiar Colores Principales

Edita `css/styles.css`:

```css
:root {
    --primary-color: #c41e3a;      /* Color rojo - cambiar aquí */
    --secondary-color: #f39c12;     /* Color naranja - cambiar aquí */
    --dark-color: #2c3e50;          /* Color oscuro - cambiar aquí */
    --light-color: #ecf0f1;         /* Color claro - cambiar aquí */
    /* ... */
}
```

#### Cambiar Font

Edita `css/styles.css`:

```css
body {
    font-family: 'Tu Font', sans-serif;
    /* ... */
}
```

### Traducir a Otro Idioma

1. Abre cada archivo HTML
2. Reemplaza el texto en español
3. Cambia `lang="es"` a tu idioma en la etiqueta `<html>`

### Integrar Pasarela de Pago Real

En `js/carrito.js`, modifica `processCheckout()`:

```javascript
function processCheckout(event) {
    // ... código existente ...
    
    // Agregar integración con Stripe, PayPal, etc.
    // Procesar pago
    // Guardar en servidor
}
```

### Conectar a Base de Datos

Crea un backend con:
- Node.js + Express
- Python + Flask/Django
- PHP + Laravel
- etc.

Luego modifica los JS para hacer llamadas a API.

### Google Analytics

Agrega en `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### SEO Básico

1. Edita meta tags en cada HTML:
```html
<meta name="description" content="Descripción de la página">
<meta name="keywords" content="palabras, clave, importante">
```

2. Usa headings correctamente (H1, H2, H3)
3. Agrega atributos `alt` a todas las imágenes
4. Usa URLs amigables

---

## Keyboard Shortcuts

| Atajo | Función |
|-------|----------|
| F12 | Abrir DevTools |
| Ctrl+F | Buscar en página |
| Ctrl+A | Seleccionar todo |
| Ctrl+C | Copiar |
| Ctrl+V | Pegar |

## Tips y Trucos

1. **Usar temas claros/oscuros**: Implementar CSS media query
```css
@media (prefers-color-scheme: dark) {
    body { background: #1a1a1a; }
}
```

2. **Agregar animaciones**: Usar CSS transitions
```css
.btn {
    transition: all 0.3s ease;
}
```

3. **Mejorar performance**: 
   - Minificar CSS/JS
   - Optimizar imágenes
   - Usar lazy loading

4. **Mobile First**: Diseñar primero para móvil

---

## Preguntas Frecuentes

**P: ¿Puedo usar esto para un negocio real?**
R: Sí, puedes. Necesitarás agregar una pasarela de pago real y un backend.

**P: ¿Cómo agrego más categorías?**
R: Edita `js/productos.js` y agrega opciones al `select` en `productos.html`.

**P: ¿Puedo vender en múltiples monedas?**
R: Sí, modifica los precios y agrega conversión de moneda con una API.

**P: ¿Cómo backup de datos?**
R: Exporta LocalStorage regularmente o conecta a una base de datos.

---

¡Cualquier pregunta, consulta la documentación o contáctanos! 📞
