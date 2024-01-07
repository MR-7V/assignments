const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    await fsPromises.writeFile("./textWrite.txt", "This is File content!");
    console.log("File is successfully written!");
    const data = await fsPromises.readFile("./textWrite.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fileOps();

console.log("Next task!");

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught exception: ${err}`);
  process.exit(1);
});
