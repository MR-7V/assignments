const fs = require("fs");

fs.readFile("./temp.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Next task!");

function someExpensiveOperation() {
  let temp = 0;
  for (let i = 0; i <= 10000000000; i++) {
    temp++;
  }
}

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught exception: ${err}`);
  process.exit(1);
});

someExpensiveOperation();
