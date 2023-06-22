// let num1 = +prompt('Введите число 1')
// let num2 = +prompt('Введите число 2')

// if (num1 > num2) {
//     console.log(`${num1} больше, чем ${num2}`)
// } else {
//     console.log(`${num2} больше, чем ${num1}`)
// }



// loops
// for (for in, for of), while, do while


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// let start = 10;
// let end = 20;

// while (start < end) {
//     console.log(start);
//     start++;
// }



// do {
//     console.log(start);
//     start++;
// } while (start < end)



// Запросите у пользователя радиус окружности и выведите площадь такой окружности.


// const PI = 3.14;

// let radius = +prompt('Enter circle radius');

// let result = PI * (radius ** 2);

// console.log(`Площадь окружности с радиусом ${radius} равна ${result}`);



// Пользователь вводит свой текущий возраст, вывести на экран сколько лет ему будет до 2030 года. 
// Например, вводим 14. Вывод: «в 2018 будет 15», «в 2019 будет 16», «в 2020 будет 17» и т.д.

// let currentAge = +prompt('Enter your current age');
// let currentYear = 2024;

// const maxYear = 2030;

// while (currentYear <= maxYear) {
//     console.log(`В ${currentYear} Вам ${currentAge}`);
//     currentYear++;
//     currentAge++;
// }


// Сделать цикл который выводит нечетные числа от 40 до 140

// let start = 40;
// let end = 140;

// while (start <= end) {
//     if (start % 2 !== 0) {
//         console.log(start);
//     }
//     start++;
// }





// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.


// let otric = 0;
// let poloj = 0;
// let zero = 0;

// for (let i = 1; i <= 10; i++) {
//     let userNumber = +prompt('Введите число');
//     if (userNumber < 0) {
//         otric++;
//     } else if (userNumber > 0) {
//         poloj++;
//     } else {
//         zero++;
//     }
// }

// console.log(`Положительных - ${poloj}
// Отрицательных - ${otric}
// Нулей - ${zero}
// `);



// Вывести # столько раз, сколько указал пользователь (цикл while)

// const SYM = '#';

// let resultString = '';

// let i = 1;
// let userNumber = +prompt('Enter number');

// while (i <= userNumber) {
//     resultString += SYM;
//     i++;
// }

// console.log(resultString)





// const str2 = 'Hello';

// console.log(str.length)

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// console.log(str2.concat(' ', str));

// console.log(str[5])



// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


// последний символ в строке
// console.log(str[str.length - 1])


// console.log(str.charAt(5))
// console.log(str[5])

// let email = 'test@mail.ru'

// let result = email.includes('@')

// if (email.includes('@') && email.includes('.', 4)) {
//     console.log('Выглядит как почта, хммм')
// } else {
//     console.log('Не не не')
// }



// const str = 'JavaScripta';

// console.log(str.lastIndexOf('a')) // => 10, индекс последнего вхождения
// console.log(str.indexOf('a')) // => 1, индекс первого вхождения
// console.log(str.indexOf('w')) // => -1, не нашли


// console.log(str.startsWith('Ja')); // => true
// console.log(str.endsWith('script')); // => false


// console.log(str.search('Scr')) // => 4, индекс начала вхождения искомой строки


// let result = str.slice(4); // => новая строка, начиная с индекса

// console.log(result);


// console.log(str.substring(2, 8)) // => от 2 вкл до 8 не вкл
// console.log(str.substr(2, 8)) // => от индекса 2, 8 символов


// console.log(str.padEnd(20, '*'))
// console.log(str.padStart(20, '*'))



// возвращают новую строку
// console.log(str.replace('i', '1')) // => заменяет первый найденный символ, если не нашёл, вернет исходную строку

// console.log(str.replaceAll('a', '@')) // => заменяет все найденные символы


// let newStr = '#';
// let userNumber = prompt('Enter number');

// console.log(newStr.repeat(userNumber));


// let test = 'text';

// console.log(test.trim());


// 1) Перевернуть строку:

// Пример:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// let str = 'world';

// let result = '';

// for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
// }

// console.log(result);

// let a = 10;
// let b = 10;

// const result = a / b;
// console.log(result)
// console.log("type", typeof result)

// console.log(result.toFixed(3))

// ВАЖНО!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let str = "123.123lsdf3123"

// console.log(Number(str));   //Целое число
// console.log(+str);   //Целое число
// console.log(parseInt(str))    //Целое число
// console.log(parseFloat(str))   //Дробное чилсо


// Метод islnteger определяет, является ли значение целым чилсом 111111111111111111

// console.log(Number.isInteger(153)) //true
// console.log(Number.isInteger(153.4)) //false
// console.log(Number.isInteger("153")) //false

// Метод isFinite определяет, является ли значение дробным или целым чилсом
// console.log(Number.isFinite(153)) // true
// console.log(Number.isFinite(153.4)) //true
// console.log(Number.isFinite("153")) //false

//Округление числа

// const num = 4.82;
// console.log(Math.ceil(num)) // в большую сторону, 5
// console.log(Math.floor(num)) // в меньшую сторону,4
// console.log(Math.round(num)) // 5,округляет по правилам матиматики тоисть если число больше 0.5 то будет 1,если меньше то 0
// console.log(Math.trunc(num)) // 4,убирает дробную часть, тоисть после точки

//Возведение в степень

// const num = 2;
// console.log(Math.pow(num, 3))

//Корень из числа
// const num =16;
// console.log(Math.sqrt(num));

//Определение знака числа

// console.log(Math.sign(2)) // положительное число
// console.log(Math.sign(-2)) // отрицательное число
// console.log(Math.sign(0)) // 0
// console.log(Math.sign(-0)) // -0
// console.log(Math.sign(" ")) // если строка то 0
// console.log(Math.sign("123")) // неявное преобразование к числу 1
// console.log(Math.sign("-123")) // неявное преобразование к числу -1
// console.log(Math.sign("fdfsdf")) 

//Определение большего/меньшего числа

// console.log(Math.max(1,2,3,99,4,5,6,7,44,89,))
// console.log(Math.min(1,2,3,4,5,6,7,44,89,-10, -5))

//Генерация рандоманого/случайного числа

// console.log(Math.random()); // будет число (0.число)-тоисть число будет до целого числа
// console.log(Math.random()* 10); // будет число с целым числом  - (1,2,354,523,3,45.число)

// console.log(Math.random().toString(36).slice(2)) //Генерация  случаного числа с случайными буквами

//---------------------------------- Задачки----------------------------------

// let num = +prompt(`Введите первое число`)
// let num2 = +prompt(`Введите второе число`)
// let num3 = +prompt(`Введите третие число`)
// let num4 = +prompt(`Введите четвёртое число`)

// console.log(Math.max((num),(num2),(num3),(num4),))

// let num = +prompt(`Введите первое число`)
// let num2 = +prompt(`Введите второе число`)
// let num3 = +prompt(`Введите третие число`)

// console.log(Math.min((num),(num2),(num3),))

const num = +prompt(`Введите первое число`);
const num2 = +prompt(`Введите второе число`);

console.log(Math.random()* 10);





