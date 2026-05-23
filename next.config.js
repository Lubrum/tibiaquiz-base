module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapercave.com',
      },
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
      },
      {
        protocol: 'https',
        hostname: 'media1.tenor.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
      {
        protocol: 'https',
        hostname: 'www.freeiconspng.com',
      },
      {
        protocol: 'https',
        hostname: 'www.alura.com.br',
      },
      {
        protocol: 'http',
        hostname: 'images.uncyc.org',
      },
    ],
  },
};
