
// hoisting
// const hello3
console.log(
    hello('Ernesto', 'Martinez') // 'Hello, World!'
);

// function expression
const hello2 = function () {
    return 'Hello, World2!';
}
console.log(
    hello2() // 'Hello, World!'
);

console.log(
    hello3() // 'Hello, World!'
);
// de forma implicita ya tiene un return
const hello4 = () => 'Hello, World4!';
const hello5 = () => {
    // code ...
    // code ...
    return 'Hello, World4!';
};

// closures
function outer() {
    let count = 0;
    return function inner() {
        console.log(this);
        count++;
        return count;
    }
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4


class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    sayHello() {
        console.log(this);
        return `Hello, my name is ${this.name} ${this.lastname}`;
    }
}

const person = new Person('Ernesto', 'Martinez');
console.log(
    person.sayHello() // 'Hello, my name is Ernesto Martinez'
);

// function declaration
function hello (name, lastname) {
    console.log(arguments); //[name, lastname]
    console.log(this);
    console.log(this.global);
    return 'Hello, World1!';
}

// arrow functions
const hello3 = () => {
    // no existe arguments
    // this es el mismo que el de la funcion que lo contiene
    return 'Hello, World3!';
}