// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('enter minute');
// if (time > '0' && time <= '15') {
//     console.log('first quarter')
// } else if (time > '15' && time <= '30') {
//     console.log('second quarter')
// } else if (time > '30' && time <= '45') {
//     console.log('third quarter')
// } else if (time > '45' && time <= '60') {
//     console.log('fourth quarter')
// } else {
//     console.log('eror')
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = prompt('enter day');
// if (!day) {
//     console.log('NaN')
// } else if (day <= '0') {
//     console.log('only 1 - 31 values')
// } else if (day < '11') {
//     console.log('first decade')
// } else if (day < '21') {
//     console.log('second decade')
// } else if (day < '32') {
//     console.log('third decade')
// } else {
//     console.log('only 1 - 31 values')
// }


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно',
//     інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = prompt('enter something');
// if (test === 'true') {
//     console.log('Неправильнo')
// } else {
//     console.log('Вірно')
// }
//
// let test = prompt('enter something');
// test === 'true' ? console.log('Неправильнo') : console.log('Вірно');


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let someNumber = prompt('enter number');
// if (someNumber !== '0') {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
//     дня тижня і на екрані відображається інфа що заплановано на цей день.

// let test = prompt('day');
// switch (test) {
//     case '1':
//         console.log('Monday Tasks')
//         break;
//     case '2':
//         console.log('Tuesday Tasks')
//         break;
//     case '3':
//         console.log('WednesdayTasks')
//         break;
//     case '4':
//         console.log('Thursday Tasks')
//         break;
//     case '5':
//         console.log('Friday Tasks')
//         break;
//     case '6':
//         console.log('Saturday Tasks')
//         break;
//     case '7':
//         console.log('Sunday Tasks')
//         break;
// }


// - Потрібно визначити Високосний рік чи ні.
//     Високосні роки діляться націло на 4.

// let year = 2020;
// let x = year % 4
// if (x === 0) {
//     console.log('Yes')
// } else {
//     console.log('No')
// }


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let question = prompt('Яка «офіційна» назва JavaScript?');
//  if (question ==='ECMAScript') {
//     console.log('Правильно!')
// }  else {
//     console.log('Не знаєте? ECMAScript!')
// }
