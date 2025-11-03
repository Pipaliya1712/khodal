/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/",
      permanent: true,
    },
  ],
};

export default nextConfig;
