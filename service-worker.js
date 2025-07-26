const CACHE_NAME = 'isovolta-cache-v1';
const FILES_TO_CACHE = [
  'Index.html',
  'Herramientas.html',
  'Examenes.html',
  'Control Service Level.html',
  'CargaProductividad.html',
  'Calificaciones.html',
  'Indice_IATF.html',
  'Matriz de capacitacion.html',
  'Matriz equipos.html',
  'Matriz_iluo.html',
  'Optimizador Placas.html',
  'Pendientes_reentrenar.html',
  'Personas_iluo.html',
  'Planeacion.html',
  'Produccion.html',
  'Roll de turnos.html',
  'Unir Pdf.html',
  'Administrador.html',
  'Bitacora de horno.html',
  'Calculadora de PZ.html',
  'Calculo de avances.html',
  'Isovolta.ico',
  'manifest.json'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(response => {
      return response || fetch(evt.request);
    })
  );
});



