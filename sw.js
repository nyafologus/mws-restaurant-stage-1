// when the Service Worker is installed creates a cache called 'restaurantsV1'
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("cache1").then(cache => {
      console.log("Cache created");
      return cache
        .addAll([
          "/",
          "/index.html",
          "/restaurant.html",
          "/css/styles.css",
          "/data/restaurants.json",
          "/js/",
          "/js/dbhelper.js",
          "/js/main.js",
          "/js/restaurant_info.js",
          "/js/swregister.js"
        ]);
        .catch(error => {
         console.log("Failed to create cache");
        });
    });
});

//when a request is made
self.addEventListener("fetch", event => {
    event.respondWith(
        //opens the cache
        caches.open("cache1").then(cache => {
          //searches for the matched request in the cache
          return caches.match(event.request).then(response => {
            //if it resolves, it returns the response
            if(response) {
              return response;
            } else {
              //if it doesn't find the requested data in the cache, fetches it from the network
              return fetch(event.request).then(response => {
                //and adds a clone of the response to the cache
                cache.put(event.request, response.clone());
                return response;
              });
            }
        });
      })
    )
});