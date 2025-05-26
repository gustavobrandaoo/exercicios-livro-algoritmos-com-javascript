const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const numero = Number(form.numero.value);
    const raiz = Math.sqrt(numero);

    if (Number.isInteger(raiz)) {       // Number.isInteger(); verificar se é um número inteiro.
        resp.innerText = `Raiz: ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para ${numero}`
    }
});