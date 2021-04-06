const hamburger = document.querySelector(".hamburger");
console.log(hamburger)

function handleClick() {
  console.log("Je recois le clic !");
  const menu = document.querySelector(".mobile-menu");
  menu.classList.toggle("active");
}


hamburger.addEventListener("click", handleClick);
