
//variable to read array
const staticCacheName = "staticCache";

//array with static files to load page offline
const staticFiles = ["/css/menu.css",
    "/ProgresiveWebApp.styles.css",
    "/lib/jquery/dist/jquery.min.js",
    "/lib/bootstrap/dist/js/bootstrap.bundle.min.js",
    "/js/menu.js", "/", "/js/generic.js", "/img/loading.gif"];

self.addEventListener("install", event => {
    console.log("Worker Installed");

    //saving cache files
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            return cache.addAll(staticFiles);
        })
    );
});

self.addEventListener("activate", event => {
    console.log("Worker Activeated");
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {

    //loading cache files
    const response = caches.match(event.request).then(res => {
        if (res) return res;
        else {
            return fetch(event.request).then(response => {
                return response;
            })
        }
    }).catch(err => {
        return null;
    });

    event.respondWith(response);
});