const path = require("path");

module.exports = {
  // ..
  webpack: {
    alias: {
        Components: path.resolve(__dirname, "src/components/*"),
        Utilities: path.resolve(__dirname, "src/utilities/*"),
        AppConfigs: path.resolve(__dirname,"src/appConfigs/*"),
        Modules: path.resolve(__dirname,"src/modules/*"),

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
