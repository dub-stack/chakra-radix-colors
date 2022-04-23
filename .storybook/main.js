const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Allow for .mjs files to be loaded
    config.module.rules.push({
      type: "javascript/auto",
      test: /\.mjs$/,
      include: /node_modules/,
    });

    // Add aliases manually for Chakra due to https://github.com/storybookjs/storybook/issues/13114
    config.resolve.alias["@emotion/core"] = "@emotion/react";
    config.resolve.alias["emotion-theming"] = "@emotion/react";

    // Allow for default imports from "src/*". This makes it possible to do an import like this:
    // import { chakraTokensFromPalette } from "util/helpers";
    config.resolve.modules.push(path.resolve(__dirname, "..", "src"));

    // Return the altered config
    return config;
  },
};
