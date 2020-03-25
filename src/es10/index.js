/* flat */
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(3))

/*flat map*/
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value*2]));

/** trimStart*/
let hello = '         hello world';

console.log(hello);
console.log(hello.trimStart());


/* trimEnd*/
let hello = 'hello world     ';
console.log(hello);
console.log(hello.trimEnd());


/* Optional catch binding */
try {

}catch {
    error
}

/**  transformar arreglos a objetos */
let entries = [['name','andres'],['age',32]];
console.log(Object.fromEntries(entries));


/** */
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);