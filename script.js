// ===============================
// 1. WELCOME MESSAGE
// ===============================

console.log("Welcome to Priyanka's Portfolio!");


// ===============================
// 2. TYPING EFFECT
// ===============================

const text = "AI/ML Engineer in the making";
const heading = document.querySelector(".home h2");

let index = 0;

function typeText() {
    if (index < text.length) {
        heading.textContent += text[index];
        index++;

        setTimeout(typeText, 80);
    }
}

heading.textContent = "";
typeText();


// ===============================
// 3. SCROLL REVEAL
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("show");
        }

    });

});


// ===============================
// 4. BUTTON CLICK MESSAGE
// ===============================

const projectButton = document.querySelector(".buttons .btn");

projectButton.addEventListener("click", function () {
    console.log("Opening Projects...");
});