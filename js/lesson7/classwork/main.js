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
        for (let key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.newMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let addCar = new Cars('Reno', 'France', 2000, 270, 2);
console.log(addCar);
addCar.drive();
addCar.info();
addCar.newMaxSpeed(20);
addCar.changeYear(2010)
addCar.addDriver('Vasil')
console.log(addCar)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor (model, producer, year, maxSpeed, engineVol) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVol = engineVol;
    }

    drive() {
        return (`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        for (let key in this) {
            if (typeof this[key] !== 'constructor') {
                return (`${key} - ${this[key]}`)
            }
        }
    };

    newMaxSpeed(newSpeed) {
        return this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newValue) {
        return this.year = newValue;
    };

    addDriver(driver) {
        return this.driver = driver;
    };

}

let addCar1 = new Car('Supra', 'Toyota', 1997, 270, 3);
addCar1.newMaxSpeed(40);
addCar1.changeYear(2002)
addCar1.addDriver('Poul')
console.log(addCar1);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.

class Popelushka {
    constructor(name, age, fsize) {
        this.name = name;
        this.age = age;
        this.fsize = fsize;
    }
}


// Створити масив з 10 попелюшок.

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


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, findShoes) {
        this.name = name;
        this.age = age;
        this.findShoes = findShoes;
    }
};


// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let prince = new Prince('Vasya', 45, 39);

let cons = (popelushkaArray, prince) => {
    for (let item of popelushki) {
        if (item.fsize === prince.findShoes) {
            return `your popelushka: ${item.name}`
        }
    }
};


// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findPrincess = popelushki.find((item) => item.fsize === prince.findShoes);
console.log(findPrincess);
