const form = document.querySelector("form");
const resposta = document.querySelector("pre");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let chinchilas = Number(form.chinchilas.value);
    let anos = Number(form.anos.value);

    let repeticao = "" 

    for (i = 0; i <= anos; i++) {
        
        repeticao += `${i}º Ano: ${chinchilas} Chinchilas \n`
        chinchilas = chinchilas * 3
    }

    resposta.innerText = repeticao;
});