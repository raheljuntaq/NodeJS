const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from Node.js", {
  encoding: "utf-8",
});

exports.write = fs.writeFileSync;
