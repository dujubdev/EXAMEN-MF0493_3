/**
 * SERVICE WORKER - ROCKIFY PWA
 * Estrategia: CACHE FIRST
 * Permite funcionar offline con contenido cacheado
 */

const NOMBRE_CACHE = "rockify-cache-v1";
const ARCHIVOS_PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./datos.js",
  "./manifest.json",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Playfair+Display:wght@700&display=swap"
];

/**
 * EVENTO: INSTALL
 * Se ejecuta cuando el Service Worker se instala
 * Precachea los archivos críticos
 */
self.addEventListener("install", (evento) => {
  console.log("🔧 Instalando Service Worker...");
  
  evento.waitUntil(
    caches.open(NOMBRE_CACHE).then((cache) => {
      console.log("✓ Precacheando archivos críticos...");
      return cache.addAll(ARCHIVOS_PRECACHE).catch((error) => {
        console.warn("⚠ Error precacheando algunos archivos:", error);
        // No fallar la instalación si algún recurso falla
        return Promise.resolve();
      });
    })
  );
  
  // Forzar activación inmediata
  self.skipWaiting();
});

/**
 * EVENTO: ACTIVATE
 * Se ejecuta cuando el Service Worker se activa
 * Limpia cachés antiguas
 */
self.addEventListener("activate", (evento) => {
  console.log("✓ Activando Service Worker...");
  
  evento.waitUntil(
    caches.keys().then((nombresCache) => {
      return Promise.all(
        nombresCache.map((nombre) => {
          if (nombre !== NOMBRE_CACHE) {
            console.log(`🗑️ Eliminando caché antigua: ${nombre}`);
            return caches.delete(nombre);
          }
        })
      );
    })
  );
  
  // Tomar control de clientes inmediatamente
  self.clients.claim();
});

/**
 * EVENTO: FETCH
 * Intercepta todas las peticiones de red
 * Estrategia: CACHE FIRST (usar caché si está disponible)
 */
self.addEventListener("fetch", (evento) => {
  const { request } = evento;
  
  // Solo manejar peticiones GET
  if (request.method !== "GET") {
    return;
  }
  
  // Estrategia CACHE FIRST
  evento.respondWith(
    caches.match(request).then((respuestaCache) => {
      // Si está en caché, usar eso
      if (respuestaCache) {
        console.log(`📦 Desde caché: ${request.url}`);
        return respuestaCache;
      }
      
      // Si no está en caché, obtener de la red
      return fetch(request)
        .then((respuestaRed) => {
          // No cachear respuestas no válidas
          if (!respuestaRed || respuestaRed.status !== 200) {
            return respuestaRed;
          }
          
          // Clonar la respuesta
          const respuestaAmemorizar = respuestaRed.clone();
          
          // Cachear la respuesta válida
          caches.open(NOMBRE_CACHE).then((cache) => {
            cache.put(request, respuestaAmemorizar);
            console.log(`✓ Cacheado: ${request.url}`);
          });
          
          return respuestaRed;
        })
        .catch((error) => {
          console.warn(`✗ Error en fetch de ${request.url}:`, error);
          
          // Si falla la red y no hay caché, retornar página offline
          if (request.destination === "document") {
            return caches.match("./index.html");
          }
          
          return null;
        });
    })
  );
});

/**
 * EVENTO: MESSAGE
 * Permite comunicación entre la app y el Service Worker
 */
self.addEventListener("message", (evento) => {
  console.log("📨 Mensaje recibido en SW:", evento.data);
  
  if (evento.data && evento.data.tipo === "LIMPIAR_CACHE") {
    caches.delete(NOMBRE_CACHE).then(() => {
      console.log("🗑️ Caché limpiada manualmente");
    });
  }
});

/**
 * EVENTO: SYNC
 * Permite sincronización en segundo plano (cuando vuelve conexión)
 */
self.addEventListener("sync", (evento) => {
  console.log("🔄 Sincronizando datos...");
  
  if (evento.tag === "sincronizar-favoritos") {
    evento.waitUntil(
      // Aquí iría la lógica para sincronizar favoritos con servidor
      Promise.resolve()
    );
  }
});

console.log("%c🎸 SERVICE WORKER ROCKIFY ACTIVO 🎸", "font-size: 14px; font-weight: bold; color: #ff6b6b;");
console.log("%cEstrategia: CACHE FIRST - Funciona sin conexión", "color: #4ecdc4;");
