const form = document.querySelector("form");
const resp = document.querySelector("pre");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const numero = Number(form.numero.value);

    let resposta = "";

    for (i=1; i <= 10; i++) {
        resposta = `${resposta} ${numero} x ${i} = ${numero * i} \n`
    }
    
    resp.innerText = resposta;
});