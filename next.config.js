/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEATHER_KEY: process.env.WEATHER_KEY,
  },
  images: {
    domains: ['images.unsplash.com', 'openweathermap.org'],
  },
};

module.exports = nextConfig;
