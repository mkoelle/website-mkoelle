// docs: https://www.11ty.io/docs/config/

const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
  sassPluginOptions = { watch: ["src/**/*.{scss,sass}", "!node_modules/**"] };
  eleventyConfig.addPlugin(pluginSass, sassPluginOptions);

  eleventyConfig.addPassthroughCopy({ static: "/" });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
