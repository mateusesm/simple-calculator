const visor = document.querySelector('#visor')

let numbersVisor = []

let numbersCalc = []

let sinal = ''

let finalResult = 0

let parcialResult = 0

function calculate(num = []) {

    let result = 0

    if (sinal != '') {

        if (sinal == '+') {

            result = num[0] + num[1]

        }else if (sinal == '-') {

            result = num[0] - num[1]

        }else if (sinal == 'x') {

            result = num[0] * num[1]

        }else if (sinal == '/') {

            result = num[0] / num[1]
        }

    }

    return result

}

function getOperator(operator) {

    sinal = operator

    if (parcialResult == '') {

        numbersCalc.push(Number(visor.value))

        console.log(numbersCalc)

        visor.value = ''

    }else {

        visor.value = ''
        numbersCalc = []

    }

}

function getNumber(num) {

    numbersVisor.push(Number(num))

    if (numbersVisor.lastIndexOf(num)) {

        visor.value += num

    }

    if (sinal != '') {

        numbersCalc.push(Number(visor.value))

        console.log(numbersCalc)

        if (parcialResult == '') {

            parcialResult = calculate(numbersCalc)

            console.log(parcialResult)

            numbersCalc = []
        
        }else {
        
            let lastNumber = numbersCalc.pop()
        
            numbersCalc = []
        
            numbersCalc.push(parcialResult)
        
            numbersCalc.push(lastNumber)
        
            parcialResult = calculate(numbersCalc)

            console.log(parcialResult)

            numbersCalc = []
        
        }
   

    }
    
}

function deleteNumber() {

    visor.value = ''
    sinal = ''
    numbersVisor = []
    numbersCalc = []
    finalResult = 0
    parcialResult = 0

}

function equality() {

    finalResult = parcialResult

    visor.value = finalResult

    numbersVisor = []
    numbersCalc = []
    parcialResult = 0
    finalResult = 0
    sinal = ''

}