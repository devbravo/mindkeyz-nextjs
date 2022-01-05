module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["example.com", "example2.com"],
  },
};

const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const path = require("path");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin());
    config.resolve.alias["fast-deep-equal"] = path.resolve(__dirname, "node_modules", "fast-deep-equal");
    return config;
  },
};
