var fs = require("fs");

var contents = fs.readFileSync("./lib/sayings.md");

console.log(contents);
