const form = document.querySelector("form");
const textoveiculo = document.querySelector("#textoveiculo");
const entrada = document.querySelector("#entrada");
const parcelas = document.querySelector("#parcelas");

form.addEventListener ("submit", (event) =>{
    const veiculo = form.veiculo.value;
    const preco = Number(form.preco.value);

    const valorEntrada = preco * 0.50;
    const prestacao = valorEntrada / 12;

    textoveiculo.innerText = `Promoção: ${veiculo}`;
    entrada.innerText = `Entrada de R$: ${valorEntrada.toFixed(2)}`;
    parcelas.innerText = `+12x de R$ ${prestacao.toFixed(2)}`;

    event.preventDefault();
}); 