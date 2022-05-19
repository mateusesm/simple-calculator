const visor = document.querySelector('#visor')

var sinal = ''

var numeros = []

function getOperator(operator) {

    sinal = operator

    let numeroDigitado = Number(visor.value)

    numeros.push(numeroDigitado)

    visor.value = ''

}

function getNumber(num) {

    if (visor.value == 0 && num != 0 ) {

        let nNotZero = visor.value.replace('0', '')

        visor.value = nNotZero

    }

    visor.value += num   
  

}

function deleteNumber() {

    visor.value = 0
    sinal = ''
    numeros = [0]

}


function calcNumber() {

    let resultado = 0

    let segundoNumero = Number(visor.value)

    numeros.push(segundoNumero)

    /*if (sinal == '/') {

        resultado = numero1 / numero2

    } else if (sinal == 'x') {

        resultado = numero1 * numero2

    } else if (sinal == '-') {

        resultado = numero1 - numero2

    } else*/ if (sinal == '+') {

        for (let c = 0; c < numeros.length; c++) {

            resultado += numeros[c]

        }
    }

    visor.value = Number(resultado)

    sinal = ''

    numeros = [0]

}