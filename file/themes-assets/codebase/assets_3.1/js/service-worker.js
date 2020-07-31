if ('serviceWorker' in navigator) {
console.log("Will the service worker register?");
navigator.serviceWorker.register('service-worker.js')
.then(function(reg){
console.log("Yes, it did.");
}).catch(function(err) {
console.log("No it didn't. This happened: ", err)
});
}

var CACHE_NAME = 'cache_<?php echo $Id_Cliente; ?>_v1';
var urlsToCache = [ '' ];
console.log('loading sw');

self.addEventListener('install', function(event) {
console.log('installing sw');
event.waitUntil(
caches.open(CACHE_NAME)
.then(function(cache) {
console.log('Opened cache');
var x = cache.addAll(urlsToCache);
console.log('cache added');
return x;
}) ); });

/*
self.addEventListener('fetch', function(event) {
let request = event.request;
event.respondWith( caches.match(request).then(function(response) {
if (response) { return response; }
return fetch(request).then(res => { return res; });
if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') { return; }
if (request.method === 'POST') { return; }
})
);
}); */

self.addEventListener('fetch', function(event) {
//console.log('Handling fetch event for', event.request.url, CACHE_NAME);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        //console.log('Found response in cache:', response);
        return response;
      }
//console.log('No response found in cache. About to fetch from network...', event.request.url);
return fetch(event.request).then(function(response) {
if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {  }
        //console.log('Response from network is:', response);
        return response;
      }).catch(function(error) {
            console.log('Fetching failed:', error);
//        throw error;
      });
    })
  );
});