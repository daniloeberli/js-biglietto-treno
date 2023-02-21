Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

1)Chiediamo all'utente il numero di km e l'età usando un prompt e definendo le due variabili di conseguenza, convertendole nel tipo numero.
2)Definiamo la variabile costo, come il prodotto della variabile numero di km * 0.21.
3)Se l'utente è minorenne, applichiamo sconto 20%, ovvero  prezzo = prezzo - sconto.
nel caso sia over 65, applichiamo lo sconto del 40%.
4)Infine stampiano in console il prezzo finale, a due cifre decimali (Arrotondamento a due cifre: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary)
