//console.log("Hellow World from Node.JS");

// const tutorial = require('./tutorial');
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);


class Person extends EventEmitter {
    constructor (name) {
        super();
        this._name = name;
    }

    get name () {
        return this._name;
    }

}

let tester = new Person('Tester');
tester.on('name', () => {
    console.log('My name is ' + tester.name);
});

let bob = new Person('Bob');
bob.on('name', () => {
    console.log('My name is ' + bob.name);
});

tester.emit('name');
bob.emit('name');