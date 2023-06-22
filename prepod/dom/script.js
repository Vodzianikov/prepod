// 1) Создайте функцию с именем removeVowels, которая принимает строковый аргумент и возвращает ту же строку с удаленными всеми гласными (гласными являются «a», «e», «i», «o», «u»).
// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""

// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const word = 'drake';

// function removeVowels(str, vowelsArr) {
//     let result = '';
//     for (const letter of str) {
//         if (!vowelsArr.includes(letter)) {
//             result += letter;
//         }
//     }
//     return result;
// }

// const res = [...word].reduce((acc, currentLetter) => {
//     if (!vowels.includes(currentLetter)) {
//         acc.push(currentLetter);
//     }
//     return acc;
// }, []);


// console.log(res.join(''))

// console.log(removeVowels(word, vowels));



// 2) Объект Calculator


// const Calculator = {
//     add(a, b) {
//         return a + b;
//     },
//     subtract(a, b) {
//         return a - b;
//     },
//     multiply(a, b) {
//         return a * b;
//     },
//     divide(a, b) {
//         return b === 0 ? false : a / b;
//     }
// };

// console.log(Calculator.add(1, 4));
// console.log(Calculator.subtract(1, 4));
// console.log(Calculator.multiply(1, 4));
// console.log(Calculator.divide(1, 4));
// console.log(Calculator.divide(1, 0));



// 3) Таймер

// class Timer {
//     constructor() {
//         this.counter = 0;
//         this.timerIDs = [];
//     }
//     start() {
//         const timerID = setInterval(() => {
//             this.counter += 1;
//             console.log(this.counter);
//         }, 1000);
//         this.timerIDs.push(timerID);
//     }
//     stop() {
//         clearInterval(this.timerIDs[0]);
//         this.timerIDs = [];
//     }
//     reset() {
//         this.counter = 0;
//     }
// }

// const timer1 = new Timer();

// console.log(timer1);

// timer1.start();

// setTimeout(() => {
//     timer1.stop();
// }, 5000);

// setTimeout(() => {
//     timer1.start();
// }, 7000);

// setTimeout(() => {
//     timer1.stop()
//     timer1.reset()
// }, 10000);

// setTimeout(() => {
//     timer1.start()
// }, 12000);



// 4) noRepeat

// function noRepeat(str) {
//     for (const letter of str) {
//         if (str.indexOf(letter) === str.lastIndexOf(letter)) {
//             return letter;
//         }
//     }
// }

// console.log(noRepeat('aabbccdde'));
// console.log(noRepeat('wxyz'));
// console.log(noRepeat('testing'));








// BOM - Browser Object Model
// DOM - Document Object Model
// API - Application Programming Interface

// function test() {
//     console.log('test');
// }

// console.log(window);

// window.test();
// test();


// console.log(document.referrer);
// console.log(document.readyState);
// console.log(document.URL);
// console.log(document.domain);



document.write('Hello world from JS');

document.title = 'Title from JS';

// document.bgColor = 'orange';

// console.log(document.body)
// console.log(document.head)


// const items = document.querySelectorAll('.item');
const list = document.querySelector('.list');

const header = document.getElementById('header');
// const elements = document.getElementsByClassName('list_item');
// const tagNames = document.getElementsByTagName('li');
// const byName = document.getElementsByName('test');

// console.log(items[0]);
// console.log(items);
// list.style.color = 'orange';
// list.style.fontSize = '60px';
// console.log(list.children);
// console.log(list.parentElement);
// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);


// [...list.children].forEach((elem) => {
//     console.log(elem)
// })

console.log(header.innerHTML);
console.log(header.textContent);
console.log(header.outerHTML);
// console.log(elements);
// console.log(tagNames);
// console.log(byName);



// ближайший
// const el = document.querySelector('.level-3');
// const elAncestor = el.closest('.level-1');
// console.log(elAncestor);




// const lev1 = document.querySelector('.level-1');
// const lev2 = document.querySelector('.level-2');

// console.log(lev2.contains(lev1));
// console.log(lev1.contains(lev2));
