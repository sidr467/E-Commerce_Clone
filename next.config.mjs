/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/E-Commerce_Clone",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com",
      },
    ],
  },
}

export default nextConfig
