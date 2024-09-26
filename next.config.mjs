/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // You can add options here if needed
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
