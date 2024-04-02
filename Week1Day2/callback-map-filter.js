//!---------------Functional Programming
function MyCallBackFunction() {
    console.log("start")
}

setTimeout();
MyCallBackFunction()


//?===== Arrow function

// 1 - Arrow Function
const nameOfTheFunction = () => {
    console.log("hii")
}
nameOfTheFunction()

// 2 - Arrow Function
//! CallBack Function
setTimeout(() => {
    
}, 5000);

// 2 - Arrow Function
const functionName = () => console.log("hello")

//----Freeze

const arr = Object.freeze([1, 2, 3, 4]);
arr.push(45)


// concat

const c = [1,,0,0,2,,0,0]


//?============MAP==============


const animals = ["leopard🐆", "giraffe🦒", "zebra🦓", "elephant🐘", "monkey🙈", "lion🦁"];

// for (let index = 0; index < animals.length; index++) {
//     animals[index] = "cool " +  animals[index]
// }
// console.log(animals)

const MapArray = animals.map((example,idx) => {
    return `${idx} - cool ${example}`
})
console.log(MapArray)
console.log(animals)



//?============Filter==============

// const newArr =[]
// // for (let index = 0; index < animalsTwo.length; index++) {
    
    // //     if (animalsTwo[index].length <= 5) {
        // //         newArr.push(animalsTwo[index])
        
        // //     }
        // // }
        // console.log(newArr)
        
const animalsTwo = ["leopard🐆", "giraffe🦒", "ra🦓", "el🐘", "monkey🙈", "lion🦁"];
const FilteredAnimals = animalsTwo.filter((elm) => {
            return elm.length <= 5
})
console.log(FilteredAnimals)





