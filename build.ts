import { build } from "esbuild";
import chalk from "chalk";

const entryPoints = ["src/main.ts"];

await build({
  entryPoints,
  bundle: true,
  platform: "node",
  target: "node19",
  format: "esm",
  outdir: "dist",
  external: ["aws-sdk", "etcd3", "esdk-obs-nodejs"],
});

console.log(chalk.green("✅", " build succes"));
