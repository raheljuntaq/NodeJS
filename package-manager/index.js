console.log("Hello folks");
const axios = require("axios");

// axios.get("https://google.com").then((response) => {
//  console.log(response.data);
// });

const mathFunction = require("./package/math-function");
console.log(mathFunction.add(1, 2));
console.log(mathFunction.sub(1, 2));
console.log(mathFunction.mul(1, 2));
console.log(mathFunction.div(1, 2));
