// Мой любимый JavaScript - однострочный комментарий



/*
многострочный
комментарий
*/


// Пишу функцию для запроса пользователей с сервера


// 'Тут что-то написано' - одинарные кавычки
// "Тут что-то написано" - двойные кавычки
// `Тут что-то написано` - обратные кавычки (Бэктики)

// Чувствителен к регистру

// Точка с запятой на Ваше усмотрение



// 1 - string => 'JavaScript', "JavaScript", `JavaScript`
// 2 - number => 12, 36, 40.5
// 3 - boolean => true, false
// 4 - null => null - ничего => тип - объект
// 5 - undefined => undefined - ничего
// 6 - Symbol => Symbol
// 7 - BigInt => 13548n
// 8 - object => {ключ: 'значение'}

// const c = 3;


// let a = 2;

// a = 'Stoka';


// const b = 'My name is Eugen';

// const BASE_URL = '192.168.10.10';

// `` - template string 


// const FONT_SIZE = 'ff0000';
// const SECOND_COLOR = 'ffffff';


// console.log(`Адрес сервера: ${BASE_URL}`);


// const result = alert('Привет, пользователь!');
// const result = prompt('Введите Ваш год рождения');
// const result = confirm('Вам есть 18 лет?');

// console.log(result);
// console.log(typeof result);

// let f;

// console.log(f)

// console.log(typeof null);
// console.log(typeof undefined);



// alert('Привет, пользователь!'); => undefined

// prompt('Введите Ваш год рождения'); => преобразует введенные данные в строку, если ничего не ввести - строка пустая, при нажатии "Отмена" => null

// confirm('Вам есть 18 лет?'); => при ОК - true, при отмена - false


// let b = `fdjkgh
// gfdgdf
// fdgdfg
// dfg
// dfg`;


// \ - экранирование символа
// \n - перенос строки


// let a = 'Daria\n book';
// console.log(a);


// alert('1');
// alert('2');
// alert('3');


// zadanie 1
// console.log('Запускаем таймер')

// alert('5')
// alert('4')
// alert('3')
// alert('2')
// alert('1')
// alert('0')

// console.log('Обратный отсчет закончен')



// zadanie 2
// let myName = 'Eugen';
// let mySurname = 'Stelmashok';
// let myFavoriteDrink = 'tea';
// const myFavoriteAnimal = 'cat';

// console.log('Вывожу имя:', myName);
// console.log('Фамилия', mySurname);
// console.log("Напиток: ",myFavoriteDrink);
// console.log('Любимое животное:', myFavoriteAnimal);

// let a = 4;
// let b = 2;

// const result1 = a + b; 
// const result2 = a - b;
// const result3 = a * b;
// const result4 = a ** b; // возведение в степень
// const result5 = a / b;
// const result6 = a % b; // остаток от деления

// console.log('+',result1);
// console.log('-',result2);
// console.log('*',result3);
// console.log('**',result4);
// console.log('/',result5);
// console.log('%',result6);

// console.log(a++);
// console.log(a);
// console.log(++b);


// let c = 4 / 0;

// console.log(c) // => Infinity или -Infinity



// NaN - not a number
// isNaN() - функция проверки на NaN


// +, Number(value) - приведение к числу
// String(value) - приведение к строке


// let d = String(2);

// console.log(typeof d);



// Запросить у пользователя его фамилию и вывести в консоль имя и фамилию

// let userName = prompt('Enter your name');
// let userSurname = prompt('Enter your surname');

// let fullName = userName + ' ' + userSurname;


// console.log(`Добро пожаловать' дорогой ${fullName}`);

// let test = 'Java';
// test += 'Script';


// let testNum = 2;
// testNum += 2;


// console.log('test', test);
// console.log('testNum', testNum);


// Boolean() => приведение к true или false


console.log(Boolean('')); // => false
console.log(Boolean(null)); // => false
console.log(Boolean(undefined)); // => false
console.log(Boolean(0)); // => false
console.log(Boolean(false)); // => 0 => false

console.log(Boolean(true)); // => 1 => true
console.log(Boolean(' ')); // => true
console.log(Boolean(1)); // => true
console.log(Boolean({})); // => true
console.log(Boolean(2)); // => true


let result = 2 + '2' // => 22

let a = 'Fedor'
let b = 'Pastuhov'

let full = a + ' ' + b


let s = a + b * d;

let j = (a + b) * d;