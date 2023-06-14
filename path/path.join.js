const path = require("path");
const fs = require("fs");

console.log(path.join(__dirname, "path/some-directory/some-file.txt"));

const data = fs.readFileSync(path.join(__dirname, "path/some-directory/some-file.txt"));
console.log(data.toString());
