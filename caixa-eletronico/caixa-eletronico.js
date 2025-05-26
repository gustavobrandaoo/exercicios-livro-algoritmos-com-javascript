const form = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const saque = form.saque.value;

    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        form.saque.focus()      //cursor de volta no campo de saque
        return
    }

    const notasCem = Math.floor(saque / 100)
    let resto = saque % 100

    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50

    const notasDez = Math.floor(resto / 10)
    
    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notasDez}`
    }
});