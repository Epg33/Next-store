/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'fakestoreapi.com',
      port: '',
      pathname: '/img/**'
    },
    {
      protocol: 'https',
      hostname: 'm.media-amazon.com',
      port: '',
      pathname: '/image/**'
    },
    {
      protocol: 'https',
      hostname: 'api.lorem.space',
      port: '',
      pathname: '/image/**'
    },
    {
      protocol: 'https',
      hostname: 'placeimg.com',
      port: '',
      pathname: '/**'
    },
    {
      protocol: 'http',
      hostname: 'placeimg.com',
      port: '',
      pathname: '/**'
    },
    {
      protocol: 'https',
      hostname: 'raw.githubusercontent.com',
      port: '',
      pathname: '/**'
    }, 
    {
      protocol: 'https',
      hostname: 'i.imgur.com',
      port: '',
      pathname: '/**'
    }]
  }
}
module.exports = nextConfig
