let firstWord = prompt('Inserisci prima parola')
let secondWord = prompt('Inserisci seconda parola')

if (firstWord.length > secondWord.length){
    console.log(firstWord , secondWord)
}else if (secondWord.length > firstWord.length){
    console.log(secondWord, firstWord)
} else {
    console.log('Le parole hanno la stessa lunghezza')
}