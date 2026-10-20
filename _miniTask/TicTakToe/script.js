
let player1 = []
let player2 = []
let successChances = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let boxes = document.querySelectorAll(".box")
let flag = true
let message = document.getElementById("message")
let gameOver = false


const resetBtn = () => {
    player1 = []
    player2 = []
    gameOver = false
    flag = true
    message.innerHTML = "Welcome"
    boxes.forEach(box => {
        box.innerHTML = ""
    })
}

const checkWinner = (playerMoves) => {
    return successChances.some((pattern) =>
        pattern.every((index) => playerMoves.includes(index))
    )
}

boxes.forEach((box, index) => {
    box.addEventListener('click', (event) => {
        if (gameOver || event.target.innerHTML != "") return

        if (flag) {
            event.target.innerHTML = "X"
            player1.push(index)
            flag = !flag

            if (checkWinner(player1)) {
                message.innerHTML = "player 1 wins"
                gameOver = true
            }
        } else {
            event.target.innerHTML = "O"
            player2.push(index)
            flag = !flag

            if (checkWinner(player2)) {
                message.innerHTML = "player 2 wins"
                gameOver = true
            }
        }
    })
})

