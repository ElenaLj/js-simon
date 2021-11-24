
//variabile di riferimento al container dei numeri
const numContainer = document.querySelector(".container");
// console.log(numContainer);

//invoco la funzione in un ciclo for perché mi servono 5 numeri random
let numArray = [];

for (let i = 0; i < 5; i++){
    // console.log(i);
    numArray.push(getRandomNumber());
}

console.log(numArray);
numContainer.innerHTML = numArray;

//timing function
setTimeout(insertNumber, 2000);


// ******************************* funzioni

//questa funzione genera un numero casuale da 1 a 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

//questa funzione fa partire il timer di 30s
function insertNumber (){
    numContainer.innerHTML = "";
    // const insertNumbers = parseInt(prompt("Inserisci i numeri appena visualizzati"));
}