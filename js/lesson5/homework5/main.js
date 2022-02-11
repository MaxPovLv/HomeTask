// - створити функцію яка обчислює та повертає площу прямокутника висотою

let rectSquare = (h, w) => h * w;

console.log(rectSquare(3, 6))


// - створити функцію яка обчислює та повертає площу кола

let circleSquare = (r) => (r ** 2) * 3.14;

console.log(circleSquare(3))


// - створити функцію яка обчислює та повертає площу циліндру

let cilinderSquare = (r, h) => 2 * r * h * 3.14;

console.log(cilinderSquare(6, 9))


// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [3, 6, 9]

let showArrElements = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

showArrElements(arr)


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let creatorP = (p) => {
    document.write(`<p> ${p} </p>`);
}

creatorP('text')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let creatorUl = (liText) => {
    document.write(
        `<ul>
        <li>${liText}</li>
        <li>${liText}</li>
        <li>${liText}</li>
    </ul>`
    );
}

creatorUl('li content')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let creatorUlAmount = (liText, amount) => {
    document.write(`<ul>`)
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${liText}</li>`)
    }
    document.write(`</ul>`)
}

creatorUlAmount('some text', 6)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = ['keep', 'your', 'mind', 'in', 'Balance', '\u{262F}', true]

let showArray = (arr) => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`);
}

showArray(array)


// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let cards = ['id', 'name', 'age']

let cardIn = (card) => {
    document.write(`<ul>`);
    for (let i = 0; i < card.length; i++) {
        document.write(`<li>${card[i]}</li>`)
    }
    document.write(`</ul>`);
}

cardIn(cards)

