console.log("Inside the Toggle Menu file!");

const hamburger = document.querySelector('.hamburger-content');
const navBarMenu = document.querySelector('.nav-container');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBarMenu.classList.toggle("active");
    console.log("here!");
})

const navList = document.querySelectorAll('.nav-item')

navList.forEach(e =>
    e.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navBarMenu.classList.remove("active");
    }));

const outSourceLinks = document.querySelectorAll('.out-source a');

outSourceLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents click from propagating to nav-item's event listener
    });
});
    