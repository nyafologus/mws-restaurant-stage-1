// Empty the old caches if there are any
caches.keys().then(names => {
    for (let name of names)
        caches.delete(name);
});

let cacheVersion = 'version1';
let cacheFiles = [
  "/",
  "/index.html",
  "/restaurant.html",
  "/css/styles.css",
  "/data/restaurants.json",
  "/js/",
  "/js/dbhelper.js",
  "/js/main.js",
  "/js/restaurant_info.js",
  "/js/swregister.js",
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/7.jpg",
  "/img/8.jpg",
  "/img/9.jpg",
  "/img/10.jpg"
];


// when the Service Worker is installed creates a cache called 'restaurantsV1'
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheVersion)
      .then(cache => {
      console.log("Opened cache");
      return cache
        .addAll(cacheFiles)
        .catch(error => {
        console.log("Failed to create cache");
        });
    }));
});

//when a request is made
self.addEventListener("fetch", event => {
    event.respondWith(
      //opens the cache
      caches.open("cache1")
        .then(cache => {
        //searches for the matched request in the cache
        return caches.match(event.request)
          .then(response => {
            //if it resolves, it returns the response
            if(response) {
              return response;
            } else {
              //if it doesn't find the requested data in the cache, fetches it from the network
              return fetch(event.request)
                .then(response => {
                  //and adds a clone of the response to the cache
                  cache.put(event.request, response.clone());
                  return response;
                });
            }
        });
      })
    )
});