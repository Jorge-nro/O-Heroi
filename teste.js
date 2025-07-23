let nome = prompt("Digite o nome do herói: ");
let xp = parseInt(prompt("Digite a quantidade de XP de " + nome));
let nivel = "";

if (xp < 1000) {
    nivel = "ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "prata"
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "platina"
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "imortal"
} else {
    nivel = "radiante"
}

alert ("O herói " + nome + " está no nível " + nivel);

const personagem = document.querySelector('.personagem');
personagem.classList.add(nivel);