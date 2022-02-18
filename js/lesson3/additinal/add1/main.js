// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let arr1 = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        arr1.push(i)
    }
}
console.log(arr1)


//     b. заповнити його 50 непарними числами за допомоги циклу.

arr2 = []
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        arr2.push(i)
    }
}
console.log(arr2);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3.push(Math.round(Math.random() * 100))
}
console.log(arr3);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732
// (Google: Generate random number JS)

arr4 = [];
for (let i = 0; i < 20; i++) {
    arr4.push(Math.round(Math.random() * (732 - 8) + 8))
}
console.log(arr4);


// 2. Вивести за допомогою console.log кожен третій елемен

arr5 = [];
for (let i = 0; i < 20; i++) {
    arr5.push(Math.round(Math.random() * 100))
}
console.log(arr5)

for (let i = 0; i < arr5.length; i += 3) {
    console.log(arr5[i])
}


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < arr5.length; i += 3) {
    if (arr5[i] % 2 === 0) {
        console.log(arr5[i])
    }
}


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо
// цей елемент є парним та записати їх в новий масив

let arr6 = []

for (let i = 0; i < arr5.length; i += 3) {
    if (arr5[i] % 2 === 0) {
        console.log(arr5[i])
        arr6.push(arr5[i])
    }
}
console.log(arr6);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 === 0) {
        console.log(arr5[i - 1])
    }
}


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.

let numArr = [100, 250, 50, 168, 120, 345, 188];
let count = 0;

for (let i = 0; i < numArr.length; i++) {
    count = count + numArr[i]
}
console.log(count / numArr.length)


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5
// та перемістити їх в інший масив.

let arr7 = []
let arr8 = []

for (let i = 0; i < 20; i++) {
    arr7.push(Math.round(Math.random() * 10))
}
for (let j = 0; j < arr7.length; j++) {
    arr8.push(arr7[j] * 5)
}
console.log(arr7)
console.log(arr8)


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.

let arrRand = [true, 10, false, 20, 'false', 'just string']
let arr9 = []
for (let i = 0; i < arrRand.length; i++) {
    if (typeof arrRand[i] === 'number') {
        arr9.push(arrRand[i])
    }
}

console.log(arrRand)
console.log(arr9)


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             }
//         ]
//

let usersAndCitiesWithId = []

for (let usersWithIdElement of usersWithId) {
    for (let citiesWithIdElement of citiesWithId) {
        if (usersWithIdElement.id === citiesWithIdElement.user_id) {
            usersWithIdElement.adress = citiesWithIdElement
            usersAndCitiesWithId.push(usersWithIdElement)
        }
    }
}
console.log(usersAndCitiesWithId)


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
// значення яких є парними.

let arr10num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < arr10num.length; i++) {
    if (arr10num[i] % 2 === 0) {
        console.log(arr10num[i])
    }
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr10numCopi = []
for (let i = 0; i < arr10num.length; i++) {
    arr10numCopi.push(arr10num[i])
}
console.log(arr10numCopi)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let abc1 = ['a', 'b', 'c'];
let strAbc1 = '';
for (let i = 0; i < abc1.length; i++) {
    strAbc1 = strAbc1 + abc1[i]
}
console.log(strAbc1);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let abc2 = ['a', 'b', 'c'];
let strAbc2 = '';
let i = 0;
while (i < abc2.length) {
    strAbc2 = strAbc2 + abc2[i]
    i++
}
console.log(strAbc2);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let abc3 = ['a', 'b', 'c'];
let strAbc3 = '';

for (let abc3Element of abc3) {
    strAbc3 = strAbc3 + abc3Element
}
console.log(strAbc3)