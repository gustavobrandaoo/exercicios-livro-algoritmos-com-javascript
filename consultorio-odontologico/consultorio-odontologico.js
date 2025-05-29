const form = document.querySelector("form");
const respostaNome = document.querySelector("span");
const respostalista = document.querySelector("pre");

const pacientes = []    //vetor global

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.paciente.value;       //nome para diferenciar de pacientes.
    pacientes.push(nome);

    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respostalista.innerText = lista;
    form.paciente.value = ""
    form.paciente.focus();
})


//adiconar ouvinte botão urgenicia:

form.urgencia.addEventListener("click", () => {
    if (!form.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em carácter urgência");
        form.paciente.focus();
        return;
    }

    const nome = form.paciente.value;
    pacientes.unshift(nome);    //adiciona paciente inicio do vetor.
    let lista = ""

    //forEach aplicado sobre o array pacientes.

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`))
    
    respostalista.innerText = lista;
    form.paciente.value = ""
    form.paciente.focus();
});

form.atender.addEventListener("click", () => {
    //se o tamanho do vetor = 0
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        form.paciente.focus();
        return;
    }

    const atender = pacientes.shift();      //remove do ínicio da fila (e obtém o nome)
    respostaNome.innerText = atender;
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`))
    respostalista.innerText = lista;
});