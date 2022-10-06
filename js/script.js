//TESTO ESERCIZIO:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



//FASE DI INPUT DATI 
//utente input km da percorrere
const km = parseInt(prompt("inserisci kilometri da percorrere"));
console.log("km da percorrere ", km, typeof(km));
//utente input età
const eta = parseInt(prompt("inserisci la tua età"));
console.log("la tua età ", eta, typeof(eta));



//FASE ELABORAZIONE DATI
//init var prezzo base = 0.21*km
let prz_base = km * 0.21
console.log("prezzo base è ", prz_base, typeof(prz_base));
//init var prezzo totale = vuoto
let prz_tot = 0
console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
//if età < 18 then: prz_tot = prz_base * 0.8
if (eta < 18) {
    prz_tot = prz_base * 0.8
    console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
}
    //else-if età > 65 then: prz_tot = prz_base * 0.6
else if (eta > 65) {
    prz_tot = prz_base * 0.6
    console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
}
        // else: prz_tot = prz_base
if (18 <= eta <= 65) {
    prz_tot = prz_base
    console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
}


//FASE DI OUTPUT
//stampa a schermo (alert) prz_tot


