function generaBollettini() {

    let importoTotale = parseFloat(document.getElementById("importo").value);
    let importoLettere = document.getElementById("importoLettere").value;
    let targa = document.getElementById("targa").value;
    let intestatario = document.getElementById("intestatario").value;
    let causale = document.getElementById("causale").value;
    let dataInizio = new Date(document.getElementById("dataInizio").value);
    let eseguitoDa = document.getElementById("eseguitoDa").value;
    let via = document.getElementById("via").value;
    let cap = document.getElementById("cap").value;
    let localita = document.getElementById("localita").value;
    let numRate = parseInt(document.getElementById("rate").value);
    let tipo = document.getElementById("tipo").value;

    /* if (isNaN(importoTotale) || !importoLettere || !intestatario || !causale || isNaN(numRate)) {
        alert("Compila tutti i campi correttamente!");
        return;
    } */

    let importoRata = (importoTotale / numRate).toFixed(2);
    let bollettiniHTML = "";

    for (let i = 0; i < numRate; i++) {
        let dataPagamento = new Date(dataInizio);
        if (tipo === "settimane") {
            dataPagamento.setDate(dataInizio.getDate() + (i * 7));
        } else {
            dataPagamento.setMonth(dataInizio.getMonth() + i);
        }

        let dataFormato = dataPagamento.toLocaleDateString("it-IT");

        bollettiniHTML += `
            <div class="bollettino print-only">
                <h3>Bollettino di pagamento</h3>
                
                <p><strong>Importo:</strong> €${importoRata} / (${importoLettere})</p>
                <p><strong>Intestatario:</strong> ${intestatario}</p>
                <p><strong>Causale:</strong> ${causale} ${targa.toUpperCase()}</p>
                <p><strong>Data di Pagamento:</strong> ${dataFormato}</p>
                <p><strong>Eseguito da:</strong> ${eseguitoDa}</p>
                <p><strong>Indirizzo:</strong> ${via}, ${cap}, ${localita}</p>
                <hr>
            </div>
        `;
    }

    document.getElementById("bollettini").innerHTML = bollettiniHTML;
    document.getElementById("stampa").style.display = "block";
}