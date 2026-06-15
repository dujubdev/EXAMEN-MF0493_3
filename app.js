/**
 * ROCKIFY - APLICACIÓN PWA
 * Lógica JavaScript principal
 * Autor: Desarrollador Web Senior
 * Fecha: 2024
 */

// ============================================================================
// VARIABLES GLOBALES Y CONSTANTES
// ============================================================================

const API_CLIMA = "e85b0e47b8262ecc79e449aba8d572e0";
const API_AUDIOBD = "3";

let bandasFiltradas = [...bandasRock];
let favoritos = [];
let bandaSeleccionada = null;
let temaOscuro = localStorage.getItem("temaOscuro") === "true";

// ============================================================================
// FUNCIONES DE INICIALIZACIÓN
// ============================================================================

/**
 * Inicializa la aplicación al cargar la página
 */
const inicializarAplicacion = () => {
  console.log("✓ Inicializando Rockify...");
  
  aplicarTemaSaved();
  cargarFavoritos();
  renderizarBandas(bandasRock);
  obtenerClimaActual();
  registrarServiceWorker();
  
  // Agregar event listeners
  document.getElementById("filtro-decada").addEventListener("change", manejarFiltro);
  document.getElementById("boton-tema").addEventListener("click", toggleTema);
  document.getElementById("buscador").addEventListener("input", buscarBandas);
  
  console.log("✓ Rockify cargado exitosamente");
};

// ============================================================================
// GESTIÓN DE TEMAS Y ESTILOS
// ============================================================================

/**
 * Alterna entre tema claro y oscuro
 */
const toggleTema = () => {
  temaOscuro = !temaOscuro;
  document.body.classList.toggle("tema-oscuro", temaOscuro);
  localStorage.setItem("temaOscuro", temaOscuro);
  
  const botonTema = document.getElementById("boton-tema");
  botonTema.innerHTML = temaOscuro ? 
    '<i class="fas fa-sun"></i> Tema Claro' : 
    '<i class="fas fa-moon"></i> Tema Oscuro';
  
  console.log(`• Tema: ${temaOscuro ? "Oscuro" : "Claro"}`);
};

/**
 * Aplica el tema guardado en localStorage
 */
const aplicarTemaSaved = () => {
  if (temaOscuro) {
    document.body.classList.add("tema-oscuro");
    document.getElementById("boton-tema").innerHTML = '<i class="fas fa-sun"></i> Tema Claro';
  }
};

// ============================================================================
// RENDERIZACIÓN DE BANDAS
// ============================================================================

/**
 * Renderiza la lista de bandas dinámicamente
 * @param {Array} bandas - Array de bandas a renderizar
 */
const renderizarBandas = (bandas) => {
  console.log(`→ Renderizando ${bandas.length} bandas`);
  
  const contenedorBandas = document.getElementById("lista-bandas");
  contenedorBandas.innerHTML = "";
  
  if (bandas.length === 0) {
    contenedorBandas.innerHTML = `
      <div class="sin-resultados">
        <p>No se encontraron bandas</p>
      </div>
    `;
    return;
  }
  
  bandas.forEach((banda) => {
    const tarjetaBanda = crearTarjetaBanda(banda);
    contenedorBandas.appendChild(tarjetaBanda);
  });
};

/**
 * Crea una tarjeta de banda
 * @param {Object} banda - Objeto banda
 * @returns {Element} Elemento tarjeta
 */
const crearTarjetaBanda = (banda) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta-banda";
  tarjeta.setAttribute("data-id", banda.id);
  
  const esFavorito = favoritos.includes(banda.id);
  
  tarjeta.innerHTML = `
    <div class="tarjeta-contenido">
      <h3>${banda.nombre}</h3>
      <p class="decada"><i class="fas fa-calendar"></i> ${banda.decada}</p>
      <p class="descripcion">${banda.descripcion}</p>
      <div class="tarjeta-acciones">
        <button class="btn-detalles" aria-label="Ver detalles de ${banda.nombre}">
          <i class="fas fa-play-circle"></i> Detalles
        </button>
        <button class="btn-favorito ${esFavorito ? 'activo' : ''}" aria-label="Agregar a favoritos">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  `;
  
  // Event listeners
  tarjeta.querySelector(".btn-detalles").addEventListener("click", () => {
    mostrarDetalle(banda.id);
  });
  
  tarjeta.querySelector(".btn-favorito").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorito(banda.id);
    e.target.closest(".btn-favorito").classList.toggle("activo");
  });
  
  return tarjeta;
};

// ============================================================================
// FILTRADO Y BÚSQUEDA
// ============================================================================

/**
 * Maneja el evento de cambio en el filtro de década
 */
const manejarFiltro = () => {
  filtrarPorDecada();
};

/**
 * Filtra bandas por década seleccionada
 */
