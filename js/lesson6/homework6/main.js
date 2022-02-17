// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hello = 'hello world';
let lorem = 'lorem ipsum';
let JsCool = 'javascript is cool';

console.log(hello.length);
console.log(lorem.length);
console.log(JsCool.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let helloUp = hello.toUpperCase()
let loremUp = lorem.toUpperCase()
let JsCoolUp = JsCool.toUpperCase()

console.log(helloUp);
console.log(loremUp);
console.log(JsCoolUp);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let helloLow = helloUp.toLowerCase()
let loremLow = loremUp.toLowerCase()
let JsCoolLow = JsCoolUp.toLowerCase()

console.log(helloLow);
console.log(loremLow);
console.log(JsCoolLow);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyStr = ' dirty string   ';
let clearStr = dirtyStr.trim();
console.log(clearStr);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

stringToarray = (str) => str.split(' ');

let string = 'Каждый охотник желает знать';
let arr = stringToarray(string);
console.log(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
//     що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

stringToarraySeven = (str) => str.substr(0, 7);

let string1 = 'Каждый охотник желает знать';
let arr1 = stringToarraySeven(string1);
console.log(arr1);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє
// тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insertDash = (str) => {
    let ins = str.toUpperCase().replaceAll(' ', '-')
    return ins
}

let string2 = "HTML JavaScript PHP";
console.log(insertDash(string2));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.

let firstLetterUpp = (str) => str[0].toUpperCase() + str.slice(1);

let string3 = 'string';
console.log(firstLetterUpp(string3))


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово
// починається з великої літери.

let capitalize = (str) => str.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

let string4 = 'string with something';
console.log(capitalize(string4))
