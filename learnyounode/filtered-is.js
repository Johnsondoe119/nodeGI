const fs = require("fs"); // Import the fs module to access file system operations

function list(files, filter) {
  // Define a function called "list" that takes in two parameters: "files" and "filter"
  fs.readdir(files, "utf8", (err, data) => {
    // Read the contents of the specified directory asynchronously
    if (err) {
      console.log(err);
      return;
    }
    data.forEach((file) => {
      // Iterate over each file in the directory
      type = file.split(".")[1]; // Split the file name by dot (.) and retrieve the file extension
      if (type == filter)
        // Compare the file extension with the provided filter
        console.log(file); // Print the file name if the extension matches the filter
    });
  });
}
list(process.argv[2], process.argv[3]); // Call the "list" function with the command-line arguments for directory and filter
