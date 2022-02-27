// console.log(this);
const kibria = {
    id: 101,
    money: 10000,
    name: 'RJ kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('Call from here', this);
        return this.money;
    }
}