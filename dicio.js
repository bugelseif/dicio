// array de palavras
const projects = [
    {
        palavra: "Apple",
        traducao:"Maçã",
        definicao:"A round fruit with firm, white flesh and a green, red, or yellow skin.",
        exemplos: [
            "He was munching on an apple.",
            "He took a bite out of the apple.",
            "The apple tree at the bottom of the garden is beginning to blossom.",
            "Newton reasoned that there must be a force such as gravity, when an apple fell on his head.",
            "Do you have any cooking apples?"
        ]
    },
    {
        palavra: "Equilibrium",
        traducao:"Equilíbrio",
        definicao:"A state of balance",
        exemplos: [
            "The disease destroys much of the inner ear, disturbing the animal's equilibrium.",
            "The country's economic equilibrium"
        ]
    },
    
];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * projects.length);
    return projects[randomIndex];
}

function displayWord(word) {
    document.getElementById('palavra').innerText = word.palavra;
    document.getElementById('traducao').innerText = word.traducao;
    document.getElementById('definicao').innerText = word.definicao;
    
    const exemplosContainer = document.getElementById('exemplos');
    exemplosContainer.innerHTML = '';
    word.exemplos.forEach(exemplo => {
        const li = document.createElement('li');
        li.innerText = exemplo;
        exemplosContainer.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const palavra = getRandomWord();
    console.log(palavra);
    displayWord(palavra);
});
