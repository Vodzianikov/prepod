
const person = {
    firstName: 'Андрей',
    lastName: 'Сидоров',
    age: 35,
    // speak: function () {
    //     console.log('person can speak');
    // }
    speak() {
        console.log('person can speak');
    },
    walk() {
        console.log('person can walk');
    },
    hobbies: ['Рисование', 'Спорт', 'Шашки']
};

// person.city = 'Gomel';
// person.firstName = 'Егор';

// delete person.hobbies

// console.log(person.firstName);
// console.log(person['lastName']);

// console.log(person);

// person.speak();
// person.walk();

// console.log(typeof person)


// let obj1 = new Object({ name: 'david', lastName: 'Duchovny' }); // => конструктор объекта

// let obj2 = Object.create({});

// obj2.name = 'David';
// obj2.lastName = 'Duchovny';


// console.log(obj1);

// console.log(obj2);





// Создать объект книга
// у книги есть: название, авторы (массив строк), год, описание, опубликована ли она
// метод: бронирование книги с сообщением "эту книгу можно забронировать"


// const book = {
//     title: 'Гарри Поттер',
//     authors: ['Джоан Роулинг'],
//     year: 2001,
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, eius',
//     published: true,
//     reserve() {
//         console.log('эту книгу можно забронировать');
//     }
// };

// book.reserve();

// console.log(book);




// copyWithin

// const colors = ["Green", "Red", "Blue", "Pink"];
// colors.copyWithin(2, 0); // => Green,Red,Green,Red
// console.log(colors);


// const users = [
//     { name: 'Анна', online: true },
//     { name: 'Михаил', online: false },
//     { name: 'Саша', online: false }
// ];


// every()

// const isAllUsersOnline = users.every((user) => {
//     return user.online;
// });


// console.log(isAllUsersOnline); // => true



// some()

// const isSomeOnline = users.some((user) => {
//     return user.online;
// });

// console.log(isSomeOnline);




// find ()

// const numbers = [1, 5, 3, 4, 2, 6];

// const result = numbers.find((elem) => {
//     return elem === 2;
// });


// console.log(result); // => 2




// findIndex ()

// const numbers = [1, 5, 3, 4, 2, 6];

// const result = numbers.findIndex((elem) => {
//     return elem === 2;
// });

// console.log(result); // => 4




// sort() - отсортировал исходный массив, мутирует исходный массив
// const numbers = [1, 5, 3, 4, 2, 6];

// function sortFunc (a, b) {
//     return b - a;
// }

// console.log(numbers.sort(sortFunc));





// forEach () - возвращает undefined

// const numbers = [1, 5, 3, 4, 2, 6];

// const result = numbers.forEach((num) => {
//     const square = num * num;
//     console.log('Квадрат числа равен: ' + square);
// });

// console.log(result);



// map () - возвращает новый массив после какой-то трансормации


// const numbers = [1, 5, 3, 4, 2, 6];

// const result = numbers.map((num) => {
//     return num * num;
// });

// console.log('result', result);
// console.log('numbers', numbers);



// filter()

// const languages = ["Java", "TypeScript", "C#", "JavaScript"];

// const jLanguages = languages.filter((item, index, arr) => {
//     console.log("Текущий элемент " + item)
//     console.log("Индекс " + index)
//     console.log("Массив " + arr)
//     return index >= 3
//   })

// console.log(jLanguages);




// reduce() 


// const numbers = [-1, 5, 3, 4, 2, 6];

// const sum = numbers.reduce((currentSum, currentNumber) => {
//     if (currentNumber > 0) {
//         return currentSum + currentNumber;
//     } else {
//         return currentSum;
//     }

// }, 0);


// console.log('Сумма: ', sum)


// const students = [
//     { studentName: 'Гриша', raiting: 5 },
//     { studentName: 'Миша', raiting: 2 },
//     { studentName: 'Петя', raiting: 6 },
//     { studentName: 'Вася', raiting: 11 },
//     { studentName: 'Георгий', raiting: 3 },
//     { studentName: 'Матвей', raiting: 9 },
// ];


// const result = students.reduce((acc, currentStudent, index, arr) => {
//     const sum = acc + currentStudent.raiting;
//     if (index === arr.length - 1) {
//         return sum / arr.length;
//     } else {
//         return sum;
//     }
// }, 0);

// console.log(result);


