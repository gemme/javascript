

// constructor
/* function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  return "Hello, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old");
}

const employee = new Person('Ernesto', 25);
const greeting = employee.sayHello(); // 'Hello, my name is Ernesto and I'm 25 years old'
console.log(greeting); */

export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
    }
};

export class Employee extends Person {
    constructor(name, age, position) {
    super(name, age);
    this.position = position;
}

    sayHello() {
        return `${super.sayHello()} and I'm a ${this.position}`;
    }
}

const employee = new Employee('Ernesto', 25, 'Developer');
const greeting = employee.sayHello(); // 'Hello, my name is Ernesto and I'm 25 years old and I'm a Developer'
console.log(greeting);


// javascript es un lenguaje first class citizen

const obj = {
    name: 'Ernesto',
}
obj.lastName = 'Martinez';
console.log(obj);

function myFunction() {
    console.log('Hello');
}
// myFunction.name = 'Ernesto';