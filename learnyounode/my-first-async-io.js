//Instead of fs.readFileSync() you will want to use fs.readFile() and
//instead of using the return value of this method you need to collect the
//value from a callback function that you pass in as the second argument. To
//learn more about callbacks, check out:

//start off first by importing the fs moduale
const fs = require("fs");
//read the file
//its already been decided the full path to the file to read comes from process.argv[2]
//i set path to process.argv
const path = process.argv[2];
//now to read the file in the command line
//we would do fs.readFileSync(need to get more infor). the parameters im setting is path because i want that read
//sync is included because we are refering to the synchronous nature of the file reading operation
fs.readFile(path, "utf8", (err, read) => {
  if (err) {
    console.log(err);
    return;
  }
  //now that we have read the file we need to count the lines in the file
  //  split the string wherever it encounters a newline character.
  const lines = read.split("\n");
  //we do the -1 for the event we encounter an empty line due to a trailing newline charecter
  const numLines = lines.length - 1;
  console.log(numLines);
});
