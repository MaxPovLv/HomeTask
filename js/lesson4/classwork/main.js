// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minThreeNum(a, b, c) {
    if (a <= b && a <= c) {
        console.log(a)
    } else if (b <= a && b <= c) {
        console.log(b)
    } else if (c <= b && c <= a) {
        console.log(c)
    }

}

minThreeNum(3, 6, 9);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxThreeNum(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a)
    } else if (b >= a && b >= c) {
        console.log(b)
    } else if (c >= b && c >= a) {
        console.log(c)
    }

}

maxThreeNum(3, 6, 9);


// - створити функцію яка повертає найбільше число з масиву

let numArray = [77, 4, 66, 5577, 786, 56, 886, 9999, 12]

function maxOfNumArray(array) {
    let maxNum = 0;
    for (let element of array) {
        if (element > maxNum) {
            maxNum = element
        }
    }
    return maxNum
}

console.log(maxOfNumArray(numArray))

// - створити функцію яка повертає найменьше число з масиву

let numArray1 = [77, -4, 66, 5577, 786, 56, 886, 9999, 12]

function minOfNumArray(array) {
    let minNum = 0;
    for (let element of array) {
        if (element < minNum) {
            minNum = element
        }
    }
    return minNum
}

console.log(minOfNumArray(numArray1))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let numArray2 = [77, -4, 66, 5577, 786, 56, 886, 9999, 12]

function sumOfNumArray(array) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum
}

console.log(sumOfNumArray(numArray2))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let numArray3 = [77, -4, 66, 5577, 786, 56, 886, 9999, 12]

function avarageOfNumArray(array) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum / array.length;
}

console.log(avarageOfNumArray(numArray3))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let numArray4 = [77, -4, 66, 5577, 786, 56, 886, 9999, 12]

function minMaxOfAnyNum() {
    let min = arguments[0];
    let max = arguments[0];
    for (let element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log("max ", max);
    return min;
}

console.log(minMaxOfAnyNum(numArray4))


// - створити функцію яка заповнює масив рандомними числами


function randomNums (length) {
    let array = [];
    for (let i = 0; i < length; i++){
        array.push(Math.floor(Math.random()*100));
    }
    return array
};

console.log(randomNums(9))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomNumsLimit (length,limit) {
    let array = [];
    for (let i = 0; i < length; i++){
        array.push(Math.floor(Math.random()*limit));
    }
    return array
};

console.log(randomNumsLimit(12,99))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

 function reverse(arr) {
    let newArr = [];
    for (let i = newArr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = newArr[i];
    }

    return newArr;
}

