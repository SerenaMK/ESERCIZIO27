var array = [];

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
                
                console.log(capo);
                console.log("Sconto sul capo: ", capo.getsaldocapo());
                console.log("Prezzo finale del capo: ", capo.getacquistocapo());
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