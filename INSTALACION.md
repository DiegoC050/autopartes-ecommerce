# Guía de Instalación y Configuración

## Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de texto (VSCode, Sublime, etc.)
- Conocimiento básico de HTML, CSS y JavaScript (para personalizaciones)

## Instalación Local

### Opción 1: Clonar desde GitHub

```bash
git clone https://github.com/DiegoC050/autopartes-ecommerce.git
cd autopartes-ecommerce
```

### Opción 2: Descargar ZIP

1. Ve a https://github.com/DiegoC050/autopartes-ecommerce
2. Haz clic en "Code" → "Download ZIP"
3. Extrae el archivo ZIP

## Ejecutar Localmente

### Método 1: Abrir Directamente en el Navegador

1. Abre la carpeta del proyecto
2. Haz doble clic en `index.html`
3. El sitio se abrirá en tu navegador por defecto

### Método 2: Usar un Servidor Local (Recomendado)

**Con Python 3:**
```bash
python -m http.server 8000
# Luego abre http://localhost:8000
```

**Con Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Con Node.js (http-server):**
```bash
npm install -g http-server
http-server
# Luego abre http://localhost:8080
```

**Con VS Code (Live Server):**
1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## Estructura de Carpetas (Crear si es necesario)

```
autopartes-ecommerce/
├── assets/
│   ├── logo.svg          # Logo de la empresa
│   └── categories/       # Carpeta para imágenes de categorías
│       ├── motores.jpg
│       ├── frenos.jpg
│       ├── suspension.jpg
│       └── electricos.jpg
├── css/
├── js/
├── pages/
├── index.html
└── README.md
```

## Configuración Inicial

### 1. Personalizar Logo

Reemplaza `assets/logo.svg` con tu logo. Puedes usar:
- Archivos SVG
- Imágenes PNG
- Imágenes JPEG

### 2. Cambiar Nombre de la Empresa

Busca y reemplaza "AutoPartes Pro" en todos los archivos HTML.

### 3. Actualizar Información de Contacto

Edita en `pages/contactanos.html`:
```html
<p>+1 (555) 123-4567</p>
<p>info@autopartespro.com</p>
```

### 4. Agregar Productos

Edita `js/productos.js` y agrega objetos al array `products`.

## Pruebas del Carrito

1. Abre DevTools (F12)
2. Ve a "Application" → "Local Storage"
3. Verifica que se creen las claves: `cart`, `orders`, `contactMessages`

## Despliegue en Internet

### Opción 1: GitHub Pages (Gratis)

1. Sube el repositorio a GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch"
4. Elige la rama `main`
5. Tu sitio estará disponible en: `https://tuusuario.github.io/autopartes-ecommerce`

### Opción 2: Netlify (Gratis)

1. Ve a https://netlify.com
2. Conecta tu repositorio de GitHub
3. Netlify desplegará automáticamente

### Opción 3: Vercel (Gratis)

1. Ve a https://vercel.com
2. Importa tu repositorio
3. Vercel desplegará automáticamente

### Opción 4: Hosting Tradicional

1. Compra hosting (GoDaddy, Bluehost, etc.)
2. Usa FTP para subir los archivos
3. Configura el dominio

## Optimizaciones

### Optimizar Imágenes
```bash
# Usar TinyPNG o ImageOptim para comprimir imágenes
```

### Minificar CSS y JavaScript
```bash
# Usar online tools como minify.com
```

### SEO

Edita los meta tags en cada HTML:
```html
<title>Tu Título</title>
<meta name="description" content="Tu descripción">
<meta name="keywords" content="tus, palabras, clave">
```

## Troubleshooting

### Los estilos no cargan
- Verifica las rutas de los archivos CSS
- Abre DevTools y revisa la consola de errores

### El carrito no funciona
- Verifica que LocalStorage esté habilitado en el navegador
- Abre DevTools → Application → Local Storage

### Las imágenes no aparecen
- Verifica que existan en `assets/`
- Usa rutas correctas (relativas o absolutas)

## Soporte

Para ayuda o reportar bugs:
1. Ve a https://github.com/DiegoC050/autopartes-ecommerce/issues
2. Crea un nuevo issue
3. Describe el problema detalladamente

## Recursos Útiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores

---

¡Listo! Tu sitio de autopartes está configurado y listo para usar. 🚀
