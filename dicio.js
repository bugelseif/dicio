let projects = [];

fetch('dados.json')
    .then(response => response.json())
    .then(data => {
        projects = data;
    })
    .catch(error => console.error('Erro ao carregar dados.json:', error));

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
