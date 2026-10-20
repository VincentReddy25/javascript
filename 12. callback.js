
// Callback function
const sayHi = () => {
    return "hello"
}
const execute = (callback) => {
    console.log(callback());
}
execute(sayHi)


// calls once
setTimeout(() => console.log("function called"), 1000)

// calls as per time
setInterval(() => console.log("function called"), 2000)