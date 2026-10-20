// 1. Function Declaration
function myFun1() {
    return "something"
}
myFun1()

// 2. Functions Expression
const myFun2 = function () {
    return "something"
}
myFun2()

// 3. Arrow Functions
const myFun3 = () => {
    return "something"
}
myFun3()

// 3. Arrow Functions (short version)
const myFun4 = () => "something"
myFun4()


// 4. IIFE - Immediately Invoked Function Expression
(() => {
    // Login 
}) 
();