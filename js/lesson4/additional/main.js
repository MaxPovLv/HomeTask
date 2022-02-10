// - створити функцію, яка якщо приймає один аргумент,
// просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function showPlusArgument (a,b){
if (a && !b){
    console.log(a)
}
else {
    console.log (a+b)}
}

showPlusArgument(1,2)


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

let numArray = [3,6,9]
let numArray1 = [10,20,30]

function sumTwoArrays(array1, array2) {
    let sum = [];
    for (let i = 0; i < array1.length; i++) {
        sum.push(array1[i]+array2[i])
    }
    return  sum
}

console.log(sumTwoArrays(numArray,numArray1))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

let someArray = [{name:'Vasya',surname:'Pupkin'},{profession : 'papin brodyaga, mamin simpotyaga'}]

function keysArrayObj(array) {
    let keys = [];
    for (let object of array) {
        for (let key in object){
            keys.push(key)}
    };
    console.log(keys)
}

keysArrayObj(someArray)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

function defArrayObj(array) {
    for (let object of array) {
        console.log(Object.values(object))
    };
}

defArrayObj(someArray)