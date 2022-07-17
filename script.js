//window.onload = function;
function bulbCreation() {
  for (i = 0; i < 9; i++) {
    const bulbSection = document.getElementById("bulb_section");
    //create new Div
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "light_container");
    newDiv.innerHTML = `<span class="material-symbols-outlined light_bulb">lightbulb</span>`;
    //append new div to the bulb section
    bulbSection.appendChild(newDiv);
  }
}

window.onload = bulbCreation;
