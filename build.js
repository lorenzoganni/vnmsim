const esbuild = require("esbuild");
const autoprefixer = require("autoprefixer");
const postCssNested = require("postcss-nested");
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");

esbuild.build({
  color: true,
  entryPoints: ["./src/index.tsx"],
  outdir: process.argv[2] ? "./prod/" : "./app/",
  minify: process.argv[2] ? true : false,
  bundle: true,
  sourcemap: process.argv[2] ? false : true,
  splitting: true,
  format: "esm",
  tsconfig: "./tsconfig.json",
  platform: "browser",
  logLevel: "info",
  watch: process.argv[2] ? false : true,
  plugins: [
    postCssPlugin({
      plugins: [autoprefixer, postCssNested],
    }),
  ],
  define: {
    'global': 'window',
    'process.env.NODE_ENV': process.argv[2] ? '"production"' : '"development"'
  }
});
