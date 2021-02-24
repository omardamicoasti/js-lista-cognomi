// creazione array con i vari cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// definizione variabile cognomeInput che mi serviva in seguito quando stampo
var cognomeInput;
// input
listaCognomi.push(cognomeInput = prompt("Inserisci il tuo cognome con iniziale maiuscola"));
cognomeInput.toUpperCase(); // anche se non da errore non funziona e non lo rende uppercase

// lista da non ordinata ad ordinata
var listaCognomiOrdinata;
listaCognomiOrdinata = listaCognomi;
listaCognomiOrdinata.sort();


// stampa elenco nomi e posizione del cognome inserito in posizione umana e javascript
for (var i = 0; i < listaCognomiOrdinata.length; i++) {
    var tmp = document.getElementById("listaCognomiOrdinata").innerHTML;
    document.getElementById("listaCognomiOrdinata").innerHTML = tmp + "<li>" + listaCognomiOrdinata[i] + "</li>";
    if (listaCognomiOrdinata[i]== cognomeInput ) {
        document.getElementById("posizioneInput").innerHTML = "Il cognome " + cognomeInput + " è in posizione umana <b>" + (i + 1) + "</b> ed in posizione Javascript <b>" + i +"</b>";
    }
}



