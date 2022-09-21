self.addEventListener("install", event => {
    console.log("Worker Installed");
});

self.addEventListener("activate", event => {
    console.log("Worker Activeated");
});