const filtrarPorDecada = () => {
  const decadaSeleccionada = document.getElementById("filtro-decada").value;
  
  if (decadaSeleccionada === "todas") {
    bandasFiltradas = [...bandasRock];
  } else {
    bandasFiltradas = bandasRock.filter((banda) => banda.decada === decadaSeleccionada);
  }
  
  console.log(`→ Filtrados: ${bandasFiltradas.length} bandas de ${decadaSeleccionada}`);
  renderizarBandas(bandasFiltradas);
};

/**
 * Busca bandas por nombre
 */
const buscarBandas = () => {
  const termino = document.getElementById("buscador").value.toLowerCase();
  
  const resultados = bandasRock.filter((banda) => 
    banda.nombre.toLowerCase().includes(termino) ||
    banda.descripcion.toLowerCase().includes(termino)
  );
  
  console.log(`→ Búsqueda: "${termino}" - ${resultados.length} resultados`);
  renderizarBandas(resultados);
};

// ============================================================================
// VISTA DETALLE DE BANDA
// ============================================================================

/**
 * Muestra el detalle de una banda
 * @param {Number} idBanda - ID de la banda
 */
const mostrarDetalle = (idBanda) => {
  bandaSeleccionada = bandasRock.find((b) => b.id === idBanda);
  
  if (!bandaSeleccionada) {
    console.error("Banda no encontrada");
    return;
  }
  
  console.log(`• Mostrando detalle: ${bandaSeleccionada.nombre}`);
  
  // Intentar obtener información adicional de la API
  obtenerInfoAPI(bandaSeleccionada.nombre);
  
  const modal = document.getElementById("modal-detalle");
  const contenidoModal = document.getElementById("contenido-modal");
  
  contenidoModal.innerHTML = `
    <div class="detalle-banda">
      <h2>${bandaSeleccionada.nombre}</h2>
      <p class="decada"><i class="fas fa-calendar"></i> ${bandaSeleccionada.decada}</p>
      
      <section class="seccion-historia">
        <h3><i class="fas fa-book"></i> Historia</h3>
        <p>${bandaSeleccionada.historia}</p>
      </section>
      
      <section class="seccion-integrantes">
        <h3><i class="fas fa-users"></i> Integrantes</h3>
        <ul class="lista-integrantes">
          ${bandaSeleccionada.integrantes.map((integrante) => 
            `<li>${integrante}</li>`
          ).join("")}
        </ul>
      </section>
      
      <section class="seccion-canciones">
        <h3><i class="fas fa-music"></i> Canciones Principales</h3>
        <div class="lista-canciones">
          ${bandaSeleccionada.canciones.map((cancion) => 
            `<div class="item-cancion" data-id="${cancion.youtubeId}">
              <div class="info-cancion">
                <h4>${cancion.titulo}</h4>
                <p>${cancion.album} (${cancion.anio})</p>
              </div>
              <button class="btn-reproducir" aria-label="Reproducir ${cancion.titulo}">
                <i class="fas fa-play"></i>
              </button>
            </div>`
          ).join("")}
        </div>
      </section>
    </div>
  `;
  
  // Agregar event listeners a canciones
  document.querySelectorAll(".btn-reproducir").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const itemCancion = e.target.closest(".item-cancion");
      const youtubeId = itemCancion.dataset.id;
      crearReproductor(youtubeId);
    });
  });
  
  modal.classList.add("activo");
  document.body.style.overflow = "hidden";
};

/**
 * Cierra el modal de detalle
 */
const cerrarModal = () => {
  const modal = document.getElementById("modal-detalle");
  modal.classList.remove("activo");
  document.body.style.overflow = "auto";
  bandaSeleccionada = null;
};

// ============================================================================
// REPRODUCTOR DE CANCIONES
// ============================================================================

/**
 * Crea un reproductor de YouTube
 * @param {String} youtubeId - ID del video de YouTube
 */
const crearReproductor = (youtubeId) => {
  console.log(`→ Reproduciendo: ${youtubeId}`);
  
  const contenedorReproductor = document.getElementById("contenedor-reproductor");
  
  contenedorReproductor.innerHTML = `
    <div class="reproductor-activo">
      <button class="btn-cerrar-reproductor" aria-label="Cerrar reproductor">
        <i class="fas fa-times"></i>
      </button>
      <iframe 
        width="100%" 
        height="400" 
        src="https://www.youtube.com/embed/${youtubeId}" 
        title="Reproductor de YouTube" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        aria-label="Reproductor de video">
      </iframe>
    </div>
  `;
  
  document.querySelector(".btn-cerrar-reproductor").addEventListener("click", () => {
    contenedorReproductor.innerHTML = "";
  });
};

// ============================================================================
// GESTIÓN DE FAVORITOS
// ============================================================================

/**
 * Carga los favoritos desde localStorage
 */
const cargarFavoritos = () => {
  const favoritosGuardados = localStorage.getItem("favoritosRockify");
  favoritos = favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  console.log(`• Favoritos cargados: ${favoritos.length}`);
  actualizarContadorFavoritos();
};

/**
 * Guarda los favoritos en localStorage
 */
