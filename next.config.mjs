/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-ai-website",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
