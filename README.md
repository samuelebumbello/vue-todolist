# Vue Todolist

## Descrizione

Rifare l’esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:

-   `text`, una stringa che indica il testo del todo
-   `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no

**MILESTONE 1**
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.

**MILESTONE 2**
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

**MILESTONE 3**
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

**Bonus:**

1. oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2. cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa)

## Steps

**Steps Milestone 1**

1. Creare un'array di object contenente:

-   _Text_ e _Done_

2. Stampare le task nell'HTML
3. Creare al Click dell'li che se la classe _Done_ è true viene visualizzato il testo tagliato.

**Steps Milestone 2**

1. Creare nell'li un font "x" che quando viene cliccato rimuove la task (@click.stop che mi permette di interrompere l'evento che lo precede)

**Steps Milestone 3**

1. Creare un input text e un bottone "Add"
