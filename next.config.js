/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['*'],
    remotePatterns: [
    { hostname: 'cloudfront-us-east-1.images.arcpublishing.com'},
    { hostname: 'picsum.photos'},
    { hostname: 'cdn.pixabay.com' },
    { hostname: 'images.pexels.com' },
    {
      protocol: 'https',
      hostname: 'fakestoreapi.com',
      port: '',
      pathname: '/img/**'
    },
    {
      protocol: 'https',
      hostname: 'www.google.com',
      port: '',
      pathname: '/**'
    },
    {
      protocol: 'https',
      hostname: 's.yimg.com',
      port: '',
      pathname: '/**'
    },
    {
      protocol: 'https',
      hostname: 'bing.com',
      port: '',
      pathname: '/images/**'
    },
    {
      protocol: 'https',
      hostname: 'renzocosta.vteximg.com.br',
      port: '',
      pathname: '/arquivos/**'
    },
    {
      protocol: 'https',
      hostname: 'elcomercio.pe',
      port: '',
      pathname: '/resizer/**'
    },
    {
      protocol: 'https',
      hostname: 'm.media-amazon.com',
      port: '',
      pathname: '/image/**'
    },
    {
      protocol: 'https',
      hostname: 'firebasestorage.googleapis.com',
      port: '',
      pathname: '/v0/b/platzi-store-forms.appspot.com/**'
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
