const withOffline = require('next-offline');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');

module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  }
});

// module.exports = withOffline({
//   workboxOpts: {
//     swDest: process.env.NEXT_EXPORT
//       ? 'service-worker.js'
//       : 'static/service-worker.js',
//     runtimeCaching: [
//       {
//         urlPattern: /^https?.*/,
//         handler: 'NetworkFirst',
//         options: {
//           cacheName: 'offlineCache',
//           expiration: {
//             maxEntries: 200
//           }
//         }
//       }
//     ]
//   },
//   experimental: {
//     async rewrites() {
//       return [
//         {
//           source: '/service-worker.js',
//           destination: '/_next/static/service-worker.js'
//         }
//       ];
//     }
//   }
// });
