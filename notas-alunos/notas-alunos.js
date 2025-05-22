const form = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");


form.addEventListener("submit", (event) =>{

    event.preventDefault();

    const nome = form.nome.value;
    const primeiraNota = Number(form.primeiraNota.value);
    const segundaNota = Number(form.segundaNota.value);

    const media = (primeiraNota + segundaNota) / 2;

    resp1.innnerText = `Média das Notas ${media.toFixed(2)}`;

    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a).`
        resp2.style.color = "blue"
    } else if (media >= 4) {
        resp2.innerText = `Atenção ${nome}! Você está em exame.`
        resp2.style.color = "green"
    }else {
        resp2.innerText = `Continua estudando ${nome}! Você foi reprovado(a).`
        resp2.style.color = "red"
    };

});