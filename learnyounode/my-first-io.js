//Write a program that uses a single synchronous filesystem operation to
//read a file and print the number of newlines (\n) it contains to the
//console (stdout), similar to running cat file | wc -l.

//The full path to the file to read will be provided as the first
//command-line argument (i.e., process.argv[2]). You do not need to make
//your own test file.

//start off first by importing the fs moduale
const fs = require("fs");
//read the file
//its already been decided the full path to the file to read comes from process.argv[2]
//i set path to process.argv
const path = process.argv[2];
//now to read the file in the command line
//we would do fs.readFileSync(need to get more infor). the parameters im setting is path because i want that read
//sync is included because we are refering to the synchronous nature of the file reading operation
const read = fs.readFileSync(path, "utf8");

//now that we have read the file we need to count the lines in the file
//  split the string wherever it encounters a newline character.
const lines = read.split("\n");
//we do the -1 for the event we encounter an empty line due to a trailing newline charecter
const numLines = lines.length - 1;

console.log(numLines);
