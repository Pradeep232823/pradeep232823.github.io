const text = ["Full Stack Developer", "Python Developer", "Web Developer"];
let index = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function type() {
    if (charIndex < text[index].length) {
        typingElement.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 90);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 60);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 200);
    }
}

type();

window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
