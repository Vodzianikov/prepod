// создать 3 перемнных:
// carModel
// carOwner
// currentCarSpeed

// Присвоить им значения
// Вывести значение каждой перемнной в консоль (Модель авто: ..., Владелец авто: ..., текущая скорость: ...)

// Изменить скорость

// Вывести в консоль сообщение: Скорость была изменена на: ...

// const carModel = 'Tesla'
// let carOwner = 'Vladislav'
// let currentCarSpeed = 70



// console.log(`Модель авто: ${carModel}`)
// console.log(`Владелец авто: ${carOwner}`)
// console.log(`Текущая скорость: ${currentCarSpeed}`)

// let newCurrentCarSpeed = 120

// console.log(`Скорость была изменена на: ${newCurrentCarSpeed}`)



// неявное преобразование
// console.log(2 > 3) // => true or false


// // явное преобразование
// console.log(typeof +'2') // => type number



// let num = 1354;
// let strNum = '1354';

// console.log(num == strNum); // => true, неявное преобразование типа
// console.log(num === strNum); // => false



// ! - не, логическое не


// console.log(num != strNum); // => false 
// console.log(num !== strNum); // => true

// console.log('3' > '13')


// +'3543523' => явное преобразование
// Number('4353') => явное преобразование

// Number('3543523') => 3543523


// console.log(String(2)) // => явное преобразование


// console.log(Boolean(2)) // => явное преобразование



// Всегда false => ложные значения
// console.log(Boolean(0)) // => явное преобразование
// console.log(Boolean(false)) // => явное преобразование
// console.log(Boolean(null)) // => явное преобразование
// console.log(Boolean(undefined)) // => явное преобразование
// console.log(Boolean('')) // => явное преобразование
// console.log(Boolean(NaN)) // => явное преобразование


// console.log(+false) // => 0
// console.log(+true) // => 1



// отмена => null
// ничего не ввели => пуская строка
// let a = prompt('Enter age')

// console.log(a)



// && - и
// || - или
// ! - не

// let age = 20;


// console.log(age >= 20 && age < 30 && age < 0)

// console.log(age > 20 || age < 30)



// console.log(!0) // => true
// console.log(!!0) // false

// !! = Boolean()


// => number
// console.log(typeof NaN)


// let age = 18;

// if (age > 18) {
//     console.log('OK')
// } else if (age === 18) {
//     console.log('BINGO 18')
// } else {
//     console.log('NOT OK')
// }

// let age = 40;

// switch (age) {
//     case 18:
//         console.log('BINGO 18');
//         break;
//     case 20:
//         console.log('BINGO 20');
//         break;
//     case 25:
//         console.log('BINGO 25');
//         break;
//     case 30:
//     case 40:
//         console.log('BINGO 30 or 40');
//         break;
//     default:
//         console.log('error');
//         break;
// }


// let age = 20

// if (age > 18) {
//     console.log('OK')
// } else {
//     console.log('NOT OK')
// }


// age > 18 ? console.log('OK') : console.log('NOT OK')



// switch (age) {
//     case 1-10:
//         console.log("привет мальчик")
//     case 11-18:
//         console.log("привет подросток")
//     case 19-40:
//         console.log("здарова пацан")
//     case 41-80:
//         console.log("добрый вечер")
//     case 81-100:
//         console.log("здравия желаю")

// }






// Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 
// 1 км = 0.621371 миль. Это значение укажите в коде как константу.


// const miles = 0.621371;
// let km = +prompt('Введите количество км');
// console.log(km * miles);



// 9) Запросить у пользователя название планеты. Если пользователь ввел «Земля» или «земля», то вывести «Привет,
// землянин!», в остальных случаях вывести «Привет, инопланетянин!».


// let planet = prompt('Введите название планеты');

// planet === 'Земля' || planet === 'земля' ? console.log('Привет землянин!') : console.log('Привет инопланетянин!')


// if (planet === 'Земля' || planet === 'земля') {
//     console.log('Привет землянин!')
// } else {
//     console.log('Привет инопланетянин!')
// }






