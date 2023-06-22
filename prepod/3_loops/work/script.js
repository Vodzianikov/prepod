// // 2;
// // '';
// // boolean => true false;
// // null;
// // undefined
// // Bigint 123n;
// // Symbol;
// // Object;

// // null == undefined => true;


// // let num = 1234;
// // let strNum = +'1234';

// // typeof num;

// // Number('2323') => 2323 => number;
// // String(234234) => '234234' => string;
// // !!('23');

// // !! = Boolean;


// // '' => false;
// // null => false;
// // undefined => false;
// // false => false;
// // 0 => false;
// // NaN => false;

// // let y = +'two';

// // isNaN(y);

// // NaN - not a number;


// // num = strNum;

// // num == strNum



// //     **

// //     !
// // ||
// // &&


// //     let age = 18;
// // let maxAge = 120;

// // if () {
// //     то я делаю эту часть кода;
// // } else if () {
// //     то делаю эту часть;
// // } else if ()

// // age >= 18 && age < maxAge ? console.log('OK') : console.log('NOT OK');



// // let num1 = +prompt('Введите первое число');
// // let num2 = +prompt('Введите второе число');
// // let sym = prompt(`Введите символ "+" или "-" или "*" или "/"`);

// // 'Евгений' + ' ' + 'Стельмашок'
// // switch (sym) {
// //     case '+':
// //         console.log(`Сумма чисел: ${num1 + num2}`) - интерполяция
// //         break;
// //     case '-':
// //         console.log(`Разница чисел: ${num1 + num2}`)
// //         break;
// //     case '*':

// //         break;
// //     case '/':

// //         break;

// //     default:
// //         console.log('Эй, ты че')
// //         break;
// // }

// // console.log()

// // let person = {
// //     name: 'Eugen',
// //     surName: 'Стельмашок',
// //     age: 32,
// //     adress: 'Gomel',
// //     tech: ['HTML', 'CSS', 'JS', 'React', 'TS', 'Redux', 'GIT'],
// //     kids: {
// //         name: 'Some name',
// //         age: 10
// //     }
// // };




// // let a = +prompt('Введите число');
// // const b = 2;

// // let result = a ** b;

// // console.log(`Площадь квадрата равна ${result}`);

// // console.log(console)


// // const bigNum = 123n;


// // undefined


// // let und;


// // console.log(und, typeof und);


// // `` => Шаблонная строка => template string



// // for (let i = 0; i < 20; i++) {
// //     // тело цикла
// //     // 1 выполнение тела цикла - 1 итерация
// //     if (i === 10 || i === 5 || i === 15) {
// //         continue; // прерывает текущую интерацию и переходит к следующей
// //     }
// //     console.log(`Колесо сделало ${i}-й оборот`);
// // }



// // for (let i = 10; i >= 0; i--) {
// //     // тело цикла
// //     // 1 выполнение тела цикла - 1 итерация
// //     console.log(`Колесо сделало ${i}-й оборот`);
// // }


// // for (let i = 0; i < 4; i++) {

// //     for (let j = 0; j < 2; j++) {

// //         console.log(`I = ${i}`)
// //         console.log(`J = ${j}`)

// //     }

// // }


// // let num1 = +prompt('Загадайте число от 0 до 5');

// // for (; ;) {
// //     let num2 = +prompt('Отгадайте число от 0 до 5');
// //     if (num1 === num2) {
// //         console.log('Вы отгадали');
// //         break;
// //     }
// // }



// // for (let i = 1; i <= 3; i++) {

// //     for (let j = 1; j <= 4; j++) {
// //         console.log(i + '.' + j)
// //     }

// // }


// // let i = 1;

// // let end = 5;

// // while (i <= end) {
// //     console.log(i);
// //     i++;
// // }



// // let min = 1;
// // let max = 5;

// // do {
// //     console.log(min);
// //     min++;
// // } while (max <= min);

// // он в любом случае будет выполнен хотя бы 1 раз




// // 6. Пользователь вводит число n. Вывести на экран все четные числа от 1 до n.

// // Вариант с циклом for
// let n = +prompt('Введите число');

// for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// // Вариант с циклом while
// let j = 1;

// while (j <= n) {
//     if (j % 2 === 0) {
//         console.log(j);
//     }
//     j++;
// }