// Declaring an Array (Type 1)
let arr1 = new Array();
arr1[0] = 10;
arr1[1] = "hello";

// Declaring an Array (Type 2)
let arr2 = [512, 34.52, "bye", true, null]

arr2.push("value")
arr2.pop()

arr2.unshift("value")
arr2.shift()

for (const i of arr2) {
    console.log(i);
}

arr2.forEach((value, index, arr) => {})
arr2.map((value, index, arr) => {})
arr2.filter((value, index, arr) => {})
arr2.reduce((value, index, arr) => {})

let arr3 = [1, 2, 3, ...arr1, ...arr2] // rest operator

// Destructuring
let [a, b] = arr2

