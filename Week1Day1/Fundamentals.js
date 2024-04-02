//? ==============Scope

var name = "bob"

function SayHi() {
     name ="alice"
console.log(name)    
}

SayHi() //? 
console.log(name)// ?



//? ==============Hoisting
// var x
console.log("hello",x)
let x = "bob"



const num = 5 

num =6

console.log(num)

//! primitive data type

// String
// Number
// Boolean
// Null / undefined
//! complex DataTypes
// Arrays 
// Objects

const numbers = [55, 56, 45]

numbers[1] = 74

numbers.push(85)


console.log(numbers)


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
}

person = "Bobi"

console.log(person)

for (let index = 0; index < 5; index++) {
    // const element = array[index];
    console.log("---",index)
}

console.log(index)


//?====== Destructuring
const student = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

const name = student.lastName
console.log(name) 
console.log(student.firstName) 

const { firstName, email } = student
console.log(email)

const animals = [, ,, 'cat', 'bird'];

// console.log(animals[3])

const [, cat, , animal,anotherOne] = animals
console.log(cat,animal,anotherOne)




//?====== Rest/Spread

//
const a = [1, 2, 3, 4]
const b = [100000,...a]

// b.push(100000)




console.log(a) // [1,2,3,4,10000]
console.log(b) // [1, 2, 3, 4]
