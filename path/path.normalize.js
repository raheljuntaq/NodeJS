const path = require("path");
const fs = require("fs");
const filePath = __dirname + "fsappend\filehello.txt";

const normalizedFilePath = path.normalize(filePath);
console.log({ filePath, normalizedFilePath });
const data = fs.readFileSync(normalizedFilePath);
console.log(data.toString());
