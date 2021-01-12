var valor
var resultado
function botao (num) {
    valor = document.calc.visor.value += num
}

function apagar() {
    document.calc.visor.value = ''
}

function igual() {
    resultado = eval(valor)
    document.calc.visor.value = resultado
}