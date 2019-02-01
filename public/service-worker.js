workbox.setConfig({
  debug: false
});

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// workbox.routing.registerRoute(
//   new RegExp("https://some-fancy-api.com"),
//   workbox.strategies.networkFirst({
//     cacheName: "api"
//   })
// );

workbox.routing.registerRoute(
  new RegExp("https://d1eq7v76s8dt2n.cloudfront.net"),
  workbox.strategies.cacheFirst({
    cacheName: "cloudfront resources",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "static-resources"
  })
);

workbox.routing.registerRoute(
    /\.(?:html)$/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: "html"
    })
);

workbox.core.setLogLevel(workbox.core.LOG_LEVELS.warn);
