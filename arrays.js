const arr = [1, 2, 3, 3];

const obj = arr.reduce((accumulator, current) => {
    accumulator.name = 'employee';
    accumulator['age'+current] = current;
    return accumulator;
}, {});

console.log(obj);

const arr2 = arr.reduce((accumulator, current) => {
    accumulator.push(current*2);
    return accumulator;
}, []);

console.log(arr2);

const transformed = arr.map((el) => {
    return el + 1
}).filter(v => v > 2);
console.log(arr);
console.log(transformed);

Array.prototype.map2 = function(callback) { 
    const arr = [];
    this.forEach(v => {
        const newValue = callback(v);
        arr.push(newValue);
    })
    return arr;
}

const newArray = arr.map2(v => {
    return v + 10;
});

console.log(newArray);

const person = {
    name: 'Ernesto',
    age: 25 
};

for(const key in person) {
    console.log(person[key]);
}
//{}
//new Map(function(){}, 'hola')
// const key = {};
// WeakMap(key, value)
// WeakSet(key
// Set
// key = undefined;
