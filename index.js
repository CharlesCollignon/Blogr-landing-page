const hamburger = document.querySelector(".hamburger");
const closeDisplay = document.querySelector(".close");
console.log(hamburger)

function handleClick() {
  const menu = document.querySelector(".mobile-menu");

  hamburger.classList.toggle("active");
  closeDisplay.classList.toggle("active");
  menu.classList.toggle("active");
}


hamburger.addEventListener("click", handleClick);
closeDisplay.addEventListener("click", handleClick);
