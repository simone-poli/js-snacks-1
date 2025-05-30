const firstNumber= Number(prompt('Inserisci primo numero'))

const secondNumber= Number(prompt('Inserisci secondo numero'))

if (firstNumber > secondNumber){
    console.log ('Il numero maggiore è:', firstNumber)
}else if (secondNumber > firstNumber){
    console.log ('Il numero maggiore è:' , secondNumber)
} else {
    console.log ('I numeri sono pari')
}