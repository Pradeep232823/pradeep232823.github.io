// Typing effect
const text = ["Data Analyst"];
let index = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function type() {
    if (!typingElement) return;

    if (charIndex < text[index].length) {
        typingElement.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 90);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (!typingElement) return;

    if (charIndex > 0) {
        typingElement.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 60);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

// Scroll reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
