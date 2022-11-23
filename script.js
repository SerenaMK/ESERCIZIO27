// ATTENZIONE!!!
// APRIRE INDEX.HTML PER VEDERE LA TABELLA!
var array = [];
var table = document.getElementById("table");
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
            var color;
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
                default:
                    color = "light";
            }
            table.innerHTML += "\n                <tr>\n                    <th scope=\"row\">".concat(e.id, "</th>\n                    <td>").concat(e.codprod, "</td>\n                    <td>").concat(e.collezione, "</td>\n                    <td>").concat(e.capo, "</td>\n                    <td>").concat(e.modello, "</td>\n                    <td class=\"border-end border-dark\">").concat(e.quantita, "</td>\n                    <td class=\"table-").concat(color, " border border-dark\">").concat(e.colore, "</td>\n                    <td>").concat(e.prezzoivaesclusa, " &euro;</td>\n                    <td class=\"table-warning\">").concat(e.prezzoivainclusa, " &euro;</td>\n                    <td>").concat(e.disponibile, "</td>\n                    <td>").concat(e.saldo, "&percnt;</td>\n                    <td>").concat(capo.getsaldocapo().toFixed(2), " &euro;</td>\n                    <td class=\"table-success fw-bold\">").concat(capo.getacquistocapo().toFixed(2), " &euro;</td>\n                </tr>\n                ");
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
