

const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike'];


// 1) Переставить 'Janett', 'Mike' в начало массива

// const copiedArr = arr.slice(arr.indexOf('Janett'));
// arr.splice(0, 0, copiedArr);
// arr.pop();
// arr.pop();

// console.log(arr.flat());


// 2) Заменить 'Dan', 'David' на 'Bob', 'Oliver'

// arr.splice(arr.indexOf('Dan'), 2, 'Bob', 'Oliver');
// console.log(arr);


// 3) Перевернуть массив и заменить первые 3 элемента на 'Robert'

// arr.reverse()
// arr.shift()
// arr.shift()
// arr.shift()
// arr.unshift('Robert')
// arr.unshift('Robert')
// arr.unshift('Robert')

// arr.reverse().splice(0, 3, 'Robert', 'Robert', 'Robert')

// arr.reverse().fill('Robert', 0, 3)


// console.log(arr)



// 4) Дан второй массив ['Bob', 'Oliver', 'Robert', 'Daniel']. Скопировать все эелемнты начиная с 'Oliver' и вставить их в конец первого массива

const arr2 = ['Bob', 'Oliver', 'Robert', 'Daniel'];

// const slicedArr = arr2.slice(arr2.indexOf('Oliver'));

// const resultArr = arr.concat(slicedArr);

// console.log(resultArr);


// 5) Из второго массива скопировать 'Robert' и вставить меджу 'David' и 'Lambert'

// const indexRobert = arr2.indexOf('Robert');
// const indexLambert = arr.indexOf('Lambert');

// const copiedElement = arr2.slice(indexRobert, indexRobert + 1);

// arr.splice(indexLambert, 0, copiedElement.join());

// console.log(arr);






// function declaration - простое объявление функции в коде



// function greeting (text) {
//     // тело функции
//     // блок кода, который будет выполняться при вызове функции
//     console.log(`${text} from function`)
// }

// greeting('Hi');
// greeting('Hello');
// greeting('Good morning');
// greeting('Здарова');
// greeting('Приветики');


// function sum(a, b) {
//     const result = a + b;
//     return result;
//     console.log('После return'); // => не выполнится
// }

// const resultFunc = sum(2, 6);
// const resultFunc2 = sum(6, 10);
// const resultFunc3 = sum(9, 800);
// const resultFunc4 = sum(2, 660);

// console.log(resultFunc);




// Function Expression  - функциональное выражение

// func2();


// function func2 () {
//     console.log('hello from func declaration')
// }



// анонимные
// const func = function () {
//     console.log('Hello from func expression')
// }

// func();



// let userName = 'Евгений';
// let userSurname = 'Петрович';

// function getFullName(firstName, secondName) {
//     console.log(`Добро пожаловать, ${firstName} ${secondName}`);
// }

// getFullName(userName, userSurname);

// console.log(firstName) // => будет ошибка, параметры функции доступны только внутри функции


// const func = function () {
//     console.log('Hello from func expression')
// }

// console.log(func) // => function
// console.dir(func)


// Функция - объект первого класса
// функции можно присваивать переменным
// функции можно передавать как аргументы другим функциям
// функции можно возвращать из других функций


// let a = 5;
// let b = 10;

// function sumOfThreeNumbers(a, b, c) {

//     if (arguments.length === 3) {
//         console.log(a + b + c);
//     } else {
//         console.log('Не хватает аргументов');
//     }

//     // псевдо массив, у него нет методов массива, есть индексы и длина
//     // на этом всё сходство с массиов заканчивается
//     console.log(arguments);

//     // устаревший метод значений по умолчанию для параметров функции
//     // let aDefault = a || 0; 
//     // let bDefault = b || 0;

//     // внешнюю переменную a - не изменяет, а изменяет внутреннюю
//     // a += 10;

// }


// sumOfThreeNumbers(a, b, 10);

// console.log(a);


// Arrow function - стрелочная функция


// const func1 = (a = 2, b = 3) => {
//     console.log('Hello from arrow func', a)
// };

// func1(10);



// 1) Написать функцию-валидатор числа, которая принимает сроку и возвращает true, если эта строка может быть числом, false - если не может


// const validationNumber = (str) => {
//     const isNumber = Number(str);
//     if (!!isNumber) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const is359true = validationNumber('359');

// console.log(is359true);



