const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('Call from here', this);
        return this.money;
    }
}

const heroBalam = {
    id: 420,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 420,
    money: 9000,
    name: 'Hero Galam'
}


const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(1500);
heroTreatDey(300);
heroTreatDey(200);
kibria.treatDey(1000);
const normalTreatDey = kibria.treatDey.bind(normalGolam);
normalTreatDey(2000);