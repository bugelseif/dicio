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
        palavra: "Algorithm",
        traducao:"Algoritmo",
        definicao:"A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.",
        exemplos: [
            "A basic algorithm for division.",
            "The Fibonacci sequence algorithm."
        ]
    },
    {
        palavra: "Automation",
        traducao:"Automação",
        definicao:"The use of technology to perform tasks with little or no human intervention.",
        exemplos: [
            "I work developing automations.",
            "The automation of office tasks."
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
        palavra: "Browser",
        traducao:"Navegador",
        definicao:"A computer program with a graphical user interface for displaying and navigating between web pages.",
        exemplos: [
            "A web browser.",
            "I search for the page in the browser."
        ]
    },
    {
        palavra: "Computer",
        traducao:"Computador",
        definicao:"An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.",
        exemplos: [
            "My computer is frozen.",
            "There is a hugely expensive new computer system."
        ]
    },
    {
        palavra: "Cook",
        traducao:"Cozinhar",
        definicao:"Prepare (food, a dish, or a meal) by combining and heating the ingredients in various ways.",
        exemplos: [
            "Shall I cook dinner tonight?",
            "I hate cooking."
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
        palavra: "Huge",
        traducao:"Enorme",
        definicao:"Extremely large; enormous.",
        exemplos: [
            "A huge area.",
            "This could be the start of something huge for you.",
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
    {
        palavra: "Phishing",
        traducao:"Phishing",
        definicao:"The fraudulent practice of sending emails or other messages purporting to be from reputable companies in order to induce individuals to reveal personal information, such as passwords and credit card numbers.",
        exemplos: [
            "Respondents named ransomware and phishing as leading security concerns.",
        ]
    },
    {
        palavra: "Void",
        traducao:"Vazio",
        definicao:"Not valid or legally binding.",
        exemplos: [
            "The contract was void.",
            "What were once the masterpieces of literature are now void of meaning."
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
