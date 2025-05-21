const form = document.querySelector("#form");
const tituloresp = document.querySelector("#tituloresp");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
    const titulo = form.titulo.value;
    const duracao = Number(form.duracao.value);

    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    tituloresp.innerText = titulo;
    resultado.innerText = `${horas} hora(s) e ${minutos} minuto(s).`;

    event.preventDefault();  // Não recarregar.
});
































//    const titulo = document.querySelector("titulo");
//    const minutos = document.querySelector("minutos");