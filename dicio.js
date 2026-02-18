// array de palavras
const dicionario = [
    {
        palavra: "Administration",
        traducao:"Administração",
        definicao:"The process or activity of running a business, organization, etc.",
        exemplos: [
            "Administration costs.",
            "A career in arts administration.",
            "The university administration took their demands seriously."
        ]
    },
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
        palavra: "Discuss",
        traducao:"Discutir",
        definicao:"Talk about (something) with another person or group of people.",
        exemplos: [
            "I discussed the matter with my wife."
        ]
    },
    {
        palavra: "Disease",
        traducao:"Doença",
        definicao:"A disorder of structure or function in a human, animal, or plant, especially one that has a known cause and a distinctive group of symptoms, signs, or anatomical changes.",
        exemplos: [
            "Bacterial meningitis is a rare disease.",
            "A possible cause of heart disease."
        ]
    },
    {
        palavra: "Equilibrium",
        traducao:"Equilíbrio",
        definicao:"A state of balance.",
        exemplos: [
            "The disease destroys much of the inner ear, disturbing the animal's equilibrium.",
            "The country's economic equilibrium"
        ]
    },
    {
        palavra: "Meeting",
        traducao:"Reunião",
        definicao:"An assembly of people, especially the members of a society or committee, for discussion or entertainment.",
        exemplos: [
            "The early-dismissal policy will be discussed at our next meeting.",
            "He intrigued her on their first meeting.",
        ]
    },    
];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * dicionario.length);
    return dicionario[randomIndex];
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
