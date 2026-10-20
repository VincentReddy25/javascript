let menu = document.getElementById("menu")
let menubar = document.getElementById("menubar")

const showMenuBar = () => {
    menubar.classList.toggle("hideMenu")
}

menu.addEventListener('click', showMenuBar)
