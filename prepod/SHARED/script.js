// Задача 1 - переписать функцию конструктор на класс

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
//     this.setTechnologies = function (technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     };
//     this.setNewStatus = function (newStatus) {
//         this.status = newStatus;
//     };

// }

// class Student {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;

//         this.technologies = [];
//         this.status = 'Junior';
//     }
//     setTechnologies(technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     }
//     setNewStatus(newStatus) {
//         this.status = newStatus;
//     }
// }

// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);


// Задача 2

// class Developer {
//     constructor (fullName, age, position) {
//         this.fullName = fullName;
//         this.age = age;
//         this.position = position;
//         this.technologies = [];
//     }
//     code () {}
//     learnNewTechnology (technology) {
//         this.technologies.push(technology)
//     }
// }

// class JuniorDeveloper extends Developer {
//     constructor (fullName, age) {
//         super(fullName, age, 'Junior')
//         this.technologies = ['HTML', 'CSS', 'JavaScript']
//     }
//     code() {
//         console.log('Junior разработчик пишет код...')
//     }
// }

// class MiddleDeveloper extends Developer {
//     constructor (fullName, age) {
//         super(fullName, age, 'Middle')
//         this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
//     }
//     code() {
//         console.log('Middle разработчик пишет код...')
//     }
// }

// class SeniorDeveloper extends Developer {
//     constructor (fullName, age) {
//         super(fullName, age, 'Senior')
//         this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
//     }
//     code() {
//         console.log('Senior разработчик пишет код...')
//     }
// }

// const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
// const middleDeveloper = new MiddleDeveloper('Игорь', 25)
// const seniorDeveloper = new SeniorDeveloper('Максим', 30)

// juniorDeveloper.code(); // Junior разработчик пишет код...
// middleDeveloper.code(); // Middle разработчик пишет код…
// seniorDeveloper.code(); // Senior разработчик пишет код...

// console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); 
// // 'Анастасия', 20, 'Junior'

// console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies); 
// // 'Игорь', 25, 'Middle'

// seniorDeveloper.learnNewTechnology('Redux');

// console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); 
// // 'Максим', 30, 'Senior'




// Задача 3

// class Device {
//     constructor() {
//         this.isSwitchedOn = false;
//     }
//     switch() {
//         this.isSwitchedOn = !this.isSwitchedOn;
//     }
// }


// class Smartphone extends Device {
//     constructor(model, price) {
//         super();
//         this.model = model;
//         this.price = price;
//     }
//     #battery = 100;
//     callSmbd(name) {
//         if (this.isSwitchedOn && this.#battery > 0) {
//             this.#battery -= 20;
//             if (this.#battery === 0) {
//                 this.isSwitchedOn = false;
//             }
//             console.log(`You are calling to ${name}`);
//         } else {
//             console.log('Your device is switched off, you can\'t call anyone');
//         }
//     }
//     charge() {
//         setTimeout(() => {
//             this.#battery = 100;
//             this.isSwitchedOn = true;
//             console.log(this);
//         }, 2000);
//     }
// }

// const honor = new Smartphone('Honor P30 lite', 250);


// honor.switch();
// honor.callSmbd('John');
// honor.callSmbd('John');
// honor.callSmbd('John');
// honor.callSmbd('John');
// honor.callSmbd('John');
// honor.callSmbd('John');

// honor.charge();


// setTimeout(() => {
//     honor.callSmbd('after charging');
// }, 3000);


// Коллекция уникальных значений
// const uniq = new Set();


// // добавить - add
// uniq.add(2);
// uniq.add('test');
// uniq.add(true);
// uniq.add([1,2,3]);
// uniq.add([1,2,3]);
// uniq.add({fullName: 'David', age: 23});
// uniq.add(2);
// uniq.add(2);

// // удалить - delete
// uniq.delete('test');


// console.log(uniq);

// узнать длину - size
// console.log(uniq.size);

// проверить на наличие - has
// console.log(uniq.has('test'));
// console.log(uniq.has(2));


// uniq.forEach((elem) => {
//     console.log(elem)
// })


// for (const value of uniq) {
//     console.log(value)
// }


// Очистить - clear
// uniq.clear();

// console.log(uniq);



// const collection = new Map();

// const person = {
//     age: 20,
//     fullName: 'John'
// }

// при добавлении пары по ключу, который есть - значение будет перезаписано
// collection.set(1, 'value 1 like a number');
// collection.set('1', 'value 1 like a string');
// collection.set('1', 'value 1 like a stringggggg');
// collection.set({}, 'obj');
// collection.set(person, 'person obj');
// collection.set([], 'array');
// collection.set(null, undefined);
// collection.set(undefined, null);

// collection.set(true);

// console.log(collection);

// console.log(collection.get(person));
// console.log(collection.has(1));

// collection.delete(null)

// console.log(collection.size);


// collection.forEach((key, value) => {
//     console.log(`Значение: ${key} ключ: ${value}`)
// })


// for (const [key, value] of collection) {
//     console.log(`Ключ: ${key} значение: ${value}`)
// }

// collection.clear();

// console.log(collection);



// const pattern1 = new RegExp('hello');
// const pattern = /\w+l{2}\w+/g;

