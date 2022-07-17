const startBtn = document.getElementById("start_btn");
const gameInstruction = document.getElementsByTagName("header")[0];

let userClicks = [];
let randArray3 = [
  Math.floor(Math.random() * 9),
  Math.floor(Math.random() * 9),
  Math.floor(Math.random() * 9),
];

function lost() {
  gameInstruction.innerText =
    'Wrong Selection... you lost, click "Start Game" to try again';
  resetGame();
}

function resetGame() {
  startBtn.style.display = "block";
  userClicks = [];
  randArray3 = [
    Math.floor(Math.random() * 9),
    Math.floor(Math.random() * 9),
    Math.floor(Math.random() * 9),
  ];
}

function checkWin() {
  win = false;

  if (userClicks.length == 1) {
    if (userClicks[0] == randArray3[0]) {
      gameInstruction.innerText = "Good Start, two more to go!";
    } else {
      lost();
    }
  } else if (userClicks.length == 2) {
    if (userClicks[1] == randArray3[1]) {
      gameInstruction.innerText = "You're doing great! Get that last one!";
    } else {
      lost();
    }
  } else if (userClicks.length == 3) {
    if (userClicks[2] == randArray3[2]) {
      gameInstruction.innerText = `You won!!
      Click "Start Game" if you would like to play again`;
      resetGame();
    } else {
      lost();
    }
  }
}
//window.onload = function;
function bulbCreation() {
  const bulbSection = document.getElementById("bulb_section");
  //create new Div
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "light_container");
  newDiv.setAttribute("id", `${i}`);
  newDiv.innerHTML = `<span class="material-symbols-outlined light_bulb">lightbulb</span>`;

  newDiv.addEventListener("click", () => {
    if (userClicks.length < 3) {
      userClicks.push(Number(newDiv.getAttribute("id")));
      checkWin();
    }
    console.log(userClicks);
  });
  //append new div to the bulb section
  bulbSection.appendChild(newDiv);
}

function round1() {
  startBtn.style.display = "none";
  gameInstruction.innerText = "Watch the lights closely...";
  const allLights = document.getElementsByClassName("light_bulb");
  //allLights.item(1).style.color = "yellow";

  randArray3.forEach((element, i) => {
    setTimeout(() => {
      console.log(element);
      let bulb = allLights.item(element);
      bulb.style.color = "LightYellow";

      setTimeout(function () {
        bulb.style.color = "black";
      }, 600);
    }, i * 1000);
  });

  setTimeout(() => {
    gameInstruction.innerText = "Click the lights in the order they lit up";
  }, 3000);
}

//creating all the bulb elements
for (i = 0; i < 9; i++) {
  bulbCreation();
}

startBtn.addEventListener("click", round1);
