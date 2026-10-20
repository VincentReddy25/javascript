const generateTable = () => {
  event.preventDefault();
  let userInput = document.getElementById("user-input");
  let display = document.getElementById("display");

  if (userInput.value <= 0) return;

  display.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    display.innerHTML += `
        <p>${userInput.value} X ${i} = ${userInput.value * i}</p>
    `;
  }
};
