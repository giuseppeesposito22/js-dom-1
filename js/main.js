const lightOnEl = document.getElementById("light-on");
const lightOffEl = document.getElementById("light-off");
const buttonLightEl = document.getElementById("button-light");

console.log(lightOffEl.className.includes("d-inline-block"));

buttonLightEl.addEventListener("click", () => {
  if (lightOffEl.className === "") {
    lightOnEl.className = "d-inline-block";
    buttonLightEl.textContent = "spegni";
    lightOffEl.className = "d-none";
  } else {
    lightOnEl.className = "d-none";
    buttonLightEl.textContent = "accendi";
    lightOffEl.className = "";
  }
});
