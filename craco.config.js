const path = require("path");

module.exports = {
  // ..
  webpack: {
    alias: {
        "@components": path.resolve(__dirname, "src/components/*"),
        "@utilities": path.resolve(__dirname, "src/utilities/*"),
        "@appConfigs": path.resolve(__dirname,"src/appConfigs/*"),
        "@modules": path.resolve(__dirname,"src/modules/*"),

    },
    plugins: {
      add: [
        /* ... */
      ],
      remove: [
        /* ... */
      ],
    },
    configure: {
      /* ... */
    },
    configure: (webpackConfig, { env, paths }) => {
      /* ... */
      return webpackConfig;
    },
  },
};
