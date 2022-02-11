// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


let minThreeNum = (a, b, c) => {
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

let maxThreeNum = (a, b, c) => {
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

let numArray = [3, 6, 9, 12, 15, 18, 21, 24]

let maxNumArray = (array) => {
    let maxNum = array[0];
    for (let element of array) {
        if (element > maxNum) {
            maxNum = element
        }
    }
    return maxNum
}

console.log(maxNumArray(numArray))


// - створити функцію яка повертає найменьше число з масиву

let numArray1 = [3, 6, 9, 12, 15, 18, 21, 24]

let minNumArray = (array) => {
    let minNum = array[0];
    for (let element of array) {
        if (element < minNum) {
            minNum = element
        }
    }
    return minNum
}

console.log(minNumArray(numArray1))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let numArray2 = [3, 6, 9, 12, 15, 18, 21, 24]

let sumOfNumArray = (array) => {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum
}

console.log(sumOfNumArray(numArray2))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let numArray3 = [3, 6, 9, 12, 15, 18, 21, 24]

let avarageOfNumArray = (array) => {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum / array.length;
}

console.log(avarageOfNumArray(numArray3))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let numArray4 = [3, 6, 9, 12, 15, 18, 21, 24]

let minMaxOfAnyNum = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let element of arr) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log(max);
    return min;
}

console.log(minMaxOfAnyNum(numArray4))


// - створити функцію яка заповнює масив рандомними числами


let randomNums = (length) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array
};

console.log(randomNums(9))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomNumsLimit = (length, limit) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * limit));
    }
    return array
};

console.log(randomNumsLimit(12, 99))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverse = (arr) => {
    let newArr = [];
    for (let i = newArr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = newArr[i];
    }

    return newArr;
}
