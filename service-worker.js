// easy-PEDsy PWA: yalnızca aynı kaynaktan gelen uygulama dosyaları önbelleğe alınır.
// Çekirdek hesaplayıcılar index.html içine gömülüdür; ağ olmadan da açılabilir.
const CACHE_NAME = 'easy-pedsy-pwa-3.1-v2';
const CORE = [
  './', './index.html', './start.html', './downloads.html', './logo.svg', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png',
  './icons/icon-maskable-192.png', './icons/icon-maskable-512.png',
  './fonts/atkinson-hyperlegible.css',
  './fonts/atkinson-hyperlegible-latin-400-normal.woff2',
  './fonts/atkinson-hyperlegible-latin-400-italic.woff2',
  './fonts/atkinson-hyperlegible-latin-700-normal.woff2',
  './fonts/atkinson-hyperlegible-latin-ext-400-normal.woff2',
  './fonts/atkinson-hyperlegible-latin-ext-400-italic.woff2',
  './fonts/atkinson-hyperlegible-latin-ext-700-normal.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(Promise.all([
    caches.keys().then((names) => Promise.all(names.filter((name) => name.startsWith('easy-pedsy-pwa-') && name !== CACHE_NAME).map((name) => caches.delete(name)))),
    self.clients.claim()
  ]));
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // ?arac=... bağlantıları fiziksel dosya değildir; aynı index.html HTML'si içinde çözümlenir.
  const scopePath = new URL(self.registration.scope).pathname;
  const appRoute = url.pathname === scopePath || url.pathname === scopePath + 'index.html';
  if (request.mode === 'navigate' && appRoute) {
    event.respondWith(fetch(request).catch(() => caches.match('./index.html')));
    return;
  }

  // Bağımsız başlangıç sayfası ve yerel statik varlıklar.
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request)));
});
