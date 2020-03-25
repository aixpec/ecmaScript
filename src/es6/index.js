
/**
 * Default Params
 */
function newFunction(name, age, country) {

    var name = name | 'andres';
    var age = age | 31;
    var country = country | 'GT';
    console.log(name,age,country);

}

// es6
function newFunction2(name = 'andres', age=31, country='GT'){
    console.log(name,age,country);
}

newFunction2();
newFunction2('luis',25,'PA');

/*Template Literals*/
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

/* Multilines Strings */
let lorem = "Quiero escribir una frase épica como Hello World \n"
+ "o cualquier otra frase épica";

let lorem2 = `Otra frase épica que necesitamos
ahora es otra frase épica`;

console.log(lorem);
console.log(lorem2);

/**  Destruct Objects */
let person = {
    'name' : 'oscar',
    'age' : 44,
    'country' : 'Gt'
};

console.log(person.name, person.age);

let { name,age } = person;

console.log(name,age);


/* Spread Operator es6 */
let team1 = ['Oscar', 'Julian', 'Andres'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

/* Let & Const */


{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

//no modifiable
const a = 'b';
log(a);


/* Object Params */
let name = 'Andrés';
let age = '31';

obj = { name: name, age: age };

obj2 = { name, age };

//es6
console.log(obj);
console.log(obj2);


/* Arrow Functions */
const names = [
    { name: 'Andres', age: 31},
    { name: 'Karen', age: 27}
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

//es6
let listOfNames2 = names.map(item => console.log(item.name));

/* Other
const listOfName3 = (name,age) => {
    ...
}

const listOfName5 = name => {
    ...
}
*/

const square = num => num * num;

/* Promises */
const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if(true)
            resolve('Hey!');
        else
            reject('Ups!');
    })
}

helloPromise()
    .then(response => console.log(response))
    .then( console.log('otro then'))
    .catch(error => console.log(error));


/* Class */
class calculator {
    
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


/* Modules */ 
import { hello } from './module';

hello();

/* generator */
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

