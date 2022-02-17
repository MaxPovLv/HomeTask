// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його
// в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

let nameNorm = (str, sym) => {
    let preNorm = str
        .replace(sym, ' ');
    let norm = preNorm
        .replaceAll(sym, '')
    return norm
}

console.log(nameNorm(n1, '.'))
console.log(nameNorm(n2, '-'))
console.log(nameNorm(n3, '_'))


// - створити функцію, яка генерує масив рандомних числових цілих значень
// в діапазоні від 0 до 100.

let random = (quan) => {
    let numArr = [];
    for (let i = 0; i < quan; i++) {
        numArr.push(Math.floor(Math.random() * 101));
    }
    return numArr
}

console.log(random(3))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних
// цілих числових значень. Відсортувати його за допомоги sort

let randomSort = (quan) => {
    let numArr = [];
    for (let i = 0; i < quan; i++) {
        numArr.push(Math.floor(Math.random() * 101));
    }
    return numArr.sort((a, b) => a - b);
}

console.log(randomSort(6))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих
// числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let randomEven = (quan) => {
    let numArr = [];
    for (let i = 0; i < quan; i++) {
        numArr.push(Math.floor(Math.random() * 101));
    }
    return numArr.filter(value => value % 2 === 0);
}

console.log(randomEven(6))


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги
// попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві
// на стрінгові.

let randomStr = (quan) => {
    let numArr = [];
    for (let i = 0; i < quan; i++) {
        numArr.push(Math.floor(Math.random() * 101));
    }
    return numArr.map(num => num.toString());
}

console.log(randomStr(6))


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його
// від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (arr, dir) => {
    if (dir === 'as') return arr.sort((a, b) => a - b);
    else if (dir === 'des') return arr.sort((a, b) => b - a);
}
let nums = [11, 21, 3];

console.log(sortNums(nums, 'as'))


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

let arrFiltMonthDur = (arr) => arr.sort((a, b) => b.monthDuration - a.monthDuration);

console.log(arrFiltMonthDur(coursesAndDurationArray))


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let arrFiltDurHighFive = (arr) => arr.filter(arr => arr.monthDuration > 5);

console.log(arrFiltDurHighFive(coursesAndDurationArray))
