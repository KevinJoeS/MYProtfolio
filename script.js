// LOADING SCREEN
window.addEventListener("load", () => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 600);
});

// NAVBAR ACTIVE HIGHLIGHT ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (pageYOffset >= top) current = section.getAttribute("id");
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// MOBILE MENU
document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("show");
});

// SCROLL REVEAL
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);
reveal();