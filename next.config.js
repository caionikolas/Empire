/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.brchallenges.com',
        port: '',
        pathname: '/avatars/**'
      }
    ]
  }
}

module.exports = nextConfig