// 8) Запросить у пользователя число и определить, оно положительное, отрицательное или ноль, вывести соответствующее сообщение


// let num = +prompt('Введите число');


// if (num > 0) {
//     console.log(`Ваше число ${num} действительно больше нуля`)
// } else if (num < 0) {
//     console.log(`Ваше число ${num} действительно меньше нуля`)
// } else {
//     console.log(`Ваше число ${num} ноль`)
// }




// 7) Создать две переменных отвечающих за возраст Федота и Митяя (вводить с помощью prompt)
// сравнить две переменных, и вывести результат:
// равны => вывести сообщение Возрасты равны
// Митяй > Федота => вывести "Митяй старше Федота на ЗНАЧЕНИЕ
// Федот > Митяя => вывести "Федот старше Митяя на ЗНАЧЕНИЕ

// если хотя бы один из возрастов не число (пустая строка, или ввод был отменен) => сообщение об ошибке


// let ageFedot = prompt('Федот, введи сколько тебе лет');
// let ageMitya = prompt('Митя, введи сколько тебе лет');

// if (
//     ageFedot === '' || 
//     ageMitya === '' || 
//     ageFedot === null || 
//     ageMitya === null ||
//     isNaN(ageFedot) ||
//     isNaN(ageMitya)
// ) {
//     console.log('Введите правильную информацию');
// } else {
//     ageFedot = +ageFedot;
//     ageMitya = +ageMitya;
//     if (ageFedot > ageMitya) {
//         console.log(`Федя старше Мити на ${ageFedot - ageMitya}`);
//     } else if (ageMitya > ageFedot) {
//         console.log(`Митя старше Феди на ${ageMitya - ageFedot}`);
//     } else {
//         console.log('Они одногодки');
//     }
// }



// 6) Запросить у пользователя номер месяца и вывести на экран его название (switch)


// let monthNumber = +prompt('Введите номер месяца')


// switch (monthNumber) {
//     case 1:
//         console.log('Январь')
//         break;
//     case 2:
//         console.log('Февраль')
//         break;
//     case 3:
//         console.log('Март')
//         break;
//     case 4:
//         console.log('Апрель')
//         break;
//     case 5:
//         console.log('Май')
//         break;
//     case 6:
//         console.log('Июнь')
//         break;
//     case 7:
//         console.log('Июль')
//         break;
//     case 8:
//         console.log('Август')
//         break;
//     case 9:
//         console.log('Сентябрь')
//         break;
//     case 10:
//         console.log('Октябрь')
//         break;
//     case 11:
//         console.log('Ноябрь')
//         break;
//     case 12:
//         console.log('Декабрь')
//         break;
//     default:
//         console.log('invalid data')
//         break;
// }


// 5) С помощью switch напишите программу, которая по названию возвращает номер цвета:
// red => 1
// blue => 2
// orange => 3
// gray => 4
// salmon => 5
// Если ни один из цветов не совпал - вывести сообщение об ошибке


// let colorName = prompt('Введите название цвета')

// switch (colorName) {
//     case 'red':
//         console.log(1)
//         break;
//     case 'blue':
//         console.log(2)
//         break;
//     case 'orange':
//         console.log(3)
//         break;
//     case 'gray':
//         console.log(4)
//         break;
//     case 'salmon':
//         console.log(5)
//         break;
//     default:
//         console.log('Invalid data')
//         break;
// }



// 4) Пользователь вводит 3 числа, вывести их среднее арифметическое (сделать проверку на строку, пользователь должен вводить только числа и не должен вводить строки)

let firstNum = +prompt('Введите первое число')
let secondNum = +prompt('Введите второе число')
let thirdNum = +prompt('Введите третье число')

// console.log(typeof firstNum === 'string')

let result = 0;

if (typeof firstNum === 'string' ||
    typeof secondNum === 'string' ||
    typeof thirdNum === 'string'
) {
    console.log('invalid data')
} else {
    result = (firstNum + secondNum + thirdNum ) / 3
    console.log(result)
}
