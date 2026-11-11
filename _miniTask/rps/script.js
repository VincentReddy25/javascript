const display = document.getElementById("display");
const systemHand = ["rock", "paper", "scissor"];

const checkWinner = (hand) => {
  const randNo = Math.floor(Math.random() * 3);
  const computer = systemHand[randNo];

  if (computer === hand) {
    display.innerHTML = "Match tie";
  } else if (
    (hand === "rock" && computer === "scissor") ||
    (hand === "paper" && computer === "rock") ||
    (hand === "scissor" && computer === "paper")
  ) {
    display.innerHTML = "You win";
  } else {
    display.innerHTML = "System wins";
  }
};