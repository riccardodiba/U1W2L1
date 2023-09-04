/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVIi vari tipi di datatype sono: String String
Questo tipo di dato è una sequenza di caratteri,
Number
Questo tipo di dato è numerico,Boolean Può assumere solo i valori true o false,Null
Questo dato lo trovo nelle variabili che ho dichiarato ma a cui non ho ancora assegnato un valore,Undefined
Questo dato lo trovo quando qualcosa non è stato ben definito in una variabile a cui ho assegnato un valore.
E così via
 */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.

*/

/* SCRIVI QUIl LA TUA RISPOSTA */
let namefirst="Riccardo"
console.log(namefirst)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1=12
let number2=20
console.log=(number1+number2)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let x =12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const name="Di Bari"+/
const cognome="di bari"
/*lasciando cosi nella console si genera un errore */
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const subtrasction=4-x
console.log("il risultato della sottrazione è",subtrasction)





/*D1.js:69  Uncaught TypeError: console.log is not a function
    at D1.js:69:9   esce come errore */




/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1="jonh"
let name2="Jonh"
console.log(name1 === name2) //false
console.log(name1!=name2)//true
console.log(areEquallLowercase)//true
console.log(name1.toLowerCase()===name2.toLowerCase())