// Спросить у пользователя 5 чисел, ПОСЛЕ ввода всех чисел, проверить все ли из них преобразуемы в число (могут быть числами)

// const arr = [];

// for (let i = 0; i < 5; i++) {
//     arr.push(prompt('Enter a number'));
// }

// const result = arr.every((str) => {
//     return !isNaN(str) && str !== null && str !== '';
// });

// console.log(result);





// Создать функцию, которая принимаем имя человека и возвращает 'Hello' если длина имени меньше 5, и 'Hi' если больше



// const greet = userName => userName.length > 5 ? `Hi ${userName}` : `Hello ${userName}`;

// console.log(greet('Гришка'));



// Создать случайный массив чисел длиной 10
// На основе оригинального массива создать массив чисел которые являются четными и делятся на 4


// function getRandomArray() {
//     const arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.floor(Math.random() * 100));
//     }
//     return arr;
// }

// const randomArr = getRandomArray();

// console.log(randomArr);


// const filteredArr = randomArr.filter((number) => {
//     return number % 4 === 0;
// });

// console.log(filteredArr);


// Дан массив случайных чисел, просуммировать только четные числа этого массива


// const result = randomArr.reduce((sum, currentNumber) => {
//     return currentNumber % 2 === 0 ? sum + currentNumber : sum;
// }, 0);

// console.log(result);





// Создать массив имен длиной больше 5, выяснить есть ли в массиве "Семен" (без метода includes)


// const names = ['Александр', 'Вячеслав', 'Сергей', 'Дмитрий', 'Семен', 'Валентин'];

// const isSemen1 = names.some((name) => {
//     return name === 'Семен';
// });

// const isSemen = names.some(name => name === 'Семен');

// console.log(isSemen);





// Есть массив мужских имен, трансформировать массив в 'Mr. ИМЯ'


// const misters = names.map((name) => {
//     return `Mr. ${name}`;
// });

// console.log(misters);



// Дан массив с названиями методов массивов. 
// Необходимо вывести в консоль сообщения "Метод ИМЯ_МЕТОДА" для каждого метода массива.

// const methods = [
//     'push()',
//     'pop()',
//     'shift()',
//     'unshift()',
//     'slice()',
//     'splice()',
//     'foreach()',
//     'map()',
//     'find()',
//     'findIndex()',
// ];

// methods.forEach((methodName) => {
//     console.log(`Метод ${methodName}`)
// })




// Вам дан массив computers с объектами. Найдите в массиве объект "MacBook Pro 16" и выведите его в консоль.

// const computers = [
//     {
//         name: 'MacBook Pro 13',
//         price: 4000
//     },
//     {
//         name: 'MacBook Pro 14',
//         price: 5000
//     },
//     {
//         name: 'MacBook Pro 16',
//         price: 7000
//     },
// ];

// const macbook = computers.find((obj) => {
//     return obj.name === 'MacBook Pro 16';
// });

// console.log(macbook);




// Дан массив чисел arrayNumbers. Необходимо создать переменную isMoreThenHundred, которая будет true или false в зависимости от того, если в нем хотя бы одно число строго больше 100


// const arrayNumbers = [10, 15, 5, 100, 50, 101, 203, 800];

// const isMoreThenHundred = arrayNumbers.some((number) => {
//     return number > 100;
// });

// console.log(isMoreThenHundred); // => true



// Дан массив чисел arrayNumbers. Необходимо отсортировать массив в порядке убывания

// const arrayNumbers = [10, -2, -3, 0, 1, 30, 25];

// arrayNumbers.sort((a, b) => {
//     return b - a;
// });

// console.log(arrayNumbers); // [30,25,10,1,0,-2,-3]




// Дан массив имен names. Необходимо создать переменную filteredNames и отфильтровать массив так, чтобы в нем остались только те имена, длина окторых больше либо равна 5

// const names = ['Александр', 'Ян', 'Оля ', 'Вячеслав', 'Маша', 'Анатолий'];

// const filteredNames = names.filter((name) => {
//     return name.length >= 5;
// });

// console.log(filteredNames); // => ['Александр','Вячеслав', 'Анатолий']


// Дан массив чисел arrayNumbers:
// 1) Создайте переменную sum, которая будет содержать сумму всех элементов массива
// 2) Создайте переменную average, которая будет содержать среднее арифметическое чисел из массива (результат округлить до целых)

