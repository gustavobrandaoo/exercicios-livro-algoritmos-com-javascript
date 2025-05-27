const form = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

let resposta = ""
let numContas = 0
let valorTotal = 0

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const descricao = form.descricao.value;
    const valor = Number(form.valor.value);

    numContas++     //cada vez que clicar no botão, ele é ativado novamente.

    valorTotal = valorTotal + valor;

    //resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    resposta = `${resposta} ${descricao} - R$: ${valor.toFixed(2)}\n`
    
    resp1.innerText = `${resposta} ---------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`

    form.descricao.value = ""   //limpa os campos
    form.valor.value = ""

    form.descricao.focus();
});