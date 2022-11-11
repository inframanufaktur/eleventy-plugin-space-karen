const pkg = require("./package.json");

module.exports = function (eleventyConfig) {
  try {
    eleventyConfig.versionCheck(pkg["11ty"].compatibility);
  } catch (e) {
    console.log(
      `WARN: Eleventy Plugin (${pkg.name}) Compatibility: ${e.message}`
    );
  }

  eleventyConfig.addTransform("spaceKaren", function (content) {
    return content.replaceAll(/elon musk/gim, "Space Karen");
  });
};
