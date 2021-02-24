var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(listaCognomi);

var cognomeInput;

listaCognomi.push(cognomeInput = prompt("Inserisci il tuo cognome"));
console.log(cognomeInput);

var listaCognomiOrdinata;
listaCognomiOrdinata = listaCognomi;
listaCognomiOrdinata.sort();

for (var i = 0; i < listaCognomiOrdinata.length; i++) {
    var tmp = document.getElementById("listaCognomiOrdinata").innerHTML;
    document.getElementById("listaCognomiOrdinata").innerHTML = tmp + "<li>" + listaCognomiOrdinata[i] + "</li>";
    if (listaCognomiOrdinata[i]== cognomeInput ) {
        document.getElementById("posizioneInput").innerHTML = "Il cognome " + cognomeInput + " è in posizione numero " + (i + 1);
    }
}

