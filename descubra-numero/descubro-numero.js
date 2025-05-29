const form = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = [];

const sorteado = Math.floor(Math.random() * 100) + 1;   //num aleatoria entre 1 e 100.

const CHANCES = 6

form.addEventListener("submit", event => {
    event.preventDefault();

    const numero = Number(form.inNumero.value);

    if (numero == sorteado) {
        respDica.innerText = `Parabéns! Número sorteado: ${sorteado}`
        form.btSubmit.disabled = true  //troca status dos botões.
        form.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)) {
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero)      //adiciona o numero ao vetor.
            const numErros = erros.length;
            const numChances = CHANCES - numErros;  //calcula numero de erros.

            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances

            if (numChances == 0) {
                alert("Suas chances acabaram...")
                form.btSubmit.disabled = true;
                form.btNovo.className = "exibe";
                respDica.innerText = `Game Over! Número Sorteado: ${sorteado}`
            } else {
                //usa operador ternário para mensagem da dica.
                const dica = numero < sorteado ? "maior" : "menor";
                respDica.innerText = `Dica: tente um número ${dica} que ${numero}`
            }
            
        }
    }
    form.inNumero.value = ""
    form.inNumero.focus()
})

form.btNovo.addEventListener ("click", () => {
    location.reload();
})