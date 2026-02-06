// ================= TYPING EFFECT =================
const text = "Modern UI using HTML, CSS & JavaScript";
const typingElement = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function typeLoop() {
    if (!isDeleting && index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeLoop, 80);
    } else if (isDeleting && index > 0) {
        typingElement.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(typeLoop, 50);
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeLoop, 1000);
    }
}

window.addEventListener("load", typeLoop);

// ================= NAVBAR LOGIC =================
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// SCROLL → DARK MODE
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// CLICK ☰ → OPEN / CLOSE MENU
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
