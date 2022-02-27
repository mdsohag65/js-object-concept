const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ kibria',
    treatDey: function (expense, tips, tax) {
        this.money = this.money - expense - tips - tax;
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
    name: 'Normal Galam'
}

// Call mehtod..
// kibria.treatDey.call(heroBalam, 500, 50, 15);
// kibria.treatDey.call(normalGolam, 1500, 150, 50);
// kibria.treatDey.call(heroBalam, 500, 30, 12);

// Apply mehtod..
kibria.treatDey.apply(heroBalam, [500, 100, 15]);


