// Write a program in to list and print all files and folders in current directory

const fs = require("fs");
  
let directory_name = "E:/Faridabad InterView Task/JavaScriptQuestion";
  
let filenames = fs.readdirSync(directory_name);
  
console.log("\nFilenames in directory:");
filenames.forEach((file) => {
    console.log("File:", file);
});

