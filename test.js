import { rollup } from "rollup";

// This never triggers
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

// This never triggers
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

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
    // This never triggers
    console.log("Caught an error: ", error);
  }
}

main();
