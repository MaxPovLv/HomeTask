// - Дано натуральное число n. Выведите все числа от 1 до n.

let fromeOneToN = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

fromeOneToN(6)

//
// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания,если A > B, или в порядке убывания в противном случае.

let fromeNumAtoNumB = (a, b) => {
    if (a <= b) {
        for (let i = a; i < b; i++) {
            console.log(i);
        }
    } else if (a >= b) {
        for (let i = a; i > b; i--) {
            console.log(i);
        }
    }
}

fromeNumAtoNumB(55, 65)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт
//  який знаходиться в індексі "i" на "i+1"
let numArray = [3, 6, 9, 12, 15, 18]

let arrObjPlaceChanger = (array, ind) => {
    let targNum = array[ind];
    array[ind] = array[ind + 1];
    array[ind + 1] = targNum;
    return array
}
console.log(arrObjPlaceChanger(numArray, 0))

// or

let arrObjPlaceChanger1 = (a, i) => {
    [[a[i], a[i + 1]] = [a[i + 1], a[i]]];
    return a;
}
console.log(arrObjPlaceChanger1(numArray, 1));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
//     Зберігаючи при цьому порядок не нульових значень.

let numArray1 = [0, 3, 6, 0, 9, 12, 0, 15, 18]

let zeroMoveToEnd = (arr) => {
    for (let i = 0, j = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
        }
    }
    return arr;
}

console.log(zeroMoveToEnd(numArray1))