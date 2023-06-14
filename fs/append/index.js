const read = require("../read-file-sync").read;
const write = require("../write-file-sync").write;

function append(file, data) {
  const oldData = read(file);
  write(file, oldData + "\n" + data);
}

append("file/hello.txt", "Hello from Node.js");
