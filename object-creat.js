// 1. using object literal..
const student = { name: 'bolod mia', job: 'boldami' };
// 2.consturctor
const person = new Object();

// 3.
// const human = Object.create(null)
const human = Object.create(student)
// console.log(human.name);

/* class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Inshan', 19);
console.log(peop); */
// using class..(syntactical sugar)
class People {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
const peop = new People('Petni', 'Purana Habeli');
console.log(peop);

// function
// function Manus(name) {
//     this.name = name;
// }
// const man = new Manus('Alia Vut');
// console.log(man);

function Manus(name) {
    this.name = name;
}
const man = new Manus('Abdul Halim');
console.log(man);