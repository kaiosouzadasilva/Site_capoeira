const CACHE_NAME = 'ecll-gestao-v1';
const assets = [
  '/admin-login',
  '/manifest.json',
  '/Imagem_do_grupo.png'
];

// Instala o service worker e guarda as páginas essenciais no cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Permite que o app responda mesmo se a internet cair temporariamente
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});