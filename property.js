const bottle = { color: 'Yellow', hold: 'water', price: 50, isCleaned: true };
// geting all property names..
const keys = Object.keys(bottle);
// console.log(keys);
//get all values..
const values = Object.values(bottle);
// console.log(values);
// get object in pairs..
const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
delete bottle.isCleaned;
console.log(bottle);