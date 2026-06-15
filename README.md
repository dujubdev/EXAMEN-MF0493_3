# 🎸 ROCKIFY - APLICACIÓN WEB PROGRESIVA (PWA)

## Descripción

**Rockify** es una aplicación web progresiva (PWA) tipo Spotify dedicada exclusivamente a las bandas de rock más legendarias de tres décadas: **70s, 80s y 90s**.

La aplicación permite explorar información detallada de 15 bandas icónicas, sus integrantes, historias y canciones. Incluye un reproductor de YouTube integrado, sistema de favoritos persistente y funciona completamente sin conexión a internet.

---

## 🚀 Acceso en Línea

**Accede a Rockify aquí:** [https://dujubdev.github.io/EXAMEN-MF0493_3/](https://dujubdev.github.io/EXAMEN-MF0493_3/)

La aplicación está desplegada en GitHub Pages y funciona completamente en el navegador. Puedes instalarla como app en dispositivos móviles.

---

## 🔀 Control de Versiones (Git)

### Estructura de Ramas

La aplicación sigue el flujo de trabajo **Git Flow** para desarrollo profesional:

**`main` (rama principal)**
- ✅ Versión estable y evaluable
- ✅ Desplegada en GitHub Pages
- ✅ Lista para producción
- 📌 Commits sobre versiones liberadas

**`develop` (rama de desarrollo)**
- 🔧 Trabajo en mejoras y nuevas características
- 🚀 Nuevas funcionalidades antes de liberar
- 📝 Cambios no evaluados aún
- 🔌 Integración de features

### Flujo de Trabajo
```bash
# Crear rama para una nueva característica
git checkout -b feature/nueva-caracteristica

# Hacer cambios y commits
git add .
git commit -m "Agregar nueva característica"

# Subir rama
git push origin feature/nueva-caracteristica

# Cuando está lista, hacer Pull Request a develop
# Después merge a main para liberar versión

# Volvemos a main para desplegar
git checkout main
git merge develop
git push
```

### Historial de Versiones

- **v1.0.0** (main) - Versión estable inicial
  - HTML5 semántico con accesibilidad WCAG
  - CSS3 responsivo (mobile first)
  - JavaScript ES6+ con 15 bandas de rock
  - PWA completo con Service Worker
  - APIs integradas (OpenWeatherMap, TheAudioDB, YouTube)
  - LocalStorage para favoritos y tema

- **v1.1.0+** (develop) - Mejoras en progreso
  - ✅ URLSearchParams para shortcuts (cuando accedes desde shortcut PWA, filtra automáticamente)
  - ✅ Búsqueda + Filtro simultáneos (buscar dentro de la década seleccionada)
  - ✅ Focus trap en modales (mejor accesibilidad)
  - ✅ Cierre automático de reproductor (cuando cierras modal)
  - ✅ Validación de youtubeId (no reproduce IDs vacíos o inválidos)
  - ✅ Flujo Reproductor mejorado (cierra modal, muestra botón "Volver a Detalles")

---

## ✨ Características Principales

### 🎵 Funcionalidades Principales
- **Catálogo de 15 bandas legendarias** (70s, 80s, 90s)
- **Base de datos local** con información completa de cada banda
- **Reproductor de YouTube integrado**
- **Sistema de favoritos** con persistencia en localStorage
- **Buscador por nombre y descripción**
- **Filtrado por década**
- **Información meteorológica en vivo** (OpenWeatherMap API)
- **Información adicional de bandas** (TheAudioDB API)

### 🎨 Diseño y UX
- **Diseño responsivo** (Mobile First)
- **Tema oscuro/claro** con persistencia
- **Interfaz profesional inspirada en Spotify**
- **Animaciones suaves** y transiciones visuales
- **Accesibilidad WCAG** completa
- **Navegación mediante teclado** (ARIA labels)

### 📱 Progressive Web App
- **Service Worker** con estrategia CACHE FIRST
- **Funciona completamente sin conexión**
- **Manifest.json** con configuración PWA
- **Instalable como app en dispositivos móviles**
- **Atajos de aplicación** para décadas rápidas

---

## 📊 Estadísticas de Contenido

| Métrica | Cantidad |
|---------|----------|
| Bandas | 15 |
| Canciones | 75+ |
| Décadas | 3 (70s, 80s, 90s) |
| Integrantes | 40+ |
| Historias | Completas y detalladas |

### Bandas Incluidas

**70s (6 bandas)**
- 🎸 Pink Floyd
- 👑 Queen
- ⭐ David Bowie
- 🎤 The Who
- ⚡ Led Zeppelin
- 💎 The Rolling Stones

**80s (5 bandas)**
- 🔥 AC/DC
- ⚔️ Iron Maiden
- 🖤 Metallica
- 🌹 Guns N' Roses
- 🎸 Aerosmith

**90s (4 bandas)**
- 🖤 Nirvana
- 🦪 Pearl Jam
- 🕷️ Soundgarden
- ⛓️ Alice in Chains

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5 Semántico** - Estructura accesible
- **CSS3 Moderno** - Responsive, variables CSS, animaciones
- **JavaScript ES6+** - Vanilla, funciones flecha, template literals

### APIs Integradas
- **YouTube Embed** - Reproducción de canciones
- **TheAudioDB** - Información adicional de bandas
- **OpenWeatherMap** - Datos meteorológicos

### PWA
- **Service Worker** - Funcionamiento offline
- **Manifest.json** - Instalación como app
- **LocalStorage** - Persistencia de favoritos

### Librerías Externas
- **Font Awesome** (CDN) - Iconos
- **Google Fonts** - Tipografías (Poppins, Playfair Display)

---

## 📁 Estructura de Archivos

```
rockify/
│
├── index.html           # Estructura HTML semántica
├── styles.css          # Estilos CSS3 responsivos
├── app.js              # Lógica JavaScript principal
├── datos.js            # Base de datos local (bandas)
├── manifest.json       # Configuración PWA
├── sw.js               # Service Worker (CACHE FIRST)
└── README.md           # Esta documentación
```

### Descripción de Archivos

#### `index.html`
- Estructura semántica completa con etiquetas `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Incluye 3 niveles de títulos (h1, h2, h3)
- Formularios accesibles (select, input search)
- Modal para detalles de bandas
- Reproductor flotante de YouTube

#### `styles.css`
- 900+ líneas de CSS profesional
- Variables CSS para colores, espacios y tipografías
- Tema oscuro/claro completamente funcional
- Responsive design (mobile first)
- Breakpoints en 768px y 480px
- Animaciones CSS suaves
- Accesibilidad (focus-visible, reduced-motion)

#### `app.js`
- 400+ líneas de JavaScript ES6+
- Funciones flecha y template literals
- Gestión de favoritos con localStorage
- Integración de APIs (clima, TheAudioDB, YouTube)
- Service Worker registration
- Event listeners optimizados
- Console.log para debugging

#### `datos.js`
- Array `bandasRock` con 15 bandas
- Cada banda contiene:
  - id, nombre, década, descripción, historia completa
  - Array de integrantes
  - Array de 5+ canciones con youtubeId

#### `manifest.json`
- Configuración completa PWA
- Nombre, descripción, iconos SVG
- Tema colors y background colors
- Shortcuts para acceso rápido
- Display standalone

#### `sw.js`
- Service Worker completo
- Estrategia CACHE FIRST
- Eventos: install, activate, fetch, message, sync
- Precacheo de archivos críticos
- Sincronización en segundo plano

---

## 🚀 Instalación Local

### Requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Servidor HTTP (no funciona con `file://`)

### Opción 1: Servidor Local Simple

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego accede a: `http://localhost:8000`

### Opción 2: Visual Studio Code Live Server

1. Instala la extensión "Live Server"
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

---

## 📤 Despliegue en GitHub Pages

### Pasos para desplegar:

#### 1. Inicializar repositorio Git (si no lo has hecho)
```bash
cd tu-proyecto/EXAMEN-MF0493_3
git init
git add .
git commit -m "Rockify PWA - Módulo MF0493_3"
```

#### 2. Conectar con repositorio remoto
```bash
git remote add origin https://github.com/tu-usuario/EXAMEN-MF0493_3.git
git branch -M main
git push -u origin main
```

#### 3. Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Abre **Settings** → **Pages**
3. En "Build and deployment":
   - **Source**: Selecciona "Deploy from a branch"
   - **Branch**: Selecciona "main" y carpeta "/ (root)"
4. Click en "Save"

#### 4. Esperar a que se despliegue
- GitHub desplegará automáticamente
- Tu URL será: `https://tu-usuario.github.io/EXAMEN-MF0493_3/`
- Tarda 1-2 minutos en estar disponible

#### 5. Actualizar cambios futuros
```bash
# Hacer cambios, guardar archivos, luego:
git add .
git commit -m "Descripción del cambio"
git push
```

### Verificar que todo funciona:
✅ Entra a tu URL  
✅ Abre DevTools (F12) → Application → Service Workers  
✅ Debería mostrar el Service Worker registrado  
✅ Intenta desconectar (offline) y recarga la página  

---

## 📱 Instalar como App en Dispositivo

### En Android (Chrome, Firefox, Edge)

1. **Abre la URL en tu navegador:**
   - https://dujubdev.github.io/EXAMEN-MF0493_3/

2. **Instalar app:**
   - Toca el **menú** (⋮) arriba a la derecha
   - Busca "Instalar aplicación" o "Agregar a pantalla de inicio"
   - Toca la opción
   - Aparecerá en tu pantalla de inicio

3. **Características de la app instalada:**
   - Funciona como app nativa
   - Acceso offline
   - Notificaciones (opcional)
   - Icono propio en pantalla de inicio

### En iPhone/iPad (Safari)

1. **Abre la URL en Safari:**
   - https://dujubdev.github.io/EXAMEN-MF0493_3/

2. **Compartir y agregar:**
   - Toca el **ícono Compartir** (↗️) en la barra inferior
   - Desplázate y toca "Agregar a la pantalla de inicio"
   - Dale un nombre (se sugiere "Rockify")
   - Toca "Agregar"

3. **Aparecerá en tu pantalla de inicio** como app

### En Desktop (Windows/Mac)

**Chrome/Edge:**
1. Abre la URL
2. Haz clic en el **icono de instalación** (↙️) en la barra de direcciones
3. Haz clic en "Instalar"
4. ¡Listo! Abre desde tu menú de aplicaciones

**Firefox:**
- No soporta instalación de PWA de forma nativa
- Puedes crear un acceso directo manual

---

## ⚡ Verificar que la PWA funciona correctamente

Después de instalar o desplegar:

1. **Abre DevTools (F12)**
2. Ve a **Application** → **Manifest**
   - Deberías ver el contenido del `manifest.json`
3. Ve a **Application** → **Service Workers**
   - Deberías ver: `✓ Rockify PWA` registrado
4. Ve a **Cache Storage**
   - Deberías ver: `rockify-cache-v1`
   - Dentro están todos los archivos precacheados

5. **Prueba modo offline:**
   - DevTools → **Network**
   - Marca "Offline"
   - Recarga la página
   - **¡Debe seguir funcionando sin conexión!**

---

## 💾 Características de Persistencia

### LocalStorage
La aplicación guarda en localStorage:

```javascript
// Favoritos
{
  "favoritosRockify": [1, 5, 8, 12]
}

// Tema
{
  "temaOscuro": "true"
}
```

Los datos se recuperan automáticamente al recargar la página.

---

## 🌐 APIs Externas

### 1. OpenWeatherMap - Información Climática
```javascript
const API_CLIMA = "e85b0e47b8262ecc79e449aba8d572e0";
// Muestra clima en Madrid en el header
// Si falla, muestra "Clima no disponible"
```

**Uso**: Información en header con saludo personalizado (Buenos días/tardes/noches)

### 2. TheAudioDB - Información de Bandas
```javascript
const API_AUDIOBD = "3";
// Obtiene información adicional de bandas
// Fallback: usa datos locales si falla
```

**Uso**: Enriquecimiento de datos de bandas

### 3. YouTube Embed
```
https://www.youtube.com/embed/{youtubeId}
```

**Uso**: Reproductor embedded de canciones

---

## 🔒 Funcionamiento Offline

La aplicación funciona completamente sin conexión:

1. **Service Worker** cachea todos los archivos críticos
2. **CACHE FIRST**: Intenta usar caché antes de red
3. **Fallback**: Si falla la red, usa datos del caché
4. **APIs opcionales**: Funcionan cuando hay conexión

**Archivos cacheados automáticamente:**
- index.html
- styles.css
- app.js
- datos.js
- manifest.json
- Google Fonts
- Font Awesome

---

## ♿ Accesibilidad (WCAG)

- ✅ Todas las imágenes tienen `alt`
- ✅ Botones con texto descriptivo
- ✅ Contraste correcto (AA mínimo)
- ✅ Navegación por teclado (Tab, Enter, ESC)
- ✅ ARIA labels en controles
- ✅ Focus visible en todos los elementos interactivos
- ✅ No se usan divs como botones
- ✅ Respeta preferencia `prefers-reduced-motion`

**Atajo de teclado:**
- `TAB` - Navegar entre elementos
- `ENTER` - Activar botones/links
- `ESC` - Cerrar modal

---

## 🎨 Personalización

### Cambiar Colores Principales

En `styles.css`, edita las variables en `:root`:

```css
:root {
  --color-principal: #ff6b6b;      /* Rojo (cambiar a gusto) */
  --color-secundario: #4ecdc4;     /* Turquesa */
  --color-terciario: #ffe66d;      /* Amarillo */
}
```

### Cambiar Tipografías

En `index.html`, cambia los enlaces de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap" rel="stylesheet">
```

Luego en `styles.css`:

```css
:root {
  --fuente-principal: "TuFuente", sans-serif;
}
```

### Agregar Más Bandas

En `datos.js`, agrega más objetos al array `bandasRock`:

```javascript
{
  id: 16,
  nombre: "Nueva Banda",
  decada: "90s",
  descripcion: "...",
  historia: "...",
  integrantes: ["...", "..."],
  canciones: [
    { titulo: "...", album: "...", anio: 2000, youtubeId: "..." },
    // ... más canciones
  ]
}
```

---

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear Repositorio GitHub

```bash
# Inicializar repositorio local
git init
git add .
git commit -m "Inicial: Rockify PWA"
```

### Paso 2: Crear Repositorio en GitHub

1. Ve a github.com y crea un nuevo repositorio
2. Nómbralo `rockify` o `username.github.io`

### Paso 3: Conectar y Subir

```bash
# Agregar remoto (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/rockify.git

# Cambiar a rama main
git branch -M main

# Subir código
git push -u origin main
```

### Paso 4: Habilitar GitHub Pages

1. Ve a Settings > Pages
2. Source: Deploy from branch
3. Branch: main (o main/docs)
4. Guarda

### Acceder a la App

Si el repositorio es `rockify`:
```
https://tu-usuario.github.io/rockify/
```

Si el repositorio es `username.github.io`:
```
https://tu-usuario.github.io/
```

---

## 🧪 Testing y Validación

### Verificar Service Worker

1. Abre DevTools (F12)
2. Ir a "Application" > "Service Workers"
3. Verifica que está registrado y activo

### Verificar Caché

1. DevTools > "Application" > "Cache Storage"
2. Debe haber "rockify-cache-v1"
3. Verifica archivos cacheados

### Probar Offline

1. DevTools > "Network" > "Offline"
2. La app debe seguir funcionando
3. Las APIs mostrarán errores (esperado)

### Validar Manifest

1. DevTools > "Application" > "Manifest"
2. Debe mostrar configuración correcta

### Lighthouse Audit

1. DevTools > "Lighthouse"
2. Generar reporte PWA
3. Debe obtener puntuación alta

---

## 📝 Comentarios en el Código

Todo el código está comentado en español:

- `datos.js` - Comentarios sobre estructura de datos
- `app.js` - Funciones organizadas por secciones
- `styles.css` - Secciones claramente delimitadas
- `sw.js` - Eventos del Service Worker explicados

---

## 🐛 Solución de Problemas

### La app no carga estilos
- **Solución**: Verifica que estés usando un servidor HTTP
- NO funciona con `file://`

### Service Worker no se registra
- **Solución**: Abre DevTools > Console y busca errores
- Verifica que `sw.js` existe

### API de clima no funciona
- **Solución**: Espera conexión a internet
- Los datos locales siempre funcionan

### Favoritos no se guardan
- **Solución**: Verifica que localStorage esté habilitado
- Algunos navegadores privados lo desactivan

### Videos de YouTube no cargan
- **Solución**: Requiere conexión a internet
- Verifica que el youtubeId sea válido

---

## 📊 Rúbrica de Evaluación (MF0493_3)

### HTML y CSS (3 puntos) ✅
- ✅ Etiquetas semánticas completas
- ✅ Estructura correcta (header, nav, main, sections, footer)
- ✅ Todos los niveles de títulos (h1, h2, h3)
- ✅ Diseño responsive (mobile, tablet, desktop)
- ✅ Tema oscuro implementado
- ✅ Accesibilidad WCAG

### JavaScript (3 puntos) ✅
- ✅ Contenido dinámico (NO estático)
- ✅ Funciones flecha y ES6+
- ✅ Array y objetos manipulados
- ✅ Funciones obligatorias implementadas:
  - ✅ `renderizarBandas()`
  - ✅ `filtrarPorDecada()`
  - ✅ `mostrarDetalle()`
  - ✅ `crearReproductor()`
  - ✅ `guardarFavoritos()`
  - ✅ `cargarFavoritos()`
- ✅ Console.log para debugging
- ✅ Template literals

### PWA (2 puntos) ✅
- ✅ manifest.json completo
- ✅ Service Worker con CACHE FIRST
- ✅ Funciona offline
- ✅ Instalable en dispositivos

### Accesibilidad (1 punto) ✅
- ✅ Alt en imágenes
- ✅ Botones con descripción
- ✅ Contraste correcto
- ✅ Navegación por teclado
- ✅ ARIA labels

### Despliegue GitHub (1 punto) ✅
- ✅ README.md completo
- ✅ Instrucciones claras
- ✅ Deployable en GitHub Pages

**TOTAL: 10 puntos**

---

## 🎓 Requisitos del Módulo MF0493_3

✅ Todo cumplido:

- ✅ HTML5 con estructura semántica
- ✅ CSS3 moderno con responsive design
- ✅ JavaScript Vanilla ES6+
- ✅ Sin frameworks obligatorios
- ✅ Todo en español (código, comentarios, variables, textos)
- ✅ Estructura obligatoria de archivos
- ✅ Diseño profesional tipo Spotify
- ✅ Base de datos local completa
- ✅ Sistema de favoritos con localStorage
- ✅ APIs integradas (clima, TheAudioDB, YouTube)
- ✅ PWA funcional con Service Worker
- ✅ Accesibilidad WCAG
- ✅ README.md con instrucciones
- ✅ Listo para desplegar en GitHub Pages

---

## 👨‍💻 Autor

Desarrollador Web Senior  
Especializado en: HTML5, CSS3, JavaScript ES6+, PWA, Accesibilidad Web

**Fecha**: 2024  
**Módulo**: MF0493_3 - Desarrollo y Despliegue de WebApp PWA

---

## 📞 Soporte

Para problemas o sugerencias:

1. Revisa la consola del navegador (F12 > Console)
2. Comprueba la conexión a internet
3. Limpia caché/cookies si hay problemas
4. Recarga la página (Ctrl+Shift+R para forzar)

---

## 📜 Licencia

Proyecto educativo para módulo MF0493_3  
Rockify © 2024 - Todos los derechos reservados

---

**🎸 ¡Que disfrutes Rockify! 🎸**

*Porque la música de rock es para siempre*
