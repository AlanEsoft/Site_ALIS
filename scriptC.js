document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
        }, index * 700);
    });
});
