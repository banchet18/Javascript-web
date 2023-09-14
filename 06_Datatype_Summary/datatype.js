//---------------------primitive-----------------------------
//7 types => string,number,boolean,null,undefined,Symbol,Bigint.

const score = 100
const scoreValue = 100.3

const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);

const bignumber= 351451515151511851n

// Reference (Non primitive)

//Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga']
let myObj = {
    name : 'hitesh',
    age : 22
}

const myFunction = function (){
    console.log('hello world');
}


console.log(typeof bignumber);

console.log(typeof outsideTemp);

console.log(typeof heros);