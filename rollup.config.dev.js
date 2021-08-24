const path = require("path");
const resolve = require("rollup-plugin-node-resolve");
const inputPath = path.resolve(__dirname, "./src/index.js");
const outputPath = path.resolve(__dirname, "./dist/imoocDataV.js");
const vue = require("rollup-plugin-vue");
const postcss = require("rollup-plugin-postcss");

module.exports = {
  input: inputPath,
  output: {
    file: outputPath,
    format: "umd",
    name: "imoocDataV",
  },
  plugins: [resolve(), vue(), postcss()],
  external: ["vue"],
};