// const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sum = arrayNumbers.reduce((sum, currentNumber) => {
//     return sum + currentNumber;
// }, 0);

// const average = arrayNumbers.reduce((sum, currentNumber, index, arr) => {
//     const total = sum + currentNumber;
//     if (index === arr.length - 1) {
//         return total / arr.length;
//     } else {
//         return total;
//     }
// });


// console.log(sum); // => 45
// console.log(average); // => 5





// популярность кофе

// const coffees = ['Latte', 'Cappuccino', 'Americano'];

// let favoriteCoffeeName = prompt('Поиск кофе по названию:');

// favoriteCoffeeName = favoriteCoffeeName.trim().toLocaleLowerCase();

// const favoriteCoffeeIndex = coffees.findIndex((coffee) => {
//     return coffee.toLocaleLowerCase() === favoriteCoffeeName;
// });

// const favoriteCoffee = coffees[favoriteCoffeeIndex];

// if (favoriteCoffee) {
//     alert(`Держите ваш любимый кофе ${favoriteCoffee}. Он ${favoriteCoffeeIndex + 1} по популярности в нашей кофейне.`);
// } else {
//     alert('К сожалению, такого вида кофе нет в наличии');
// }



// обновить цены

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];


// const updatePrices = prices.map((price) => {
//     return price + 0.5;
// });

// coffees.forEach((coffee, index) => {
//     alert(`Кофе ${coffee} сейчас стоит ${updatePrices[index]} евро`);
// });



// const dateofborn = new Date(1960, 6, 15, 9)


// const date = new Date();

// const date2 = Date.now();
// console.log(date.getTime())


// console.log('до 1970', dateofborn.getTime())

// const msToDays = 1000 * 60 * 60 * 24

// const diff = (date.getTime() - dateofborn.getTime()) / msToDays

// console.log(diff / 365)


// new Date(year, month, date, hours, minutes, seconds, ms)

// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// console.log(date)

// console.log(date.toLocaleDateString('ru-RU', options)); // => дата

// console.log(date.toLocaleTimeString()); // => время

// console.log(date.toLocaleString()); // => дата и время через запятую


// console.log(date.getFullYear()); // год

// console.log(date.getMonth()); // => 0 - январь, ... 11 - декабрь 

// console.log(date.getDate()); // число

// console.log(date.getDay()); // день недели с 0 до 6, 0 - воскр, 6 - суббота


// console.log(date.getHours()); // => часы
// console.log(date.getMinutes()); // => минуты
// console.log(date.getSeconds()); // => сек
// console.log(date.getMilliseconds()); // => мс


// console.log(date.getTime()); 


// date.setFullYear(2022)
// date2.setFullYear(2002)

// console.log(date)




// оценки кофейни

// const clientsEstimations = [];

// function askClientToGiveEstimation() {
//     const clientEstimationString = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
//     const clientEstimation = Number(clientEstimationString.trim());
//     if (clientEstimation >= 1 && clientEstimation <= 10) {
//         clientsEstimations.push(clientEstimation);
//     }
// }

// for (let i = 0; i < 5; i++) {
//     askClientToGiveEstimation();
// }

// const good = clientsEstimations.filter((estimation) => {
//     return estimation > 5;
// });

// const notGood = clientsEstimations.filter((estimation) => {
//     return estimation <= 5;
// });

// console.log(`Всего положительных оценок: ${good.length}; 
// Всего отрицательных оценок: ${notGood.length}`);





// Вам дан массив чисел.
// const numbers = [10, 4, 100, -5, 54, 2];
// Необходимо посчитать сумму кубов всех чисел в массиве. Например, для массива [1, 5, 9]
// должен быть следующий результат:
// 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// Решить через метод reduce и foreach

// Для данного массива numbers сумма кубов должна равняться 1158411.


// const numbers = [10, 4, 100, -5, 54, 2];

// let sum = 0;

// numbers.forEach((num) => {
//     sum += num ** 3;
// });

// console.log(sum);


// const result = numbers.reduce((sum, currentNumber) => {
//     return sum + currentNumber ** 3;
// }, 0);

// console.log(result);




// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];


// const flatArray = matrix.reduce((acc, array) => {
//     // return acc.concat(array);
//     return [...acc, ...array];
// }, []);


// console.log(flatArray);




// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// };

// function giveJobToStudent(student, jobName) {
//     console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
//     return {
//         ...student,
//         job: jobName
//     };
// }

