// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let contId = document.getElementById('content')
console.log(contId)

// -- отримує текст з блоку з id "rules"

let rulesId = document.getElementById('rules')
console.log(rulesId)


// -- замініть текст параграфа з id 'content' на будь-який інший

contId.innerHTML = 'Lorem ipsum dolor.';


// -- замініть текст параграфа з id 'rules' на будь-який інший

rulesId.innerHTML = 'Lorem ipsum dolor.123';


// -- змініть кожному елементу колір фону на червоний

let childBgColor = document.body.children;
for (let elem of childBgColor) {
    elem.style.backgroundColor = 'red';
}


// -- змініть кожному елементу колір тексту на синій

let childTxtColor = document.body.children;
for (let elem of childTxtColor) {
    elem.style.color = 'blue';
}


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesIdList = document.getElementById('rules');
console.log(rulesIdList.classList)


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let rulesTxtColor = document.getElementsByClassName('fc_rules');
for (let elem of rulesTxtColor) {
    elem.style.color = '#b30000';
}
