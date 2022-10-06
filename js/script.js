//TESTO ESERCIZIO:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



//FASE DI INPUT DATI 
//utente input km da percorrere
let km = parseInt(prompt("inserisci kilometri da percorrere"));
while (km % 1 != 0) {
    alert("non hai inserito un numero, scimmia ...");
    km = parseInt(prompt("dai riprova puoi farcela... metti un numero non è difficile..."))
}
//utente input età
let eta = parseInt(prompt("inserisci la tua età"));
while (eta % 1 != 0) {
    alert("non hai inserito un numero, scimmia ...");
    eta = parseInt(prompt("dai riprova puoi farcela... metti un numero non è difficile..."))
}



//FASE ELABORAZIONE DATI
//init var prezzo base = 0.21*km
let prz_base = km * 0.21;
console.log("prezzo base è ", prz_base, typeof(prz_base));
//init var prezzo totale = vuoto
let prz_tot = 0;
console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
//if età < 18 then: prz_tot = prz_base * 0.8
if (eta < 18) {
    prz_tot = prz_base * 0.8;
    console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
}
    //else-if età > 65 then: prz_tot = prz_base * 0.6
else if (eta > 65) {
    prz_tot = prz_base * 0.6;
    console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
}
        // else: prz_tot = prz_base
if (18 <= eta && eta <= 65) {
    prz_tot = prz_base;
    console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
}
//troncare decimali non richiesti
prz_tot = prz_tot.toFixed(2);



//FASE DI OUTPUT
//stampa a schermo (alert) prz_tot
alert(`${"il prezzo totale del tuo biglietto è di "}${prz_tot}${" euro"}`);

