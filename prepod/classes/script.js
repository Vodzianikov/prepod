// const handleObjects = (obj, key, action = 'get') => {
//     switch (action) {
//         case 'get':
//             return obj[key];
//         case 'add':
//             obj[key] = '';
//             return obj;
//         case 'delete':
//             delete obj[key];
//             return obj;
//         default:
//             return obj;
//     }
// };

// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// };

// const result = handleObjects(student, 'programmingLanguage', 'delete');
// console.log('result', result);


// const test = {
//     age: 20,
//     name: 'Valerchik'
// };


// function isEmptyObj(obj) {
//     const keys = Object.keys(obj);
//     return keys.length ? false : true;
//     // return Object.keys(obj).length ? false : true;
// }


// console.log(isEmptyObj(test));



// function Book(author, bookName, pageAmount) {
//     this.author = author;
//     this.bookName = bookName;
//     this.pageAmount = pageAmount;
// }

// const books = [
//     new Book('Толстой', 'Война и мир', 400),
//     new Book('Роулинг', 'Гарри Поттер', 600),
//     new Book('ГАИ', 'Правила дорожного движения', 30),
//     new Book('Стивен Кинг', 'Под куполом', 700),
//     new Book('Толкиен', 'Властелин Колец', 400),
//     new Book('Пушкин', 'Золотая рыбка', 550),
//     new Book('Булгаков', 'Мастер и Маргаритта', 200),
//     new Book('Даль', 'Толковый словарь', 400),
// ];


// function getBiggerBook(booksArr) {
//     let maxIndex = 0;
//     let maxObjValue = booksArr[maxIndex].pageAmount;
//     for (let i = 0; i < booksArr.length; i++) {
//         if (booksArr[i].pageAmount > maxObjValue) {
//             maxObjValue = booksArr[i].pageAmount;
//             maxIndex = i;
//         }
//     }
//     return booksArr[maxIndex];
// }

// console.log(getBiggerBook(books));


// const maxObj = books.reduce((acc, currentObj) => {
//     return acc.pageAmount > currentObj.pageAmount ? acc : currentObj
// })

// console.log(maxObj);



// function Book(author, bookName, pageAmount) {
//     this.author = author;
//     this.bookName = bookName;
//     this.pageAmount = pageAmount;
// }


// class Book {
//     constructor (author, bookName, pageAmount) {
//         this.author = author;
//         this.bookName = bookName;
//         this.pageAmount = pageAmount;
//     }
// }



// # - проватое поле - private
// по умолчанию все поля публичные - public
// инстанс - экземпляр
// constructor - инициализация полей


// class User {

//     // #birthDay = 2002
//     static initialValue = {
//         name: 'David',
//         age: 30
//     }

//     // инициализация полей
//     constructor(name, age) {
//         this.name = name || User.initialValue.name;
//         this.age = age || User.initialValue.age;
//     }
//     sayHi() {
//         console.log(`${this.name} say hi`);
//     }
//     // showBirth () {
//     //     console.log(`${this.#birthDay}`)
//     // }

// }


// const user1 = new User('John', 20);
// const user2 = new User();
// // console.log(user1.name);
// // console.log(user1.age);
// console.log(user1);
// console.log(user2);

// user1.sayHi();
// user1.showBirth();



// Наследование
// const date = new Date();
// console.log(date);




// class User {
//     static #MAX_INSTANCES = 3;
//     static #instances = 0;
//     name;
//     constructor(name) {
//         User.#instances++;
//         if (User.#instances > User.#MAX_INSTANCES) {
//             console.log('Невозможно создать экземпляр класса User');
//         }
//         this.name = name;
//     }

//     static isUser(user) {
//         return user instanceof User;
//     }

//     walk () {
//         console.log(`${this.name} can walk`)
//     }
// }

// const player1 = new User('Зидана');
// new User('Рауль');
// new User('Месси');

// const isUser = User.isUser(player1);

// console.log(isUser);


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     walk() {
//         console.log(`${this.name} can walk`);
//     }
// }

// class Programmer extends Person {
//     constructor(expYears, ...params) {
//         super(...params);
//         this.expYears = expYears;
//     }
//     code() {
//         console.log(`${this.name} can write code`);
//     }
//     walk() {
//         console.log('Programmer walks');
//     }
// }

// const pr1 = new Programmer('2', 'Peter', 35);

// pr1.code();
// pr1.walk();

// console.log(pr1);



// function Auto(brand, color) {
//     this.brand = brand;
//     this.color = color;
// }

// Auto.prototype.drive = function () {
//     console.log(`${this.brand} can drive`);
// };

// class Car {
//     constructor (brand, color) {
//         this.brand = brand;
//         this.color = color;
//     }
//     drive() {
//         console.log(`${this.brand} can drive`);
//     };
// }

// const bmw = new Auto('BMW', 'black');
// const nissan = new Auto('Nissan', 'white');



// bmw.drive();
// nissan.drive();

// console.log(bmw.drive === nissan.drive);
// console.log(bmw)

// принцип ООП - наследование


class Animal {
    constructor (name) {
        this.name = name
    }
    makeSound () {}
}

class Dog extends Animal {
    constructor (name) {
        super(name)
    }
    makeSound () {
        console.log('Гав-гав')
    }
}

class Horse extends Animal {
    constructor (name) {
        super(name)
    }
    makeSound () {
        console.log('Иго-го')
    }
}


class FBPlayer {
    constructor (name, club) {
        this.name = name
        this.club = club
    }
    shot () {}
    pass() {}
    celebrate () {}
}


class GK extends FBPlayer{
    constructor (name, club) {
        super(name, club)
    }
    shot () {
        console.log('Не оч сильный удар')
    }
    pass() {
        console.log('Вообще не умею')
    }
    celebrate () {
        console.log('ну так себе')
    }
}