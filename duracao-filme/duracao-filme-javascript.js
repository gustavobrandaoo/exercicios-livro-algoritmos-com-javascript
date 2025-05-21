const forma = document.querySelector("#forma")
const tituloresp = document.querySelector("#tituloresp");
const resultado = document.querySelector("#resultado");

forma.addEventListener("submit", (event) => {
    const titulo = forma.titulo.value;
    const duracao = Number(forma.duracao.value);

    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;;

    tituloresp.innerText = titulo;
    resultado.innerText = `${horas} hora(s) e ${minutos} minuto(s).`

    event.preventDefault();  // Não recarregar.
});
































//    const titulo = document.querySelector("titulo");
//    const minutos = document.querySelector("minutos");