document.addEventListener("DOMContentLoaded", () => {
    const awardsSection = document.querySelector(".awards");
    const hamburger = document.querySelector(".hamburger");
    const darkMood= document.querySelector(".dark-mood");
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo");

    window.addEventListener("scroll", () => {
        const awardsOffsetTop = awardsSection.offsetTop;
        
        if (window.scrollY >= awardsOffsetTop) {
        hamburger.classList.add("red-mood");
        header.classList.add("red-mood");
        logo.classList.add("red-mood");
        // header.classList.remove("default-mood");
        darkMood.classList.add("red-mood");
        } else {
        hamburger.classList.remove("red-mood");
        // header.classList.add("default-mood");
        header.classList.remove("red-mood");
        logo.classList.remove("red-mood");
        darkMood.classList.remove("red-mood");
        }
    });
});