module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    name: 'tojung',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './public/service-worker.js',
      // ...other Workbox options...
    }
  }
}
