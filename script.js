let userClicks = [];

//window.onload = function;
function bulbCreation() {
  for (i = 0; i < 9; i++) {
    const bulbSection = document.getElementById("bulb_section");
    //create new Div
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "light_container");
    newDiv.innerHTML = `<span class="material-symbols-outlined light_bulb">lightbulb</span>`;
    newDiv.addEventListener("click", () => {
      console.log(newDiv);
    });
    //append new div to the bulb section
    bulbSection.appendChild(newDiv);
  }
}

function round1() {
  const allLights = document.getElementsByClassName("light_bulb");
  //allLights.item(1).style.color = "yellow";
  const randArray3 = [
    Math.floor(Math.random() * 9),
    Math.floor(Math.random() * 9),
    Math.floor(Math.random() * 9),
  ];

  randArray3.forEach((element, i) => {
    setTimeout(() => {
      let bulb = allLights.item(element);
      bulb.style.color = "LightYellow";

      setTimeout(function () {
        bulb.style.color = "black";
      }, 600);
    }, i * 1000);
  });
}

bulbCreation();
round1();
