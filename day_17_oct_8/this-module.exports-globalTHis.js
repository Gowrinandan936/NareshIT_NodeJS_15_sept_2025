console.log(this, this === module.exports); // this is the global Object

module.exports.name = "sanjay";
module.exports.add = "banglore";

console.log(this);

console.log(globalThis); // this is the global Object