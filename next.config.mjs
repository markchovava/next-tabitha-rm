/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{ 
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        serverActions: {
        bodySizeLimit: '100mb',
        },
    },
};

export default nextConfig;
