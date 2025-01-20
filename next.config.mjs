/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "e-commerceshopbackend-production.up.railway.app",
        port: "32204",
        pathname: "/**",
      },
    ],
  },
  compress: true,
};

export default nextConfig;
