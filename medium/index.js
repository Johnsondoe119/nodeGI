const fs = require("fs");

fs.readFile("index.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// const fs = require("fs");
// fs.readFile("index.txt", "utf8", (err, result) => {
//   if (err) throw err;
//   console.log(result);
// });
