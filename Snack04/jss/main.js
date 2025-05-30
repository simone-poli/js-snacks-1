let arrayNumbers=[]

for( i = 1; i <= 6; i++){
    let numbers = Number(prompt('Inserisci numeri'))
        if (numbers % 2 != 0)
           arrayNumbers.push(numbers)
}

console.log(arrayNumbers)

