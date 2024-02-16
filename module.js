import { Employee } from './objects.js';
import { Person } from './objects.js';

const employee = new Employee('Ernesto', 25, 'Developer');

const greeting = employee.sayHello(); // 'Hello, my name is Ernesto and I'm 25 years old and I'm a Developer'

console.log(greeting); // 'Hello, my name is Ernesto and I'm 25 years old and I'm a Developer'

const employeeAlgatech = new Person('Mayolo', 33);

const greeting2 = employeeAlgatech.sayHello(); // 'Hello, my name is Mayolo and I'm 33 years old'

console.log(greeting2); // 'Hello, my name is Mayolo and I'm 33 years old'
