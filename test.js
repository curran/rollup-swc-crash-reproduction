import { rollup } from "rollup";

async function main() {
  try {
    // Create a bundle
    const bundle = await rollup({
      input: "input.js",
    });

    // Write the bundle to disk
    await bundle.write({
      file: "bundle.js",
      format: "es",
    });
  } catch (error) {
    console.log("Caught an error: ", error);
  }
}

main();
