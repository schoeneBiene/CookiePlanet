import * as esbuild from "esbuild";

const IS_DEV = process.argv.includes("--dev");

const ctx = await esbuild.build({
  entryPoints: ["./src/index.ts"],
  outfile: "./dist/CookiePlanet.js",
  bundle: true,
  sourcemap: IS_DEV ? "inline" : false,
  minify: !IS_DEV,
});
