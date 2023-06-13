const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");
const a = inputData[0];
const b = inputData[1];
console.log(a / b);
