const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fruta = form.fruta.value;
    const numero = Number(form.numero.value);

    let resultado = "" 

    
    for (i = 0; i  <numero; i++) {
        if (i == 0) {
            resultado += fruta;
        } else {
            resultado += ` * ${fruta}`;
        }
    }
    resp.innerText = resultado;
});