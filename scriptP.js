let currentIndex = 0;
let timer = 10000;
const titles = ["ENGENHARIA DE SOLUÇÕES E TREINAMENTO NA AMEAL", "AMEAL CURSOS", "ENGENHARIA DE SOLUÇÕES E TREINAMENTO NA AMEAL",
                "AMEAL CURSOS", "ENGENHARIA DE SOLUÇÕES E TREINAMENTO NA AMEAL"];
const images = ["imagens/computer_class.png", "imagens/courses.png", "imagens/computer_class.png",
                "imagens/courses.png", "imagens/computer_class.png"];
const descriptions = ["Na manhã de segunda-feira, 02 de setembro de 2024, a ALIS Solutions realizou a "+
                    "primeira palestra do treinamento dos colaboradoes desta ilustre instituição.", "Curso preparatório para os concursos da PMAL e CBMAL.",
                    "Na manhã de segunda-feira, 02 de setembro de 2024, a ALIS Solutions realizou a "+
                    "primeira palestra do treinamento dos colaboradoes desta ilustre instituição.", "Curso preparatório para os concursos da PMAL e CBMAL.",
                    "Na manhã de segunda-feira, 02 de setembro de 2024, a ALIS Solutions realizou a "+
                    "primeira palestra do treinamento dos colaboradoes desta ilustre instituição."];

function changeContent(index) {
    document.getElementById('title').innerText = titles[index];
    document.getElementById('main-image').src = images[index];
    document.getElementById('description').innerText = descriptions[index];
    document.querySelectorAll('.nav-button').forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });
}

function changeImage(index) {
    currentIndex = index;
    changeContent(currentIndex);
    clearInterval(autoChange);
    timer = 30000;
    autoChange = setInterval(nextImage, timer);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % titles.length;
    changeContent(currentIndex);
    timer = 10000;
    clearInterval(autoChange);
    autoChange = setInterval(nextImage, timer);
}

let autoChange = setInterval(nextImage, timer);
