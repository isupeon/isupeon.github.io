
const cacheName = 'ameen-ps4-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/exploit.html',
  '/exploit.js',
  '/goldhen.bin',
  '/stage2_9.00.bin',
  '/luffy'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