// 2) Написать функцию, которая вычисляет среднее арифметическое за год (нужно передавать оценки за 4 четверти)


// function gerAverage (num1, num2, num3, num4) {
//     let result = (num1 + num2 + num3 + num4) / 4;
//     console.log(result);
//     return result;
// }


// gerAverage(6, 8, 9, 6);



// 3) Написать функцию, которая вычисляет процент побед. Функция принимает количество побед и поражений, и возвращает процент


// const getPercent = function (wins, losses) {
//     const allGames = wins + losses;
//     const winsPercent = (wins / allGames) * 100;
//     const lossesPercent = (losses / allGames) * 100;
//     const message = `Процент побед: ${winsPercent.toFixed(2)}% и процент поражений ${lossesPercent.toFixed(2)}%`;
//     console.log(message);
//     return message;
// };


// getPercent(16, 9);
// getPercent(10, 3);




// 4) 


// const getSumOfNumbers = (number, type = 'odd') => {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         const isEven = i % 2 === 0; // четное
//         const isOdd = !isEven; // нечетное
//         if (!type) {
//             sum += i;
//         } else if (isEven && type === 'even') { // четные
//             sum += i;
//         } else if (isOdd && type === 'odd') { // нечетные
//             sum += i;
//         }
//     }
//     return sum;
// };

// const result = getSumOfNumbers(10, 'odd');

// console.log(result)



// 1) Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию от нескольких чисел от 2 до 9.


// function getTable(number) {
//     for (let i = 1; i < 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
//     console.log('\n')
// }


// getTable(2);
// getTable(3);
// getTable(5);



// 2) Написать функцию для генерации случайного массива заданной длины. Функция принимает длину массива. Функция возвращает получившийся массив.


// function getRandomArray(length) {
//     const arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * 100));
//     }
//     console.log(arr);
//     return arr;
// }

// getRandomArray(10);
// getRandomArray(15);
// getRandomArray(8);





// 3) Написать функцию, которая возводит переданное число в указанную степень. Функция возвращает результат.


// function getPow(num, pow) {
//     console.log(Math.pow(num, pow));
//     return Math.pow(num, pow);
// }

// getPow(2, 2);
// getPow(2, 3);



// 4) Сколько аргументов у функции (вернуть сообщение "Количество аргументов: число"): 
// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4


// function getArgumentsCount() {
//     console.log(`Количество аргументов: ${arguments.length}`);
//     return `Количество аргументов: ${arguments.length}`;
// }


// getArgumentsCount(1, 2, 3);
// getArgumentsCount(1, 2, 3, 10);



// 5) Если не можешь уснуть, считай овец...

// Задача:
// Учитывая неотрицательное целое число, например 3, верните строку с бормотанием: «1 овца... 2 овцы... 3 овцы...». Ввод всегда будет действительным, т. е. без отрицательных целых чисел (проверка только на 0)


// function getCountSheeps(number) {
//     if (number === 0) {
//         return '';
//     }
//     const arr = [];
//     for (let i = 1; i <= number; i++) {
//         arr.push(`${i} sheep...`);
//     }
//     console.log(arr.join(''));
//     return arr.join('');
// }


// getCountSheeps(1);




// 6) Сокращение имени из двух слов
// Напишите функцию для преобразования имени в инициалы.

// На выходе должны быть две заглавные буквы с точкой, разделяющей их.

// Это должно выглядеть так:

// Sam Harris => S.H

// patrick feeney => P.F


// function getAbbrName(name) {
//     const arr = name.split(' ');
//     console.log(`${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`);
//     return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
// }

// getAbbrName('Валентин Игоревич');
// getAbbrName('patrick feeney');

// let a = 7;
// let b = 5;

// const users = ['Vanya', 'Dima', 'Fedor'];

// function changeName(users) {
//     users[0] = 'Eugen';
// }

// changeName(users);
// console.log(users);

// function sum(a, b) {
//     a *= 2;
//     console.log(a + b);
//     return a + b;
// }

// sum(a, b)

// console.log(a)







// ------------------
// scope - область видимости
// ------------------





// let a = 2;

// {
//     let a = 15;
//     const b = 10;
//     // console.log(a);
// }

// console.log(b);

// function test () {
//     const a = 20;
//     console.log(a)
// }

// console.log(a)



// var => не имеет блочной области видимости, функциональная - есть

