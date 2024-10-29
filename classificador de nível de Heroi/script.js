const heroi = {
    nome:"",
    xp:"",
    nivel:"",
};

heroi.nome = prompt("Digite o nome do herói: ");
heroi.xp = parseInt(prompt("Digite a quantidade de experiencia do heroi: "));


if (heroi.xp < 1000) {
    heroi.nivel = "Ferro";
} else if (heroi.xp <= 2000) {
    heroi.nivel = "Bronze";
} else if (heroi.xp <= 5000) {
    heroi.nivel = "Prata";
} else if (heroi.xp <= 7000) {
    heroi.nivel = "Ouro";
} else if (heroi.xp <= 8000) {
    heroi.nivel = "Platina";
} else if (heroi.xp <= 9000) {
    heroi.nivel = "Ascendente";
} else if (heroi.xp <= 10000) {
    heroi.nivel = "Imortal";
} else {
    heroi.nivel = "Radiante";
}

// Exibir a mensagem final
alertvictor(`O Herói de nome ${heroi.nome} está no nível de ${heroi.nivel}.`);


