/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...existing code...
  // remove the bad redirect or return an empty array
  redirects: async () => [],
  // ...existing code...
};

export default nextConfig;