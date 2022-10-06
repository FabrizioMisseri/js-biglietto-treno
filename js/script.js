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
console.log(km, typeof(km));
//utente input età
const eta = parseInt(prompt("inserisci la tua età"));
console.log(eta, typeof(eta));



//FASE ELABORAZIONE DATI
//init var prezzo base = 0.21*km
//init var prezzo totale = vuoto
//if età < 18 then: prz_tot = prz_base * 0.8
            //else-if età > 65 then: prz_tot = prz_base * 0.6
                // else: prz_tot = prz_base


//FASE DI OUTPUT
//stampa a schermo (alert) prz_tot


