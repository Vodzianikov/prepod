// 4) Запросить 2 строки и сравнивнить их длину. Вывести 1, если в первой строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.

// let str1 = prompt('Введите первую строку');
// let str2 = prompt('Введите вторую строку');

// if (str1.length > str2.length) {
//     console.log('1');
// } else if (str1.length < str2.length) {
//     console.log('-1');
// } else {
//     console.log('0');
// }

// 6) Запросите строку из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

// let str = prompt('Введите число из 3 символов');

// let sum = 0;

// for (let i = 0; i < str.length; i++) {
//     sum += +str[i];
// }

// console.log(sum);

// 9) Дана строка 'Я-учу-javascript!'. Замените все дефисы на ' '

// let str = 'Я-учу-javascript!';

// console.log(str.replaceAll('-', ' '));



// let a = [];
// let b = [2, 4, 5, 6];


// array

// создание массива с помощью литерала
// const arr = [1, 2, "3", 4, true, ["2", 50], "Петя"];

// const arr2 = new Array();

// const arr3 = Array.of('one', 'two');

// const arr4 = Array.from('Hello');

// arr.length = 50;

// console.log(arr);
// console.log(typeof arr);


// ссылочный тип данных
// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// const arr3 = arr1;

// arr3[3] = 4;

// console.log(arr1 === arr2);
// console.log(arr3 === arr1);

// console.log(arr1);
// console.log(arr3);




// КОПИРОВАНИЕ МАССИВА
// ----------------------------------
// const arrCopy = [];
// for (let i = 0; i < arr1.length; i++) {
//     arrCopy[i] = arr1[i];
// }

// const newarr = movies.slice()

// const newarr2 = movies.concat()
// ----------------------------------

// console.log(arrCopy === arr1);


// const movies = ['Гарри Поттер', 'Властелин колец', 'Железный человек', 'Форсаж', 'Человек паук'];


// for (let i = 0; i < movies.length; i++) {
//     // console.log(movies[i]);
// }

// delete movies[1];

// console.log(movies);

// проверка на массив
// console.log(Array.isArray(movies))

// console.log(typeof movies);
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));



// .split() - метод СТРОКИ, возвращает массив!
// const str = 'я учу JavaScript';

// let result = str.split(' ').reverse().join(' ');

// console.log(result);



// .push() - возвращает новую длину массива, мутирует массив, добавляет элементы в конец массива
// let arrPush = movies.push('Форсаж', 'Человек паук');
// console.log(arrPush);


// .pop() - возвращает удаленный элемент, удаляет элемент в конце массива, мутирует исходный массив

// let arrPop = movies.pop();
// console.log(arrPop);



// .shift() - возвращает удаленный элемент, удаляет в начале массива, мутирует исходный массив

// let arrShift = movies.shift();
// console.log(arrShift);



// .unshift() - возвращает новую длину, добавляет элементы в начало массива, мутирует исходный массив
// let arrUnshift = movies.unshift('Форсаж', 'Один дома');
// console.log(arrUnshift);



// .concat() - возвращает новый массив, исходный не мутирует
// let arrConcat = movies.concat('Семейка Адамс');
// console.log(arrConcat);



// .join() - возвращает новую строку, содержащую элементы массива
// let arrJoin = movies.join();
// console.log(arrJoin);



// .slice(start, end) - возвращает новый массив, исходный не мутирует, копирует элементы из массива start (включительно) до end (не включительно)
// если без аргументов, то копирует весь массив
// let arrSlice = movies.slice(1,2);
// console.log(arrSlice);



// .indexOf() - возвращает индекс искомого элемента массива
// возвращается -1 - если элемент не найден
// let arrIndexof = movies.indexOf('test');
// console.log(arrIndexof);


// .includes() - возвращает true или false
// let arrIncludes = movies.includes('Железный человек');
// console.log(arrIncludes);


// .reverse() - мутирует исходный массив, обращает порядок следования элементов
// let arrReverse = movies.reverse();
// console.log(arrReverse);


// .at() - возвращает элемент по индексу, можно отрицательные - тогда считает с конца
// let arrAt = movies.at(2);
// console.log(arrAt);



// .fill() - если вызвать на массиве с данными, то он их перезапишет, мутирует исходный массив
// const filledArr = movies.fill(2);
// console.log(filledArr);




// .splice() - если без аргументов - новый пустой массив
// 1й аргумент - индекс с которого удалять
// удаляет из исходного и возвращает новый массив с удаленными элементами
// 2й аргумент - количество элементов для удаления

// const movies = ['Гарри Поттер', 'Властелин колец', 'Железный человек', 'Форсаж', 'Человек паук'];


// let splicedArr = movies.splice(1, 3, 'Один дома', 'Бэтмэн', 'Два', 'Три');
// console.log(splicedArr);


// const splicedArr = movies.splice(movies.length, 0, 'Иван Васильевич меняет профессию');


