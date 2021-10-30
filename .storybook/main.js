// your app's webpack.config.js
const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    console.log(config.module.rules);
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            test: /\.(svg)$/,
            exclude: /node_modules/,
            use: ["@svgr/webpack"],
          },
          ...config.module.rules.filter(
            (config) => !config.test.source.includes("svg")
          ),
        ],
      },
    };
  },
};
