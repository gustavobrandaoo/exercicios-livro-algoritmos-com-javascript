const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const numero = Number(form.numero.value);

    if (numero % 2 === 0) {
        resp.innerText = `${numero} é par.`
    } else {
        resp.innerText = `${numero} é impar.`
    }
});