// var a = 2;
// var a = 4;


// if (true) {
//     var a = 2;
// }

// for (let i = 0; i <=1; i++) {
//     var a = 10
// }


// console.log(a);

// let a = 15;
// function test() {
//     let a = 10;
//     console.log(a);
// }

// test()
// console.log(a)




// function run() {
//     var message = 'Беги';
//     console.log(message);
// }


// run();
// console.log(message)


// function greeting(text) {
//     if (true) {
//         if (true) {
//             console.log(a)
//         }
//     }
//     if (true) {

//     }
// }

// if (true) {
//     let a = 2
//     console.log(a)
// }


// greeting('Hello');
// greeting('Привет');function greeting(text) {




// greeting()



// function greeting() {

//     // console.log(text)
//     console.log(a)

//     var a = 2;
// }


// var func = () => {
//     function func2 () {
//         console.log('func2')
//     }
// }


// function func1 () {
//     let a = 2;
//     return function () {
//         console.log(a)
//     }
// }

// const useFunc = func1();

// console.log(useFunc)

// useFunc();



// function sayHello() {
//     let count = 0;
//     return function () {
//         console.log(count += 1);
//     };
// }


// const davidSayHello = sayHello();


// davidSayHello();
// davidSayHello();







// 7) Написать функцию, которая при каждом вызове возвращает попеременно true => false => true ...



// const switcher = () => {
//     let status = true;
//     function changeStatus() {
//         console.log(status);
//         status = !status;
//         return status;
//     }
//     return changeStatus;
// };


// const useSwitch = switcher();

// console.dir(useSwitch);


// useSwitch();
// useSwitch();
// useSwitch();
// useSwitch();
// useSwitch();



// const sayHi = () => {
//     let greet = 'Hi';
//     function say(userName) {
//         console.log(`${greet}, ${userName}`);
//     }
//     return say;
// };


// const useSayHi = sayHi();


// console.dir(useSayHi);


// useSayHi('John');
// useSayHi('Martin');




// function sum(a, b) {
//     console.log(a + b);
//     return a + b;
// }

// sum(2, 3)




// function sum (a) {
//     sum()
// }



// function factorial(x = 5) {
//     if (x < 0) return 0;
//     if (x === 0) return 1;
//     return x * factorial(x - 1);
// }


// console.log(factorial(4))





// 1) Используя рекурсию, написать функцию, которая будет суммировать числа от 1 до n


// function sum(num) {

//     if (num === 0) {
//         return 0;
//     } else {
//         return num + sum(num - 1);
//     }

// }

// console.log(sum(7));



// 2) Реализуйте функцию sum, используя цикл вместо рекурсии


// function sum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sum(7))



// 3) Используя рекурсию, написать функцию, которая считает сумму массива чисел


// function sumArr(arr, sum = 0) {
//     if (arr.length) {
//         return sumArr(arr, sum + arr.pop());
//     } else {
//         return sum;
//     }
// }

// console.log(sumArr([1, 2, 3, 4, 5]))



// const arr3 = [1, 2, 3, 4, 5];

// console.log(arr3);
// console.log([...arr3]);


// function func (a, ...args) {

//     console.log(args)

// }

// func(1,2,3,4,6,7,8)



// let arr4 = ['will', 'love'];
// let data = ['You', ...arr4, 'spread', 'operator'];

// let res = [...arr4, ...data]



// let word = 'Javascript';


// console.log(word.split(''))
// console.log([...word]);




const profile = ["John", "Doe", "code.com"];


// без деструктуризации
// const firstName = profile[0];
// const lastName = profile[1];
// const website = profile[2];




// const [firstName, lastName, website] = profile;

// console.log(firstName);
// console.log(lastName);
// console.log(website);





// 4) Используя оператор ... найти максимальное число в массиве


// const arr5 = [1, 2, 3, 34, 9, 6, 10, 8, 1, 16];

// function getMax(arr) {
//     return Math.max(...arr);
// }

// console.log(getMax(arr5));


// 5) Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива


// const arr5 = [1, 2, 3, 34, 9, 6, 10, 8, 1, 16];

// function getRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }


// console.log(getRandomElement(arr5));



let width = 300;
let height = 400;
const landscape = true;

if (landscape) {
	[width, height] = [height, width]; // меняем значения переменных
	console.log(`${width} x ${height}`); // 400 x 300
}


