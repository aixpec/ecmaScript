/* Operador de Reposo */

const obj = {
    name: 'Andres',
    age: '31',
    country: 'Gt'
};

let { name, ...all } = obj;
console.log(name, all);

/* Propagación para unir elementos entre objetos*/

const obj = {
    name: 'Andrés',
    age: '31',
}

const obj1 =  {
    ...obj,
    country: 'Gt',
}

console.log(obj1);

/* Promise.finally */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
         ? setTimeout(() => 
             resolve('helloWorld')
         , 3000)
         : reject(new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))

/* Regex */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match= regexData.exec('2018-04-23');
const year= match[1];
const month= match[2];
const day= match[3];

console.log(year,month,day);