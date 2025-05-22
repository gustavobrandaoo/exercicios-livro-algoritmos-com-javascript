const form = document.querySelector("form");
const resp = document.querySelector("#resp");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.nome.value;
    const masculino = form.masculino.checked;
    const altura = form.altura.value;

    let peso;

    //operador ternário
    //const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

    if (masculino) {    //if masculino == true
        peso = 22 * Math.pow(altura, 2);    //eleva ao quadrado.
    } else {
        peso = 21 * Math.pow(altura, 2);
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg`
});

form.addEventListener("reset", (event) => {
    resp.innerText = "";       //limpa o elemento h3.
})