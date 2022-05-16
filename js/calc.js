var visor = document.querySelector('#visor')

var sinal = ''

var numero1 = 0

var numero2 = 0

function getOperador(operador) {

    sinal = operador

    numero1 = Number(visor.value)

    visor.value = ''

}

function botao(num) {

    if (visor.value == 0) {

        visor.value = ''

    }
    
    visor.value += num

}

function apagar() {

    visor.value = 0

}


function igual() {

    numero2 = Number(visor.value)

    let resultado = ''

    if (sinal == '/') {

        resultado = numero1 / numero2

    } else if (sinal == 'x') {

        resultado = numero1 * numero2

    } else if (sinal == '-') {

        resultado = numero1 - numero2

    } else if (sinal == '+') {

        resultado = numero1 + numero2

    }

    visor.value = resultado

    sinal = ''

}