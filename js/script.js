// alert("Hello World");

//variabile di riferimento al container dei numeri
const numContainer = document.querySelector(".container");
console.log(numContainer);

//questa funzione genera un numero casuale da 1 a 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
//invocare la f.ne
getRandomNumber();
console.log(getRandomNumber());

//output HTML
numContainer.innerHTML = getRandomNumber();