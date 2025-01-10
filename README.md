# js-dom-1
Esercizio: Primi passi con DOM

CONSEGNA:
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta “Spegni”
Al secondo click la lampadina si spegne e nel bottone compare la scritta “Accendi”
E così via...


LOGICA:
- Creo le variabili di: bottone; luceSpenta, luceAccesa (const). Esterne alla funzione 
- Uso una variabile Booleana per verificare lo stato della lampadina
- Applico una funzione per azionare il bottone e attuare tutte le modifiche necessarie al codice
-Se la luce è accesa vado a spegnerla 
 cambio il testo del bottone
 rimuovo la classe "spegni"

- Altrimenti se la luce è spenta si accende 
  cambio il testo del bottone il "Spegni"
  aggiungo la classe spegni (già crata nel file css) per modificare lo sfondo

infine alterno lo stato della luce potendo cosi ripetere il gesto finchè voglio