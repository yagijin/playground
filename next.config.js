/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    execEnv: process.env.EXEC_ENV,
  },
}

module.exports = nextConfig
