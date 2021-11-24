
//variabile di riferimento al container dei numeri
const numContainer = document.querySelector(".container");
// console.log(numContainer);

//array vuoto popolato con ciclo for
let numArray = [];

for (let i = 0; i < 5; i++){
    // console.log(i);
    numArray.push(getRandomNumber());
}

console.log(numArray);
numContainer.innerHTML = "Tieni a mente questi numeri " + numArray;

//timing function per svuotare il container dei numeri
setTimeout(emptyContainer, 30 * 1000);

//timing function per far partire i prompt
setTimeout(insertNumber, 31 * 1000);

// ******************************* funzioni

//questa funzione genera un numero casuale da 1 a 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

//questa funzione svuota il container
function emptyContainer (){
    numContainer.innerHTML = "";
}

//questa funzione fa partire i prompt
function insertNumber (){
    let userNumber = [];
    for (let i = 0; i < 5; i++){
        userNumber.push(parseInt(prompt("Inserisci un numero da 1 a 100")));
        console.log(userNumber);
    }
    //variabile di riferimento al div dei numeri indovinati
    let yourNumbers = document.querySelector(".numbers");
    yourNumbers.innerHTML += "I numeri che hai inserito sono: " + userNumber;
}