//importante cerca di fare piu commenti specifici che ti aiuteranno in futo , NON MOLLARE 

const chessboard = document.querySelector('.chessboard');  //qui viene selezzionata la classe chessboard
for (let i = 0; i < 64; i++) {                             //questo è un ciclo for che si ripete 64 volte
    const square = document.createElement('div');          //crea un nuovo elemento <div> grazie a createElement 
    square.classList.add('square');                        //classList crea e aggiunfe la class square , 
    chessboard.appendChild(square);                        //appendChild inserisce un elemento all'interno di un altro elemento (concetto padre figlio come flex)  , einserisce 

    // Assegnazione dei colori alle caselle
    if (Math.floor(i / 8) % 2 === 0) { //allinterno delle (i / 8) ricordati che il numero massimo che puo arrivare , imposto io il numero massimo

        square.classList.add(i % 2 === 0 ? 'white' : 'black');  //in base al risultato viene creata e inserita la classe o white o black
    } else {
        square.classList.add(i % 2 === 0 ? 'black' : 'white');  //
    }
}

//nota bene cosa faccio acorcio e uso la concatenazione ? 
//mi faccio la domanda percher non ricordo 