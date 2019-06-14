var icons = document.querySelectorAll(".hidden");

var bitSwitch = 0;

function testFadeIn() {

  if (bitSwitch == 0) {
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.remove("hidden");
      icons[i].classList.add("fade-in-element");
    }
    bitSwitch = 1;
  } else {
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.remove("fade-in-element");
      icons[i].classList.add("hidden");
    }
    bitSwitch = 0;
  }
}
