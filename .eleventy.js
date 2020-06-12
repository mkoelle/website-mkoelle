// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  
  // eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.setTemplateFormats([
    "png",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};