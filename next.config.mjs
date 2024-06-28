/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "firebasestorage.googleapis.com",
                pathname: "/v0/b/threads-of-tech-jobs.appspot.com/o/*",
            }
        ],
        dangerouslyAllowSVG: true,

    }
};

export default nextConfig;