// const str = 'hello world hello';



// вернут true или false
// console.log(pattern.test(str));

// вернет массив со строкой и доп. информацией
// console.log(pattern.exec(str));



// let str2 = "The quick brown fox jumps over the lazy dog.";
// const pattern2 = /the/gi;

// вернет массив совпадений
// let result = str2.match(pattern2);
// console.log(result)


// let str = "Привет, мир!";
// const pattern = /мир/;

// let str2 = 'Hello world';

// возвращает новую измененную строку
// let newstr = str.replace(pattern, "земля");

// let res = str2.replace(/\w+$/, 'home');
// console.log(res);

// console.log('Исходная строка: ', str);
// console.log('Новая строка: ', newstr);


// const str3 = 'hello world hello'

// const res2 = str3.replaceAll(/\w+l{2}\w+/g, 'bye')

// console.log(res2);


// const str = 'First, I wake up. Then, I get dressed. I walk to school. I do not ride a bike. I do not ride the bus. I like to go to school at 13.00. It rains. I do not like rain. I eat lunch. I eat a sandwich and an apple.'


// console.log(str.replace('apple', 'potato').replaceAll(/\.\s/g, '! ').replace(/\.$/,'!'))


// const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
// const pattern = /^[A-Z]+$/i
// const pattern2 = /[A-Z]+/gi
// console.log(pattern2.test(text))
// Состоит ли строка только из букв
// true или false
// [A-Z]




// Singleton

// class Person {
//     constructor(name) {
//         if (Person.instance) {
//             return Person.instance;
//         } else {
//             this.name = name;
//             Person.instance = this;
//         }
//     }

//     run() {
//         console.log(`${this.name} runs`);
//     }
// }

// const p1 = new Person('Oleg');
// const p2 = new Person('Valerchik');

// p1.run();
// p2.run();

// console.log(p1 === p2);




// class Transport {
//     constructor(type, width, heigth) {
//         this.type = type;
//         this.width = width;
//         this.heigth = heigth;
//     }

//     transport(to) {
//         console.log(`You delivery to ${to} by ${this.type}`);
//     }
// }


// супер класс
// class Logistics {
//     constructorTransport(type) {
//         if (type === 'sea') {
//             return new Transport(type, 300, 200);
//         } else {
//             return new Transport(type, 150, 40);
//         }
//     }
// }

// const fabricLogistics = new Logistics();

// const fura = fabricLogistics.constructorTransport('ground');
// const korablik = fabricLogistics.constructorTransport('sea');

// console.log(fura);
// console.log(korablik);

// fura.transport('Minsk');
// korablik.transport('Mogilev');





// class WaterTransport {
//     constructor(type, speed, displacement) {
//         this.type = type;
//         this.speed = speed;
//         this.displacment = displacement;
//     }
//     transport(to) {
//         console.log(`You delivery to ${to} by ${this.type} with ${this.speed} sea miles`);
//     }
// }

// class GroundTransport {
//     constructor(type, speed, wheels) {
//         this.type = type;
//         this.speed = speed;
//         this.wheels = wheels;
//     }
//     transport(to) {
//         console.log(`You delivery to ${to} by ${this.type} with ${this.speed} kmph`);
//     }
// }

// function getWaterTypeTransport(type) {
//     if (type === 'sea') {
//         return new WaterTransport(type, 100, 3000);
//     } else if (type === 'river') {
//         return new WaterTransport(type, 200, 400);
//     }
// }

// function getGroundTypeTransport(type) {
//     if (type === 'asphalt') {
//         return new GroundTransport(type, 120, 10);
//     } else if (type === 'sand') {
//         return new GroundTransport(type, 40, 6);
//     }
// }

// function transportProducer(type) {
//     return type === 'water' ? getWaterTypeTransport : getGroundTypeTransport;
// }

// const waterFactory = transportProducer('water');
// const groundFactory = transportProducer('ground');

// const korablik = waterFactory('sea');
// const lodka = waterFactory('river');

// korablik.transport('Gomel');
// lodka.transport('Dobrush');

// const fura = groundFactory('asphalt');
// const buggie = groundFactory('sand');

// fura.transport('Eremino');
// buggie.transport('Selmash');




// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     walk(to) {
//         console.log(`${this.name} walks to ${to}`);
//     }
//     sleep(hours) {
//         console.log(`${this.name} sleeps ${hours} hours`);
//     }
// }

// class HumanProxy {
//     constructor (human) {
//         this.human = human;
//     }
//     walk (to) {
//         if (to === 'bar') {
//             console.log('he does not go anywhere!')
//         } else {
//             this.human.walk(to);
//         }
//     }
//     sleep (hours) {}
// }
// const proxiedHuman = new HumanProxy(new Person('Oleg'));
// proxiedHuman.walk('bar');
// proxiedHuman.walk('home');


// es5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.say = function () {
//     console.log(`${this.name} says hi`);
// };

// function Proger(tech, ...rest) {
//     Person.call(this, ...rest);
//     this.tech = tech;
// }

// Proger.prototype = Object.create(Person);
// Proger.prototype.constructor = Proger;


// class Human {
//     constructor () {

//     }
//     say() {

//     }
// }


