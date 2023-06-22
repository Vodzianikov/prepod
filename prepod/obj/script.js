// const obj = {
//     userName: 'John',
//     age: 20
// };

// const obj2 = {
//     city: 'gomel',
//     street: 'sovetskaya',
//     userName: 'David'
// };

// obj.postIndex = 246000

// const objCopy = {
//     ...obj,
//     ...obj2
// };


// console.log(obj);
// console.log(objCopy);

// console.log(obj === objCopy);


// console.log(obj.userName)
// console.log(obj['userName'])


// for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }



// если есть одинаковые поля будет взято последнее поле
// const obj3 = {};

// Object.assign(obj3, obj, obj2);

// console.log(obj3);



// function test () {
//     console.log('from func');
// }

// test.a = 10;

// test.func = () => {
//     console.log('from arrow func')
// }

// test.func()

// console.dir(test);




// hasOwnProperty - проверить есть ли ключ в объекте
// если ключ - функция - называется метод
// const obj = {
//     myProperty: 1000,
//     say: function () {
//         console.log('hi')
//     }
// };


// console.log(obj.hasOwnProperty("myProperty")) // => true
// console.log(obj.hasOwnProperty("myProperty2")) // => false

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     // bio: {
//     //   birth: '20.08.1994',
//     //   age: 28,
//     //   hasWork: true,
//     //   isMarried: false
//     // },
//     // address: {
//     //     city: {
//     //         cityName: 'gomel',
//     //         index: 246000
//     //     }
//     // }
// };

// console.log(user?.address?.city?.cityName);



// массив ключей объекта
// const keys = Object.keys(user);

// массив значений
// const values = Object.values(user);


// массив с массивами где каждый вложенный масив это пара ключ: значение
// const entries = Object.entries(user);


// console.log(keys);
// console.log(values);
// console.log(entries);



// const cat = {
//     name: 'Борис',
//     age: 8
// };

// for (const key in cat) {
//     console.log(`${key} - ${cat[key]}`);
// }



// узнать длину объекта - по длине массива ключей


// деструктуризация массива
// const arr = [2, 4, 5, 10, 8, 9, 0];

// const [first, second, third, , , six] = arr;

// let firstNumber = arr[0];
// let secondNumber = arr[1];
// let thirdNumber = arr[2];

// console.log(first); // => 2
// console.log(second); // => 4
// console.log(third); // => 5
// console.log(six); // => 9





// деструктуризация объекта

// const obj = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 28,
//     city: 'gomel',
//     postIndex: 246000
// };

// const { firstName, postIndex, lastName } = obj;


// console.log(firstName);
// console.log(lastName);
// console.log(postIndex);



// const obj = {
//     firstName: 'John',
//     lastName: 'Doe',
//     bio: {
//         birth: '20.08.1994',
//         age: 28,
//         hasWork: true,
//         isMarried: false
//     }
// };

// const { birth, age, hasWork, isMarried } = obj.bio;

// const {firstName, bio: { age }} = obj;

// console.log(firstName);
// console.log(age);



// console.log(this);


// const user = {
//     userName: 'Maksim',
//     birth: 2000,
//     getName() {
//         return this.userName;
//     },
//     getAge() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.birth;
//     },
//     getAllInfo() {
//         const age = this.getAge();
//         const user = this.getName();
//         console.log(`Пользователь: ${user}, Возраст: ${age}`);
//     }
// };

// console.log(user.getName());
// console.log(user.getAge());
// user.getAllInfo();


// const user2 = {
//     userName: 'David',
// }



// const user2name = user.getName.call(user2);

// console.log('user2name: ', user2name);


// у стрелочной функции нет своего this
// у стрелочной функции можно опускать круглые скобки если 1 аргумент
// у стрелочной функции можно убирать фигурные скобки если сразу идет return (возврат)
// у стрелочной функции нет псевдомассива arguments




// call, apply, bind - методы привязки контекста

// const mainHero = {
//     fullName: 'SpiderMan',
//     health: 60,
//     strength: 10
// }

// const badHero = {
//     fullName: 'Joker',
//     health: 55,
//     strength: 8
// }


// function printHeroInfo (extraInfo = '') {
//     console.log('this', this);
//     console.log(`Имя: ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength}, доп: ${extraInfo}`);
// }

// call(контекст, аргумент1, аргумент2 ... аргументN)
// apply(контекст, [аргумент1, аргумент2...аргументN])


// printHeroInfo.call(mainHero, 'Роль: хороший');
// printHeroInfo.apply(badHero, ['Роль: злодей']);




// bind - возвращает новую функцию с привязанным контекстом
// let user = {
//     firstName: "Вася"
// };

// let user2 = {
//     firstName: "Петя"
// }

// function func() {
//     console.log(this.firstName);
// }

// let funcUser = func.bind(user);
// let funcUser2 = func.bind(user2);

// funcUser();
// funcUser2();




// стрелка берет this из соседней области видимости
// const group = {
//     title: "Frontend 31",
//     students: ["John", "Pete", "Alice"],
//     showList() {
//         this.students.forEach((student) => {
//             console.log(this.title + ': ' + student)
//         });
//     }
// };

// group.showList();




// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 }
// ];


// 1. вывести в консоль 'its valid' если во всех объектах поле a > b, иначе вывести 'its invalid'

// const isValid = arr.every((obj) => {
//     return obj.a > obj.b
// })

// console.log(
//     arr.every(obj => obj.a > obj.b) ? 'its valid' : 'its invalid'
// )


// 2. на основе массива arr, создать массив объектов у которых поле b возведено в квадрат

// const newArr = arr.map(({ a, b }) => {
//     return {
//         a: a,
//         b: b ** 2
//     };
// });

// console.log(newArr);




