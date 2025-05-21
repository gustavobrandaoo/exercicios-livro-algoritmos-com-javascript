const form = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");


form.addEventListener("submit", (event) =>{
    const medicamento = form.medicamento.value;
    const preco = Number(form.preco.value);

    const promocao = Math.floor(preco * 2);

    resp1.innerText = `Promoção de ${medicamento}`;
    resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`;

    event.preventDefault();
});