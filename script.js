var array = [];
fetchData();
// FETCH
function fetchData() {
    fetch("http://localhost:3000/capi")
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        array = data;
        array.map(function (e) {
            var capo = new Capo(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
            console.log(capo);
            console.log("Sconto sul capo: ", capo.getsaldocapo());
            console.log("Prezzo finale del capo: ", capo.getacquistocapo());
        });
    });
}
// CLASS
var Capo = /** @class */ (function () {
    function Capo(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
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
    Capo.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };
    ;
    Capo.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    ;
    return Capo;
}());
