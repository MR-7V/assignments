const fs = require("fs");

fs.readFile("temp.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
  const fileContent = data.replace(/\s+/g, " ").trim();
  fs.writeFile("temp.txt", fileContent, (err) => {
    if (err) throw err;
    console.log("File has been written!");
  });
});
