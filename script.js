const square = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const mole = document.querySelectorAll(".mole");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
  });

  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  // assigning randomPosition id
  hitPosition = randomPosition.id;
}

square.forEach((hit) => {
  hit.addEventListener("mouseup", () => {
    if (hit.id === hitPosition) {
      result += 1;
      score.textContent = result;
    }
  });
});

function changeMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 800);
}

changeMole();

function countdown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerId);
    alert("GAME OVER YOUR FINAL SCORE IS : " + result);
    window.location.reload();
  }
}

let timerId = setInterval(countdown, 1000);
