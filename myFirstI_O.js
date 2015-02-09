var fs = require('fs');
var myobj=fs.readFileSync(process.argv[2]);
var stringobj=myobj.toString();
var splitstring=stringobj.split("\n");
console.log(splitstring.length-1);