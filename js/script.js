// alert("Hello World");

//variabile di riferimento al container dei numeri
const numContainer = document.querySelector(".container");
// console.log(numContainer);

//questa funzione genera un numero casuale da 1 a 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

//invoco la f.ne per generare un numero
// getRandomNumber();
// console.log(getRandomNumber());

//invoco la funzione in un ciclo for perché mi servono 5 numeri random
for (let i = 0; i < 5; i++){
    // console.log(i);
    numContainer.innerHTML += getRandomNumber() + " ";
}