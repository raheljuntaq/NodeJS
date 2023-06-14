const path = require("path");

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("path/path.isAbsolute.js"));