// 3. с помощью метода/методов взять все поля a и b и последовательно поместить их в массив
// пример: [2,1,5,12,95,7];


// вариант 1
// const result = arr.reduce((acc, obj) => {
//     acc.push(obj.a, obj.b);
//     return acc;
// }, []);


// вариант 2
// const result2 = arr.reduce((acc, {a,b}) => [...acc, a, b], []);

// console.log(result);




// задача 4. выводить каждую секунду

// const person1 = {
//     name: 'John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML', 'CSS', 'JS']
// };

// const person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG', 'BUILD', 'RUN']
// };

// const person3 = {
//     name: 'Peter',
//     age: 41,
//     isProgrammer: false,
//     tech: ['JUMP', 'SPEAK', 'READ']
// };

// const person4 = {
//     name: 'Gregory',
//     age: 54,
//     isProgrammer: true,
//     tech: ['JAVA', 'NGINX', 'PYTHON']
// };

// const persons = [person1, person2, person3, person4];


// function getTime() {
//     let time = 0;
//     return () => {
//         time += 1000;
//         return time;
//     };
// }

// const next = getTime();

// persons.forEach((person) => {
//     person.tech.forEach((techName) => {
//         setTimeout(() => {
//             console.log(`${person.name} can ${techName}`);
//         }, next());
//     });
// });


// const person = {
//     name: 'Mr. John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML', 'CSS', 'JS'],
//     //becomeProgrammer : becomeProgrammer,
//     //beOlder: beOlder,
//     becomeMister: becomeMister
// };


// const person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG', 'BUILD', 'RUN'],
//     becomeMister: becomeMister,
//     // becomeProgrammer: becomeProgrammer,
// };


// function becomeProgrammer() {

//     // вар 1
//     // if (this.isProgrammer !== true) {
//     //     this.isProgrammer = true
//     //     console.log(this)
//     // }

//     // вар 2

//     // this.isProgrammer = this.isProgrammer ? this.isProgrammer : true;

//     // вар 3
//     this.isProgrammer = this.isProgrammer || true

//     console.log(this)
// }

// person2.becomeProgrammer();



// function beOlder () {
//     this.age++
//     // this.age = this.age + 1
//     console.log(this)
// }

// person2.beOlder();


// 7) Создать метод becomeMister который добавляет в person.name "Mr. " перед именем если там еще нет "Mr. "


// function becomeMister() {
//     if (this.name.split(' ').includes('Mr.') === false) {
//         this.name = 'Mr. ' + this.name;
//         console.log(this);
//     }
//     console.log(this)
// }

// person.becomeMister();
// person2.becomeMister();





// const obj = {
//     firstName: 'John',
//     _age: 30,
//     language: 'EN',
// };


// может удалить
// Object.preventExtensions(obj);

// obj.city = 'Gomel';
// obj.postCode = 246000;
// console.log(Object.isExtensible(obj));


// нельзя удалить, нельзя изменить, нельзя добавить
// Object.freeze(obj);

// obj.city = 'Gomel';
// obj.postCode = 246000;
// delete obj.language;
// obj.firstName = 'David';

// console.log(obj);
// console.log(Object.isFrozen(obj));



// нельзя добавить, нельзя удалить, можно изменить
// Object.seal(obj);

// obj.city = 'Gomel';
// obj.postCode = 246000;
// delete obj.language;
// obj.firstName = 'David';

// console.log(obj);
// console.log(Object.isSealed(obj));



// Object.defineProperty(obj, 'age', {
//     get () { // сработает при вызове
//         return this._age
//     },
//     set (value) { // сработает при записи obj.age = 100
//         if (value > 1 && value < 100) {
//             this._age = value
//         }
//     }
// })

// obj.age = 50;

// console.log(obj.age)
// console.log(Object.getOwnPropertyDescriptors(obj))

// obj.city = 'Gomel'


// Object.defineProperty(obj, 'city', {
//     value: 'Boston',
//     enumerable: false
// })


// const keys = Object.keys(obj);

// console.log(keys);


// for (const key in obj) {
//     console.log(key);
// }

// console.log(obj);

// console.log(Object.getOwnPropertyDescriptors(obj))



// const flower = {
//     name: 'Роза',
//     color: 'purple'
// };


// Object.defineProperties(flower, {
//     name: {
//         writable: false,
//         configurable: false
//     },
//     color: {
//         enumerable: false
//     }
// });


// ДЕСКРИПТОРЫ:
// writable
// enumerable
// configurable

// будет вся информация по объекту
// console.log(Object.getOwnPropertyDescriptors(flower))

// информация только по 'name'
// console.log(Object.getOwnPropertyDescriptor(flower, 'name'))



// const person1 = {
//     name: 'John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML', 'CSS', 'JS']
// };

// const person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG', 'BUILD', 'RUN'],
// };

// const person3 = {
//     name: 'Peter',
//     age: 41,
//     isProgrammer: false,
//     tech: ['JUMP', 'SPEAK', 'READ']
// };

// const person4 = {
//     name: 'Gregory',
//     age: 54,
//     isProgrammer: true,
//     tech: ['JAVA', 'NGINX', 'PYTHON']
// };



// function Person(name = 'John', age = 30, isProgrammer = false) {
//     this.name = name;
//     this.age = age;
//     this.isProgrammer = isProgrammer;
//     this.sayHi = function () {
//         console.log("Меня зовут: " + this.name);
//     };
// }



// const person1 = new Person('Vadim', 40);
// const person2 = new Person('Kolya', 20);
// const person3 = new Person('Sarah', 18);
// const person4 = new Person('Egor', 55);


// console.log(person1 instanceof Person);
// console.log(person2);
// console.log(person3);
// console.log(person4);
// person4.sayHi();
// person3.sayHi();