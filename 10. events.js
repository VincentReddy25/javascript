
const myFun = (event) => {
    console.log(event);
}


document.addEventListener('click', (event) => console.log("Button clicked: ", event))

document.addEventListener('mouseenter', (event) => console.log("mouse enter: ", event))

document.addEventListener("keydown", (event) => console.log(event))
document.addEventListener("keydown", (event) => console.log(event.key))

// Only if Web Page is scrolled
document.addEventListener('scroll', (event) => console.log(event))

document.addEventListener('DOMContentLoaded', (event) => console.log("DOM loaded: ", event))