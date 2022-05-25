const visor = document.querySelector('#visor')

let numerosVisor = []

let numeroCalc = 0

let sinal = ''

let resultadoFinal = 0

function calcular(n1, n2) {

    let resultado = 0

    if (sinal != '') {
   
        if (sinal == '/') {
        
            resultado = n1 / n2

        } else if (sinal == 'x') {

            resultado = n1 * n2

        } else if (sinal == '-') {

            resultado = n1 - n2

        } else if (sinal == '+') {

            resultado = n1 + n2

        }

    }

    return resultado

}

function getOperator(operator) {

    sinal = operator

    numerosVisor = []

    numeroCalc = Number(visor.value)

    resultadoFinal = calcular(numeroCalc, resultadoFinal)

    console.log(`numeroCalc: ${numeroCalc}`)

    console.log(`${sinal}`)

    console.log(`resultadoFinal: ${resultadoFinal}`)

    visor.value = ''

    numeroCalc = 0

}

function getNumber(num) {

    numerosVisor.push(Number(num))

    if (numerosVisor.lastIndexOf(num)) {

        if (numerosVisor.lastIndexOf(0) == -1 && visor.value == 0) {

            visor.value = ''

        }
        
        visor.value += num

        numeroCalc = Number(visor.value)

        resultadoFinal = calcular(numeroCalc, resultadoFinal)

        console.log(`numerosVisor: ${numerosVisor}`)

        console.log(`numeroCalc: ${numeroCalc}`)

        console.log(`${sinal}`)

        console.log(`resultadoFinal: ${resultadoFinal}`)

    }

}

function deleteNumber() {

    visor.value = 0
    sinal = ''
    numerosVisor = []
    resultadoFinal = 0

}

function calcNumber() {

    visor.value = Number(resultadoFinal)
    console.log(`O resultado é: ${resultadoFinal}`)

    console.log('-----------------')

    numeroCalc = 0
    resultadoFinal = 0

    sinal = ''

}