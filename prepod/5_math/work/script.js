// 3) Написать программу, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.


// const num = 1357;

// const numToStr = String(num);

// let sum = 0;

// for (let i = 0; i < numToStr.length; i++) {
//     sum += Number(numToStr[i]);
//     // sum += +numToStr[i];
// }

// console.log(sum);


// 7) Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'

// const str = 'aaa@bbb@ccc';

// const result = str.replaceAll('@', '!');

// console.log(result);



// 11) Запросить у пользователя ввести строку, посчитать сколько в этой строке заглавных букв.


// let str = prompt('Enter string');

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         count++;
//     }
// }

// console.log(count);



// 13) Запросить число с дробной частью, проверить правильность ввода (наличие символа ".")

// let str = prompt('Введите число с дробной частью');

// let result = str.includes('.');

// console.log(result);


// 8) Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.


// const str = 'я учу javascript!';

// console.log(str.length);




// 5) Написать программу, которая переводит в верхний регистр первый символ переданной строки

// const str = 'javascript';

// const result = str[0].toUpperCase() + str.slice(1);
// const result2 = str.replace(str[0], str[0].toUpperCase())

// console.log(result2);



// 12) Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.

// const correctAnswer = 6;

// for (; ;) {
//     let userAnswer = +prompt('Сколько будет 2 + 2 * 2 ?');
//     if (userAnswer === correctAnswer) {
//         console.log('Вы молодец!');
//         break;
//     }
// }



// const num = 1357;

// const result = String(num);
// const result2 = num.toString();

// console.log(result);
// console.log(result2);

// let a = 10;
// let b = 3;

// const result = a / b;

// console.log(result);
// console.log('type', typeof result);

// console.log(result.toFixed(3)); // => string

// console.log(+(0.1 + 0.2).toFixed(2) === +0.3.toFixed(2))


// let str = '13.24test43534';


// console.log(Number(str));
// console.log(+str);
// console.log(parseInt(str)); // => целое число
// console.log(parseFloat(str)); // => число с дробной частью


// String()
// .toString()
// 2 + ''
// .toFixed()



// console.log(Number.isInteger(153)) // => true
// console.log(Number.isInteger(153.4)) // => false
// console.log(Number.isInteger('153')) // => false



// console.log(Number.isFinite(153)) // => true
// console.log(Number.isFinite(153.4)) // => true
// console.log(Number.isFinite('153')) // => false
// console.log(isFinite('153')) // => true



// let test = '123';

// isFinite(test) ? console.log('OK') : console.log('NOT OK');

// Number.isFinite(test) ? console.log('OK') : console.log('NOT OK');


// const PI = Math.PI;

// console.log(PI)


// const num = 2;

// let stepen = +prompt('Введите в какую степень возвести число');

// console.log(Math.ceil(num)) // => в большую сторону, 5
// console.log(Math.floor(num)) // => в меньшую сторону, 4
// console.log(Math.round(num)) // => 5, округляет по правилам математики
// console.log(Math.trunc(num)) // => 4, убирает дробную часть



// возведение в степень, аналог **
// console.log(Math.pow(num, 3)) // => 2 аргумента, 1ый - что возводим, второй - степень


// console.log(Math.sqrt(16)) // => корень из числа



// console.log(Math.floor(Math.sqrt(Math.pow(2,3))))



// console.log(Math.sign(2)) // => полож. число => 1
// console.log(Math.sign(-2)) // => отриц. число => -1
// console.log(Math.sign(0)) // => 0
// console.log(Math.sign(-0)) // => -0
// console.log(Math.sign(' ')) // => если строка  => 0
// console.log(Math.sign('123')) // => неявное преобразование к числу => 1
// console.log(Math.sign('вапвап')) // => неявное преобразование к числу => NaN



// console.log(Math.max(1, 2, 4, 5, 7, 44, 11, 89)); // => 89
// console.log(Math.min(1, 2, 4, 5, 7, 44, 11, 89, -5)); // => -5


// let min = 10;
// let max = 50;

// console.log(Math.floor(Math.random() * (max - min + 1) + min));



const randomColor = Math.floor(Math.random() * 16777215).toString(16);

backgr.style.backgroundColor = `#${randomColor}`;

// console.log('#' + randomColor);


console.log(Math.random().toString(36).slice(2,8))


let min = +prompt('Enter min value')
let max = +prompt('Enter max value')


console.log(Math.floor(Math.random() * (max - min + 1) + min));