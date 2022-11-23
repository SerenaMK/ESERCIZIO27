// ATTENZIONE!!!
// APRIRE INDEX.HTML PER VEDERE LA TABELLA!

var array = [];
var table = document.getElementById("table") as HTMLElement;

fetchData();

// FETCH
function fetchData() {
    fetch("http://localhost:3000/capi")
        .then((response) => {
            return response.json();
        })
        .then((data: organizeData[]) => {
            array = data;
            array.map((e) => {
                let capo = new Capo(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
                let color: string;

                switch (e.colore) {
                    case "nero":
                        color = "dark";
                        break;
                    case "rosso":
                        color = "danger";
                        break;
                    case "beige":
                        color = "warning";
                        break;
                    case "verde":
                        color = "success";
                        break;
                    case "blu":
                        color = "primary";
                        break;
                }
                
                table.innerHTML += `
                <tr>
                    <th scope="row">${e.id}</th>
                    <td>${e.codprod}</td>
                    <td>${e.collezione}</td>
                    <td>${e.capo}</td>
                    <td>${e.modello}</td>
                    <td>${e.quantita}</td>
                    <td class="table-${color}">${e.colore}</td>
                    <td>${e.prezzoivaesclusa} &euro;</td>
                    <td class="table-warning">${e.prezzoivainclusa} &euro;</td>
                    <td>${e.disponibile}</td>
                    <td>${e.saldo}&percnt;</td>
                    <td>${capo.getsaldocapo().toFixed(2)} &euro;</td>
                    <td class="table-success fw-bold">${capo.getacquistocapo().toFixed(2)} &euro;</td>
                </tr>
                `;
            })
        })
}

// CLASS
class Capo implements organizeData {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(_id: number, _codprod: number, _collezione: string, _capo: string, _modello: number, _quantita: number, _colore: string, _prezzoivaesclusa: number, _prezzoivainclusa: number, _disponibile: string, _saldo: number) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }

    getsaldocapo(): number {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };

    getacquistocapo(): number {
        return this.prezzoivainclusa - this.getsaldocapo();
    };

}

// INTERFACE
interface organizeData {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
}