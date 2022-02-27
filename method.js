// object e bivinno data type er onekgulo property ekoi sathe thakte pare..
// const student = {
//     id: 2009037,
//     money: 5000,
//     name: 'Sohag Ahmmed',
//     isRich: false,
//     Dept: 'English',
//     subjects: ['Cse', 'Sociology', 'Economics'],
//     bestFriend: {
//         name: 'Mundu',
//         Dept: 'English'
//     },
//     takeExam: function () {
//         console.log(this.name, 'taking exam');
//     },
//     treatDey: function (expense, tips) {
//         this.money = this.money - expense - tips;
//         return this.money;
//     }
// }
// student.takeExam();
// const remaining1 = student.treatDey(900, 100);
// const remaining2 = student.treatDey(500, 50);
// console.log(remaining2);

const student = {
    isRich: true,
    id: 2009099,
    name: 'Borun Dawan',
    money: 10000,
    Dept: 'English',
    subjects: ['CSE', 'Sociology', 'Economics'],
    bestFriend: {
        id: 2009014,
        name: 'Fokir Uddin',
        Dept: 'English'
    },
    takeExam: function () {
        console.log(this.name, ' is Taking Exam');
    },
    treatDey: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money
    }
}
student.takeExam();
const remaining1 = student.treatDey(2000, 150);
const remaining2 = student.treatDey(1500, 90);
console.log(remaining2);