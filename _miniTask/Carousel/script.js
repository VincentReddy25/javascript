let display = document.getElementById("display")
let movePrev = document.getElementById("move-prev")
let moveFwd = document.getElementById("move-fwd")

let scrollAmount = display.clientWidth

moveFwd.addEventListener('click', () => {
    display.scrollLeft += scrollAmount
})
movePrev.addEventListener('click', () => {
    display.scrollLeft -= scrollAmount
})