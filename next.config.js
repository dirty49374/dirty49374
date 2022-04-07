const removeImports = require("next-remove-imports")();

module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: false,
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    webpack: (config, { isServer, webpack }) => {
      config.module.rules.push({
        test: /\.graphql$/i,
        loader: "raw-loader",
      });

      if (!isServer) {
        // Ensures no server modules are included on the client.
        config.plugins.push(
          new webpack.IgnorePlugin({
            resourceRegExp: /lib\/server/,
          })
        );
      }

      return config;
    },
  };

  return removeImports({
    ...nextConfig,
  });
};

// module.exports = nextConfig;
