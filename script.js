const board = document.getElementById("board");

for (let i = 1; i <= 90; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = i;
  board.appendChild(cell);
}
let arrayNum = [];

const button = document.getElementById("numbtn");
button.addEventListener("click", () => {
  arrayNum.push(Math.round(Math.random() * 91));
  const div = document.querySelectorAll("div .cell");
  // se l'inner text del div = 1 numero nell'array dai una classe al div che cambierà il numero
  div.forEach((cella) => {
    for (let i = 0; i >= arrayNum.length; i++) {
      if (arrayNum[i] === cella.innerText) {
        cella.classList("red");
      }
    }
  });

  console.log(arrayNum);
});
