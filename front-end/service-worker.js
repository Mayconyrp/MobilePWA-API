var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

    self.skipWaiting();

    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([

                '/index.html',
                '/depoimentos.html',
                '/update.html',
                '/puxandoAPI/create.js',
                '/puxandoAPI/delete.js',
                '/puxandoAPI/listandoAxios.js',
                '/puxandoAPI/updateaxios.js',
                '/assets/css/style.css.css',
                '/assets/css/depoimentos.css',
                '/assets/cidade-do-vaticano.png',
                '/assets/rosario.png',
                '/assets/icons/vaticano 512x512.png',
                '/assets/icons/vaticano 256x256.png',
                '/assets/icons/vaticano 192x192.png',
                '/assets/icons/vaticano 180x180.png',
                '/assets/icons/vaticano 167x167.png',
                '/assets/icons/vaticano 152x152.png',
                '/assets/icons/vaticano 144x144.png',
                '/assets/icons/vaticano 128x128.png'

            ]))
    );
});

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', function (event) {
    //Atualizacao internet
    event.respondWith(async function () {
        try {
            return await fetch(event.request);
        } catch (err) {
            return caches.match(event.request);
        }
    }());

    //Atualizacao cache
    /*event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );*/

});