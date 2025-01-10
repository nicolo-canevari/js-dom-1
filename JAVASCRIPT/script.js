// variabili per bottone e i due 'stati' della lampadina
document.addEventListener('DOMContentLoaded', function () {
    const bottone = document.getElementById('accendiBtn');
    const luceSpenta = document.getElementById('luce_spenta');
    const luceAccesa = document.getElementById('luce_accesa');

    // Variabile Booleana "Accesa o spenta"
    let luceAccesaStatus = false;


    // funzione per azionare il bottone e cambiare scritta
    bottone.addEventListener('click', function () {

        if (luceAccesaStatus) {

            // Se la luce è accesa, spegnila
            luceSpenta.style.display = 'block';
            luceAccesa.style.display = 'none';

            // Cambia il testo del bottone
            bottone.value = 'Accendi';

            // Rimuove la classe "spegni" , cambia lo sfondo
            bottone.classList.remove('spegni');

        } else {

            // Se la luce è spenta, accendila
            luceSpenta.style.display = 'none';
            luceAccesa.style.display = 'block';

            // Cambia il testo del bottone
            bottone.value = 'Spegni';

            // Aggiungi la classe "spegni" , cambia lo sfondo
            bottone.classList.add('spegni');
        }

        // Alterna lo stato della luce
        luceAccesaStatus = !luceAccesaStatus;

    });


});
