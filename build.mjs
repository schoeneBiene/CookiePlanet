import * as esbuild from "esbuild";

const ctx = await esbuild.build({
    entryPoints: ["./src/index.ts"],
    outfile: "./dist/CookiePlanet.js",
    bundle: true,
    sourcemap: "inline"
});
