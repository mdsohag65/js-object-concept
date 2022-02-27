const bottle = {
    color: 'Yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/*
for(let i=0; i<10; i++){}
for(const num of numbers) {} // array
for (const prop in student){} // object
 */
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

const entries = Object.entries(bottle);
console.log(entries);
// advance version
for (const [keys, values] of Object.entries(bottle)) {
    console.log(keys, values);
}