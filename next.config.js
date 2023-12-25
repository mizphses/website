const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
  experimental: {
    mdxRs: true,
  },
}

module.exports = withMDX(nextConfig)
