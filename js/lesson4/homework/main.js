// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaCalc(a, b) {
    let S = a * b;
    return S;
}

console.log(areaCalc(6, 12))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(r) {
    let circleS = (r ** 2) * 3.14;
    return circleS;
}

console.log(circleArea(9))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cilinderArea(h, r) {
    let cilinderS = 2 * r * h * 3.14;
    return cilinderS;
}

console.log(cilinderArea(9, 12))


// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 2, 3]

function showArrElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

showArrElements(arr)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function creatorP(p) {
    document.write(`<p> ${p} </p>`);
}

creatorP('some text')


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

function creatorUl(liText) {
    document.write(
        `<ul>
        <li>${liText}</li>
        <li>${liText}</li>
        <li>${liText}</li>
    </ul>`
    );
}

creatorUl('li content')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function creatorUlAmount(liText, amount) {
    document.write(`<ul>`);
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${liText}</li>`)
    }
    document.write(`</ul>`);
}

creatorUlAmount('content', 4)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = ['what', 'about','piece','of','\u{1F355}',true,'or', 2,'?']
function showArray(arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`);
}

showArray(array)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age
// , та виводить їх в документ. Для кожного об'єкту окремий блок.

let cards = ['id','name','age']
function cardIn(card) {
    document.write(`<ul>`);
    for (let i = 0; i < card.length; i++) {
        document.write(`<li>${card[i]}</li>`)
    }
    document.write(`</ul>`);
}

cardIn(cards)

// or

function cardIn1(id,name,age) {
    document.write(`<h3>Id - ${id}</h3>`);
    document.write(`<h3>Name - ${name}</h3>`);
    document.write(`<h3>Age - ${age}</h3>`);
}

cardIn1('007','James','never-dying',)

