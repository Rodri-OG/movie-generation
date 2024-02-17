/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = { reactStrictMode: true, 
  images: { loader: "default", 
  minimumCacheTTL: 60, 
  domains: [ "image.tmdb.org" ], 
  }, 
}
 