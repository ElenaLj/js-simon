
/* FUNZIONI */
function generaNumeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

/* VARIABILI */
let timer = 3;

//1. creo un array con 5 numeri casuali;
const numeriRandom = [];

for (let i = 0; i < 5; i++) {
    const num = generaNumeriRandom(1, 100);
    // console.log(num); 
    numeriRandom.push(num);
}

// console.log(numeriRandom);

// 2. li stampo in pagina;
const numeriCasualiEl = document.getElementById("numeri-casuali");
numeriCasualiEl.innerHTML = numeriRandom;

//2.b nascondo l'array dei numeri casuali (devo farlo in un'altra funzione setTimout perché Chrome esegue prima il prompt, anziché svuotare l'elemento);
setTimeout(function(){
    numeriCasualiEl.innerHTML = "";
}, timer * 1000);

//partono i 30 secondi;
setTimeout(function(){
    // console.log("Ciao dopo 3 secondi");

    //3. chiedo all'utente per 5 volte di inserire un numero
    const numeriUtente = [];

    for (let i = 0; i < 5; i++) {
        const num = parseInt(prompt("Inserisci un numero da 1 a 100"));
        numeriUtente.push(num);
    }
    // console.log(numeriUtente);

    //4. faccio il confronto dei due array
    const numeriValidi = [];
    for (let i = 0; i < numeriUtente.length; i++) {
        //5. verifico se il numero inserito dall'utente è presente nell'array dei numeri casuali
        // console.log(numeriUtente[i]);

        if(numeriRandom.includes(numeriUtente[i]) == true) {
            numeriValidi.push((numeriUtente[i]));
        }
    }
    
    // console.log(numeriValidi); 
    alert(`Hai indovinato ${numeriValidi.length} numeri. I numeri indovinati sono: ${numeriValidi}`)

}, timer * 1000);