const guardarFavoritos = () => {
  localStorage.setItem("favoritosRockify", JSON.stringify(favoritos));
  console.log(`• Favoritos guardados: ${favoritos.length}`);
};

/**
 * Actualiza el contador de favoritos en el header
 */
const actualizarContadorFavoritos = () => {
  document.getElementById("contador-favoritos").textContent = favoritos.length;
};

/**
 * Alterna el estado de favorito de una banda
 * @param {Number} idBanda - ID de la banda
 */
const toggleFavorito = (idBanda) => {
  if (favoritos.includes(idBanda)) {
    favoritos = favoritos.filter((id) => id !== idBanda);
    console.log(`✗ Removido de favoritos: ${idBanda}`);
  } else {
    favoritos.push(idBanda);
    console.log(`✓ Agregado a favoritos: ${idBanda}`);
  }
  guardarFavoritos();
  actualizarContadorFavoritos();
};

/**
 * Muestra solo las bandas favoritas
 */
const mostrarFavoritos = () => {
  const bandaFavoritasArray = bandasRock.filter((banda) => favoritos.includes(banda.id));
  console.log(`→ Mostrando ${bandaFavoritasArray.length} bandas favoritas`);
  renderizarBandas(bandaFavoritasArray);
  
  // Actualizar estado del selector
  document.getElementById("filtro-decada").value = "todas";
};

// ============================================================================
// API CLIMA
// ============================================================================

/**
 * Obtiene y muestra el clima actual
 */
const obtenerClimaActual = async () => {
  try {
    const respuesta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&lang=es&appid=${API_CLIMA}`
    );
    
    if (!respuesta.ok) throw new Error("Error en API");
    
    const datos = await respuesta.json();
    const ahora = new Date().getHours();
    const saludo = ahora < 12 ? "Buenos días" : ahora < 18 ? "Buenas tardes" : "Buenas noches";
    
    const infoClima = document.getElementById("info-clima");
    infoClima.innerHTML = `
      <span aria-label="Información climática">
        <i class="fas fa-cloud-sun"></i> ${saludo} - ${datos.main.temp}°C
      </span>
    `;
    
    console.log(`• Clima: ${datos.main.temp}°C en ${datos.name}`);
  } catch (error) {
    console.error("✗ Error obteniendo clima:", error);
    const infoClima = document.getElementById("info-clima");
    infoClima.innerHTML = '<span><i class="fas fa-ban"></i> Clima no disponible</span>';
  }
};

/**
 * Obtiene información adicional de la API TheAudioDB
 * @param {String} nombreBanda - Nombre de la banda
 */
const obtenerInfoAPI = async (nombreBanda) => {
  try {
    const respuesta = await fetch(
      `https://www.theaudiodb.com/api/v1/artist.php?i=${nombreBanda}&apikey=${API_AUDIOBD}`
    );
    
    if (!respuesta.ok) throw new Error("Error en API");
    
    const datos = await respuesta.json();
    console.log(`• Info API de ${nombreBanda}:`, datos);
    
    return datos;
  } catch (error) {
    console.error("✗ Error obteniendo datos de API:", error);
    return null;
  }
};

// ============================================================================
// SERVICE WORKER
// ============================================================================

/**
 * Registra el Service Worker
 */
const registrarServiceWorker = async () => {
  try {
    if ("serviceWorker" in navigator) {
      const registro = await navigator.serviceWorker.register("./sw.js");
      console.log("✓ Service Worker registrado:", registro);
    }
  } catch (error) {
    console.error("✗ Error registrando Service Worker:", error);
  }
};

// ============================================================================
// EVENT LISTENERS
// ============================================================================

/**
 * Cierra el modal al hacer clic en X o fuera del contenido
 */
document.addEventListener("DOMContentLoaded", () => {
  inicializarAplicacion();
  
  const modal = document.getElementById("modal-detalle");
  const botonCerrar = document.querySelector(".btn-cerrar-modal");
  
  botonCerrar?.addEventListener("click", cerrarModal);
  
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      cerrarModal();
    }
  });
  
  // Tecla ESC para cerrar modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("activo")) {
      cerrarModal();
    }
  });
  
  // Botón de favoritos en header
  document.getElementById("btn-favoritos")?.addEventListener("click", mostrarFavoritos);
});

// ============================================================================
// UTILIDADES DE CONSOLA
// ============================================================================

console.log("%c🎸 ROCKIFY - PWA SPOTIFY ROCK 🎸", "font-size: 16px; font-weight: bold; color: #ff6b6b;");
console.log("%cAplicación Web Progresiva dedicada al mejor rock de 3 décadas", "color: #4ecdc4;");
console.log("%c📊 Estadísticas:", "font-weight: bold;");
console.log(`   • ${bandasRock.length} bandas cargadas`);
console.log(`   • ${bandasRock.reduce((acc, b) => acc + b.canciones.length, 0)} canciones disponibles`);
console.log(`   • Décadas: 70s, 80s, 90s`);
