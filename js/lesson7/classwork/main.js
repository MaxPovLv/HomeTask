// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

function Cars(model, producer, year, maxSpeed, engineVol) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVol = engineVol;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.newMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    function(model, producer, year, maxSpeed, engineVol) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVol = engineVol;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };
        this.info = function () {
            for (const key in this) {
                if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
            }
        };
        this.newMaxSpeed = function (newSpeed) {
            this.maxspeed = this.maxspeed + newSpeed;
        };
        this.changeYear = function (newValue) {
            this.year = newValue;
        };
        this.addDriver = function (driver) {
            this.driver = driver;
        };
    }
}


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Popelushka {
    constructor(name, age, fsize) {
        this.name = name;
        this.age = age;
        this.fsize = fsize;
    }
}

let popelushki = [
    new Popelushka('first', 25, 37),
    new Popelushka('second', 22, 37),
    new Popelushka('sird', 23, 35),
    new Popelushka('fourth', 26, 37),
    new Popelushka('fifth', 24, 38),
    new Popelushka('sixth', 21, 39),
    new Popelushka('seventh', 35, 40),
    new Popelushka('eighth', 45, 41),
    new Popelushka('ninth', 22, 32),
    new Popelushka('tenth', 35, 34),
]

class Prince {
    constructor(name, age, findShoes) {
        this.name = name;
        this.age = age;
        this.findShoes = findShoes;
    }
};

let prince = new Prince('Stefkoo', 45, 39);

let cons = (popelushkaArray, prince) => {
    for (let item of popelushki) {
        if (item.fsize === prince.findShoes) {
            return `your popelushka: ${item.name}`
        }
    }
};


let findPrincess = popelushki.find((item) => item.fsize === prince.findShoes);
console.log(findPrincess);
