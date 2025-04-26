const CACHE_NAME = 'sound-button-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './sounds/オールスター感謝祭.mp3',
  './sounds/クイズ出題1.mp3',
  './sounds/クイズ出題2.mp3',
  './sounds/クイズ正解1.mp3',
  './sounds/クイズ不正解1.mp3',
  './sounds/ジャン！.mp3',
  './sounds/チーン1.mp3',
  './sounds/ドラムロール.mp3',
  './sounds/ドンドンパフパフ.mp3',
  './sounds/ラッパのファンファーレ.mp3',
  './sounds/レベルアップ.mp3',
  './sounds/歓声と拍手.mp3',
  './sounds/試合終了のゴング.mp3',
  './sounds/大勢で拍手.mp3',
  './sounds/和太鼓でドドン.mp3',
  './sounds/和太鼓でドン.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
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
