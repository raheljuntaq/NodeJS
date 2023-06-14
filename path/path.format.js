const path = require("path");

console.log(
  path.format({
    root: "/some-root",
    base: "path.format",
    dir: "path",
    name: "path.format",
  })
);
