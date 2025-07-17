const CACHE_NAME = 'goldhen-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/exploit.js',
  '/goldhen.bin',
  '/stage2_9.00.bin',
  '/luffy.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});