// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numArray = [1, 2, 3, 4, 5];
let stringArray = ['uno', 'due', 'tre', 'quattro', 'cinque'];
let mixArray = ['yes', true, 2, 'or no', false];
console.log(numArray);
console.log(stringArray);
console.log(mixArray);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let emptyArray = []
emptyArray[0] = 'In';
emptyArray[1] = 'This';
emptyArray[2] = 'Array';
emptyArray[3] = 'Some';
emptyArray[4] = '\u{1F4A9}';
console.log(emptyArray)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>something here</div>')
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>something here, number:${i}</div>`)
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i1 = 0;
while (i1 < 20) {
    document.write('<div>content</div>');
    i1++;
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i2 = 0;
while (i2 < 20) {
    document.write(`<div>content number:${i2}</div>`);
    i2++;
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < numArray1.length; i++) {
    console.log(numArray1[i])
}


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let stringArray1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'k', 'l'];
for (let i = 0; i < stringArray1.length; i++) {
    console.log(stringArray1[i])
}


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

mixArray1 = ['a', 'b', 3, 'd', 2, false, 'g', 'j', NaN, 8];
for (let i = 0; i < mixArray1.length; i++) {
    console.log(mixArray1[i])
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

bolArray = ['a', 'b', 3, 'd', 2, false, 'g', 'j', NaN, 8];
for (let i = 0; i < bolArray.length; i++) {
    if (typeof bolArray[i] === 'boolean') {
        console.log(bolArray[i])
    }
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

numArray2 = ['a', 'b', 3, 'd', 2, false, 'g', 'j', NaN, 8];
for (let i = 0; i < numArray2.length; i++) {
    if (typeof numArray2[i] === 'number') {
        console.log(numArray2[i])
    }
}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

stringArray2 = ['a', 'b', 3, 'd', 2, false, 'g', 'j', NaN, 8];
for (let i = 0; i < stringArray2.length; i++) {
    if (typeof stringArray2[i] === 'string') {
        console.log(stringArray2[i])
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let emptyArray1 = []
emptyArray1[0] = 'And';
emptyArray1[1] = 'In';
emptyArray1[2] = 'This';
emptyArray1[3] = 'Array';
emptyArray1[4] = 'We';
emptyArray1[5] = 'Have';
emptyArray1[6] = 'Some';
emptyArray1[7] = 'new';
emptyArray1[8] = 'thing';
emptyArray1[9] = '\u{26C7}';
for (let i = 0; i < emptyArray1.length; i++) {
    console.log(emptyArray1[i]);
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log('number' + ' ' + i)
    document.write('number' + ' ' + i)
}


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log('number' + ' ' + i)
    document.write('number' + ' ' + i)
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log('number1' + ' ' + i)
    document.write('number1' + ' ' + i)
}


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('number2' + ' ' + i)
        document.write('number2' + ' ' + i)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 > 0) {
        console.log('number3' + ' ' + i)
        document.write('number3' + ' ' + i)
    }
}

