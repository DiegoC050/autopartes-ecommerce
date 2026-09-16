# Guía Rápida de Inicio

## 🚀 Empezar en 5 Minutos

### 1. Descargar o Clonar
```bash
git clone https://github.com/DiegoC050/autopartes-ecommerce.git
cd autopartes-ecommerce
```

### 2. Abrir en el Navegador
- **Opción A**: Haz doble clic en `index.html`
- **Opción B**: Usa un servidor local
  ```bash
  python -m http.server 8000
  # Luego: http://localhost:8000
  ```

### 3. ¡Listo!
Ya puedes:
- ✅ Ver productos
- ✅ Agregar al carrito
- ✅ Hacer compras
- ✅ Contactar

---

## 🎨 Personalización Rápida

### Cambiar Nombre de Empresa
Busca y reemplaza en todos los HTML:
- `AutoPartes Pro` → Tu nombre
- `info@autopartespro.com` → Tu email
- `+1 (555) 123-4567` → Tu teléfono

### Cambiar Colores
Edita `css/styles.css` línea 1-7:
```css
:root {
    --primary-color: #c41e3a;      /* Tu color 1 */
    --secondary-color: #f39c12;     /* Tu color 2 */
    /* ... */
}
```

### Agregar Productos
Edita `js/productos.js`, agrega al array `products`:
```javascript
{
    id: 13,
    name: 'Mi Producto',
    category: 'motores',
    price: 99.99,
    image: '🔧',
    description: 'Descripción',
    stock: 50
}
```

---

## 📁 Estructura Básica

```
📦 autopartes-ecommerce
 ├── 📄 index.html (Inicio)
 ├── 📁 pages/
 │  ├── productos.html
 │  ├── quienes-somos.html
 │  ├── contactanos.html
 │  └── carrito.html
 ├── 📁 css/ (Estilos)
 ├── 📁 js/ (Funcionalidad)
 ├── 📁 assets/ (Imágenes)
 └── 📄 README.md
```

---

## ⚙️ Funciones Principales

### Agregar Producto al Carrito
```javascript
addToCart(productId)
```

### Actualizar Cantidad
```javascript
updateQuantity(productId, quantity)
```

### Eliminar del Carrito
```javascript
removeFromCart(productId)
```

### Ver Carrito en Consola
```javascript
JSON.parse(localStorage.getItem('cart'))
```

### Ver Órdenes Completadas
```javascript
JSON.parse(localStorage.getItem('orders'))
```

---

## 🔧 Solución de Problemas

### Los estilos no se ven
- Verifica las rutas en `css/` en HTML
- Abre DevTools (F12) → Console → revisa errores

### El carrito no funciona
- Verifica que LocalStorage esté habilitado
- DevTools → Application → Local Storage

### Querido desplegar en línea?

**GitHub Pages** (Gratis):
1. Sube a GitHub
2. Settings → Pages → Deploy from main
3. Espera minutos, tu sitio está en línea

**Netlify** (Gratis):
1. Ve a netlify.com
2. Conecta tu repo
3. Deploy automático

---

## 📊 Características Incluidas

✅ **Catálogo**
- 12 productos listos
- Búsqueda y filtrados
- Categorías
- Stock disponible

✅ **Carrito**
- Agregar/eliminar
- Modificar cantidad
- Cálculo automático
- Envío gratis >$100

✅ **Checkout**
- Formulario de envío
- Múltiples métodos de pago
- Confirmación de orden
- Guardado en LocalStorage

✅ **Páginas**
- Inicio con hero section
- Productos con filtros
- Quiénes somos
- Contacto con formulario
- Carrito completo

✅ **Diseño**
- Responsivo (móvil/tablet/desktop)
- Animaciones suaves
- Interfaz moderna
- Menú hamburguesa
- Footer completo

---

## 🎯 Próximos Pasos

1. **Personaliza** tu información
2. **Agrega** tus productos
3. **Cambia** colores y logo
4. **Prueba** todas las funciones
5. **Despliega** en línea (GitHub Pages, Netlify, etc)
6. **Integra** pasarela de pago real (Stripe, PayPal)
7. **Conecta** base de datos (MongoDB, PostgreSQL)
8. **Crea** backend (Node.js, Python, PHP)

---

## 📞 Contacto y Soporte

- **GitHub**: DiegoC050/autopartes-ecommerce
- **Issues**: Reporta bugs aquí
- **Documentación**: Lee README.md
- **Guía Completa**: GUIA_USO.md
- **Instalación**: INSTALACION.md

---

## 💡 Tips

1. **Usa DevTools**: F12 para ver errores
2. **LocalStorage**: Puedes ver todo en Application
3. **Emojis**: Los usamos como iconos de productos
4. **CSS Variables**: Cambia colores fácilmente
5. **Responsive**: Prueba en tu móvil

---

## 📚 Recursos

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [GitHub Docs](https://docs.github.com/)

---

**¡Tu tienda de autopartes está lista para vender! 🚗💨**

Puedes hacer esto. Solo necesitas confianza y dedicación. 💪

*Última actualización: 2024-09-16*
