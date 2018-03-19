/*----------------------------------------------------------------------------*\
    Service Worker
    Prepares offline content for when the connection is bad
\*----------------------------------------------------------------------------*/

/*  Variables
\*----------------------------------------------------------------------------*/

let cacheName = 'bramsmulders:5.2.0';
let cacheFiles = [
  '/about/',
  '/offline/',
  '/blog/structured-frontend-components/',
  '/blog/how-i-improved-my-workflow-with-smacss-sass/',
  '/blog/finger-friendly-all-the-things/',
  '/blog/one-hell-of-a-week/'
];



/*  Install Service worker
\*----------------------------------------------------------------------------*/

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      // console.log('Opened cache');
      return cache.addAll(cacheFiles);
    })
  );
});



/*  Fetch
\*----------------------------------------------------------------------------*/

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        // Grab the response from asset cache
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(() => {
        // Network is offline, return the cached offline page
        return caches.match('/offline/');
      })
  );
});



/*  Clear cache
\*----------------------------------------------------------------------------*/

self.addEventListener('activate', event => {
  let cacheWhitelist = ['bramsmulders:5.2.0'];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