// const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

// console.log(updatedStudent);



// Написать функцию аналог метода массива push, функция принимает массив и элемент


// const arr = [1, 2, 3, 4, 5, 6];

// function push(arr, value) {
//     arr[arr.length] = value;
//     return arr.length;
// }


// const result = push(arr, 7);

// console.log(result);
// console.log(arr);



// function sum1(a, b, c) {
//     return a + b + c;
// }

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }


// sum(2, 4, 6) => sum(2)(4)(6);

// const res1 = sum(2);
// const res2 = res1(4);
// const res3 = res2(6);

// console.dir(res3);



// const translate = (locale) => {
//     return function (text) {
//         console.log(`${locale} ${text}`);
//     };
// };

// const translateToRU = translate('ru');
// const translateToEN = translate('en');
// const translateToDE = translate('de');

// translateToRU('Привет');
// translateToRU('Здравствуйте');
// translateToEN('Hello world');
// translateToDE('Deutchland');


// translate('ru', 'Привет');
// translate('ru', 'Добрый вечер');
// translate('ru', 'Добрый день');

// translate('en', 'Hello');
// translate('en', 'Good morning');


// translate('de', 'Guten Tag');
// translate('de', 'Wie geht es dir');



// написать функцию urlGenerator, 3 параметра (protocol, url, domain)

// => https://gmail.com
// => http://yandex.ru
// => https://amazon.de


// function urlGenerator(protocol) {
//     return function (url) {
//         return function (domain) {
//             console.log(`${protocol}://${url}.${domain}`);
//         };
//     };
// }

// const test = urlGenerator('http')('gmail')('com');



// const arr = [1,2,3,4,5,6]


// arr.map(() => {

// })

// arr.filter(() => {

// })



// const timeoutID = setTimeout(() => {
//     console.log('Через 1 секунду');
// }, 1000);

// const id = setInterval(() => {
//     console.log('Интревал в 1 секунду')
// }, 1000);
// console.log(id)

// setTimeout(() => {
//     clearInterval(id)
// }, 5000);




// console.log('Без таймаута');


// function greeting(name) {
//     alert('Hello ' + name);
// }

// function dataFromInput(callback) {
//     let name = prompt('Please enter your name');
//     callback(name);
// }

// dataFromInput(greeting);


// написать функцию аналог метода map, принимает массив и callback
// внутри будет цикл, будет метод push
// возвращает новый массив


// const arr = [1, 2, 3, 4, 5];

// function map(arr, callbackFunction) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(callbackFunction(arr[i], i, arr));
//     }

//     return result;
// }

// const newArr = map(arr, item => item **2);

// console.log(newArr);
// console.log(arr)


// arr.map(function (item,) {
//     return item ** 2
// })


// function call(cd) {
//     setTimeout(function () {
//         console.log('Я тебе звоню');
//     }, 0);
//     cd();
// }
// function answerphone() {
//     console.log('Оставьте ваше сообщение');
// }

// call(answerphone);
// answerphone();





// let start = Date.now()
// for (let i = 0; i < 10000; i++) {

// }
// let end = Date.now()

// let diff = end - start;

// console.log(diff)




// (function () {

//     let message = "Hello";
//     alert(message); // Hello

// })();


// const users = [
//     {
//         userName: 'Volha',
//         isOnline: false,
//     },
//     {
//         userName: 'Vadim',
//         isOnline: true,
//     },
//     {
//         userName: 'Petr',
//         isOnline: false,
//     },
//     {
//         userName: 'Alex',
//         isOnline: true,
//     },
//     {
//         userName: 'David',
//         isOnline: true,
//     },
//     {
//         userName: 'John',
//         isOnline: true,
//     },
//     {
//         userName: 'Valera',
//         isOnline: false,
//     },
//     {
//         userName: 'Alena',
//         isOnline: true,
//     },
// ];


// const usersOnline = users
//     .filter(user => user.isOnline === true)
//     .map(user => user.userName)
//     .reduce((str, currentName) => str + ', ' + currentName);

// console.log('Users online: ', usersOnline);




// function func() {
//     let a = 0;
//     return function (b) {
//         if (b === undefined) {
//             return a += 1;
//         } else {
//             return a = b;
//         }
//     };
// }

// const counter = func();


// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter(100));
// console.log(counter());
// console.log(counter(0));
// console.log(counter());


