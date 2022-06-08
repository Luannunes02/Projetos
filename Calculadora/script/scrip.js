function calcular(n1, n2) { /* função que vai calcular as variaveis n1 e n2*/

    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    selector = document.getElementById("selector").value

    switch (selector) {
        case '+':       /* vai fazer a soma */
            calculo = (n1 + n2)
            calculo = parseFloat(calculo.toFixed(2))
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é igual a ${calculo}`
            break
        case '-':           /* vai fazer a subtração */
            calculo = (n1 - n2)
            calculo = parseFloat(calculo.toFixed(2))
            document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} é igual a ${calculo}`
            break
        case '*':           /* vai fazer a multiplicação */
            calculo = (n1 * n2)
            calculo = parseFloat(calculo.toFixed(2))
            if (Number.isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = "Favor coloque números que seja possível multiplicar para te darmos o resultado :)"
            } else {
                document.getElementById("resultado").innerHTML = `O resultado da multiplicação de ${n1} * ${n2} é igual a ${calculo}`
                break
            }
        case '/':           /* vai fazer a divisão */
            calculo = (n1 / n2)
            calculo = parseFloat(calculo.toFixed(2))
            if (Number.isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = "Favor coloque números divisíveis para te darmos o resultado :)"
            } else {
                document.getElementById("resultado").innerHTML = `O resultado da divisão de ${n1} / ${n2} é igual a ${calculo}`
                break
            }
        case '%':           /* vai calcular a porcentagem */
            calculo = (n2 * 100)
            calculo = (calculo / n1)
            calculo = parseFloat(calculo.toFixed(2))
            if (Number.isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = "Favor coloque números que sejam possivel calcular a porcentagem para te darmos o resultado :)"
            } else {
                document.getElementById("resultado").innerHTML = `O número ${n2}, equivale a ${calculo}% de ${n1}`
                break
            }
    }
} 