// console.log('splice', splicedArr);
// console.log('исходный', movies);




// .flat() - уменьшает вложенность массива, на количество указанных уровней
// по умолчанию 1, если мы не знаем количество уровней, можно передать Infinity
// const arr = [
//     [2, 4, 6],
//     [6, 1, 3],
//     [
//         [4,6,7],
//         [
//             [2,4,5,6],
//             [777,777,777]
//         ]
//     ]
// ];

// const flatArr = arr.flat(Infinity);

// console.log(arr);
// console.log(flatArr);




// .toString() - возвращает строку, где элементы разделены ","
// const arr = [2,3,4,5];

// const arrToString = arr.toString();

// console.log(arr);
// console.log(arrToString);



// const arr = [1, 2, 3, 4, 6, 7, 8, 9];

// for (let element of arr) {
//     console.log(element);
// }


// const str = 'JavaScript';

// for (const letter of str) {
//     console.log(letter);
// }





// 1) Пользователь вводит число. Создать массив из 5-ти одинаковых чисел введенных пользователем

// let value = +prompt('Введите значение для заполнения массива');

// const arr = new Array(5).fill(value);

// console.log(arr);



// 2) Дан массив [3,6,12,10,51] - вывести все числа в обратном порядке

// const arr = [3, 6, 12, 10, 51];

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }



// 3) Создать массив из 10 любых чисел, вывести среднее арифметическое всех чисел в массиве

// const arr = [4, 6, 8, 2, 6, 5, 7, 9, 11, 52];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// let srArifm = sum / arr.length;

// console.log(srArifm);



// 4) Дан массив [2,-4,10,5,1,-20,3,-8]. Создать новый массив, где каждый элемент равен противоположному элементу оригинального массива

// const arr = [2, -4, 10, 5, 1, -20, 3, -8];
// const resultArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         resultArr.push(Math.abs(arr[i]));
//     } else if (arr[i] > 0) {
//         resultArr.push(arr[i] * -1);
//     } else {
//         resultArr.push(arr[i]);
//     }
// }

// console.log(resultArr);


// 5) Сформировать массив длиной 10 элементов. Автоматически заполнить этот массив чередующимися нулями и единицами, начиная с нуля.

// let arr = [];

// for (let i = 0; i < 10; i++) {
//     i % 2 === 0 ? arr.push(0) : arr.push(1)
// }

// console.log(arr);



// 6) Сформировать массив длиной 8, внутри массива должны быть только те числа, которые делятся нацело на 4 (обязательно использовать цикл)

// const arr = [];
// const MAX_LENGTH = 8;

// for (let i = 1; ; i++) {
//     if (i % 4 === 0) {
//         arr.push(i);
//     }
//     if (arr.length === MAX_LENGTH) {
//         break;
//     }
// }

// console.log(arr);


// 7) С помощью цикла создать массив длиной 8, где каждый элемент равен квадрату своего номера(индекса) в массиве

// const arr = [];
// const MAX_LENGTH = 8;
// const kvadrat = 2;

// for (let i = 0; i < MAX_LENGTH; i++) {
//     arr.push(Math.pow(i, kvadrat));
//     // arr.push(i ** 2);
//     // arr.push(i ** kvadrat);
//     // arr[i] = i ** 2;
// }

// console.log(arr);




// 8) Создать массив из 10 случайных чисел. Вывести количество четных чисел

// const arr = []
// const MAX_LENGTH = 10;
// let count = 0;

// for (let i = 0; i < MAX_LENGTH; i++) {
//     arr[i] = Number((Math.random() * 10).toFixed(0));
//     if (arr[i] % 2 === 0) {
//         count++;
//     }
// }

// console.log(count);
// console.log(arr);


// 9) Создать массив из 10 чисел и вывести наибольшее число

// const arr = [4, 3, 8, 2, 17, 35, 7, 17, 11, 10];

// let maxNumber = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//         maxNumber = arr[i];
//     }
// }

// console.log(maxNumber);



// 10) Дан массив:

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Преобразовать массив в строку методом массивов
// В качестве разделителя указать ' and '

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// const result = fruits.join(' and ');

// console.log(result);


// 11) Создать массив из 10 марок автомобилей, проверить есть ли в нём марка, которую введет пользователь
// Результат вывести в консоль

// const cars = ['opel', 'ford', 'bmw', 'audi', 'mazda', 'lada', 'toyota', 'jeely', 'tesla', 'renault'];

// let answer = prompt('Enter car model');

// cars.includes(answer.toLowerCase()) ? console.log('Такая марка есть') : console.log('такой марки нет');



// console.log(!!null)
// console.log(!!"")
// console.log(!!1)


// console.log(+true)
// console.log(!"John")

// console.log(3 + 4 + "5")


// const arr = [1,2,3,4];

// delete arr[1]

// console.log(arr[1])


// let test = prompt('enter');

// console.log(test)

