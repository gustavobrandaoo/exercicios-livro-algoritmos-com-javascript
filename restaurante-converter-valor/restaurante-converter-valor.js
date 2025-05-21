const form = document.querySelector("form");
const valorFinal = document.querySelector("#valorFinal");

form.addEventListener ("submit", (event) =>{
    const valorQuilo = Number(form.valorQuilo.value);
    const grama = Number(form.grama.value);

    const conversao = grama / 1000;
    const total = conversao * valorQuilo;

    valorFinal.innerText = `Valor a pagar R$: ${total.toFixed(2)}`

    event.preventDefault();
}); 

