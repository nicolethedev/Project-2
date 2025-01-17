console.log("Inside the Toggle Menu file!");

const hamburger = document.querySelector('.hamburger-content');
const navBarMenu = document.querySelector('.navBar');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBarMenu.classList.toggle("active");
    console.log("here!");
})