
function calc(n1) {
    let numero = document.querySelector("#visor").innerHTML += n1
}


function limpar() {
    let clear = document.querySelector("#visor").innerHTML = ""
}

function calcular() {
    let resultado = document.querySelector("#visor").innerHTML
    if (resultado) {
        document.querySelector("#visor").innerHTML = eval(resultado)
    }
}