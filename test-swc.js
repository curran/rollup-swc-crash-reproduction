import swc from "@swc/core";

async function main() {
  const inputCode = `const foo = {
    bar = baz,
  };
  console.log(foo);`;

  try {
    const result = await swc.transform(inputCode, {
      jsc: {
        target: "es5",
      },
    });

    console.log(result.code);
  } catch (error) {
    // This does trigger
    console.log("Caught an error from SWC: ", error);
    console.error(error);
  }
}

main();
