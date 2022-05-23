const visor = document.querySelector('#visor')

let numeros = []

let numeros1 = []

let numeros2 = []

let sinal = ''

function getOperator(operator) {

    sinal = operator

    numeros = []

    numeros1.push(Number(visor.value))

    console.log(sinal)

    console.log(numeros1)

    visor.value = ''

}

function getNumber(num) {

    numeros.push(Number(num))

    if (numeros.lastIndexOf(num)) {

        if (numeros.lastIndexOf(0) == -1 && visor.value == 0) {

            visor.value = ''

        }
        
        visor.value += num
        console.log(numeros)

    }

}

function deleteNumber() {

    visor.value = 0
    sinal = ''
    numeros = []

}

function calcNumber() {

    let resultado = 0

    let resParcial = 0

    numeros = []

    numeros2.push(Number(visor.value))

    console.log('-----------------')
    console.log(numeros1)
    console.log('-----------------')

    console.log(sinal)

    console.log('-----------------')
    console.log(numeros2)
    console.log('-----------------')

    

    /*if (sinal == '/') {

        resultado = numero1 / numero2

    } else if (sinal == 'x') {

        resultado = numero1 * numero2

    } else*/ /*if (sinal == '-') {

        resParcial += numeros1[c]

    } else*/ if (sinal == '+') {

        for (let c = 0; c < numeros1.length; c++) {

            resParcial += numeros1[c]

        }

        resultado = resParcial + numeros2[0]
    }

    visor.value = Number(resultado)

    numeros1 = []
    numeros2 = []

    sinal = ''

}