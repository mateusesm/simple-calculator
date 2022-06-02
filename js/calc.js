const visor = document.querySelector('#visor')

let numbersCalc = []

let sinal = []

let parcialResult = 0

let finalResult = 0

function calculate(num = []) {

    let result = 0

    if (sinal != '') {

        if (sinal.length > 1) {

            switch (sinal[0]) {

                case '+':
                    result = num[0] + num[1]
                break
    
                case '-':
                    result = num[0] - num[1]
                break
    
                case 'x':
                    result = num[0] * num[1]
                break
    
                case '/':
                    result = num[0] / num[1]
                break
    
            }

            let lastSinal = sinal.pop()

            sinal = []

            sinal.push(lastSinal)

        } else if (sinal.length == 1) {

            switch (sinal[0]) {

                case '+':
                    result = num[0] + num[1]
                break
    
                case '-':
                    result = num[0] - num[1]
                break
    
                case 'x':
                    result = num[0] * num[1]
                break
    
                case '/':
                    result = num[0] / num[1]
                break
    
            }

        }

        return result

    }

}

function getOperator(operator) {

    sinal.push(operator)

    if (numbersCalc == '') {

        numbersCalc.push(Number(visor.value))

        visor.value = ''

    }else {

        numbersCalc.push(Number(visor.value))
        
        parcialResult = calculate(numbersCalc)

        visor.value = parcialResult
        numbersCalc = []

    }

}

function getNumber(num) {

   if (sinal != '' && visor.value == parcialResult) {

        visor.value = ''

   }

    visor.value += num

}

function deleteNumber() {

    visor.value = ''
    sinal = []
    numbersCalc = []
    finalResult = 0
    parcialResult = 0

}

function equality() {

    if (parcialResult != '') {

        numbersCalc.push(parcialResult)

        numbersCalc.push(Number(visor.value))

        parcialResult = calculate(numbersCalc)

    }else {

        numbersCalc.push(Number(visor.value))

        parcialResult = calculate(numbersCalc)

    }

    finalResult = parcialResult

    visor.value = finalResult

    numbersCalc = []
    sinal = []
    parcialResult = 0
    finalResult = 0
   
}