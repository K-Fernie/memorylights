const startBtn = document.getElementById("start_btn");
const gameInstruction = document.getElementsByTagName("header")[0];

let userClicks = [];
const randArray3 = [
  Math.floor(Math.random() * 9),
  Math.floor(Math.random() * 9),
  Math.floor(Math.random() * 9),
];
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
    }
    console.log(userClicks);
  });
  //append new div to the bulb section
  bulbSection.appendChild(newDiv);
}

function round1() {
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
