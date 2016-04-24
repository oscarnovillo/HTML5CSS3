/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Records()
{
    this.jugadores = {};

    this.ordenarJugadores = function()
    {
        return Object.keys(this.jugadores).sort(function(a,b){
            if (records.jugadores[b].gana-records.jugadores[a].gana === 0)
                return records.jugadores[b].empata-records.jugadores[a].empata;
            else
                return records.jugadores[b].gana-records.jugadores[a].gana;});
        
    };

    this.addJugador = function (jugador) {
        if (typeof (this.jugadores[jugador]) === "undefined")
        {
            this.jugadores[jugador] = {};
            this.jugadores[jugador].jugadas = 0;
            this.jugadores[jugador].empata = 0;
            this.jugadores[jugador].gana = 0;
            this.jugadores[jugador].pierde = 0;
        }
    };

    this.jugadasJugador = function (jugador) {
        this.jugadores[jugador].jugadas = this.jugadores[jugador].jugadas + 1;
    }; 

    this.empataJugador = function (jugador) {
        this.addJugador(jugador);
        this.jugadasJugador(jugador);
        this.jugadores[jugador].empata = this.jugadores[jugador].empata + 1;
    };
    this.pierdeJugador = function (jugador) {
        this.addJugador(jugador);
        this.jugadasJugador(jugador);
        this.jugadores[jugador].pierde = this.jugadores[jugador].pierde + 1;
    };
    this.ganaJugador = function (jugador) {
        this.addJugador(jugador);
        this.jugadasJugador(jugador);
        this.jugadores[jugador].gana = this.jugadores[jugador].gana + 1;
    };

    this.guardar = function ()
    {
        localStorage.setItem("records", JSON.stringify(this.jugadores));
    };



    this.pintaRecords = function (divRecords)
    {
        var jugadoresOrdenados = this.ordenarJugadores();
        var tabla = "<table><tr><th>JUGADOR</th><th>PJ</th><th>G</th><th>E</th><th>P</th></tr>";
        for(var i=0; i<jugadoresOrdenados.length; i++){
            var jugador = jugadoresOrdenados[i];
            tabla += "<tr>";
            tabla += "<td>";
            tabla += jugador;
            tabla += "</td>";
            tabla += "<td >";
            tabla += this.jugadores[jugador].jugadas;
            tabla += "</td>";
            tabla += "<td >";
            tabla += this.jugadores[jugador].gana;
            tabla += "</td>";
            tabla += "<td >";
            tabla += this.jugadores[jugador].empata;
            tabla += "</td>";
            tabla += "<td >";
            tabla += this.jugadores[jugador].pierde;
            tabla += "</td>";
            tabla += "</tr>";
        };

        tabla += "</table>";
        $("#" + divRecords).html(tabla);
    };


}
Records.cargar = function () {
    var records = new Records();
    var jugadores = localStorage.getItem("records");
    if (jugadores !== null)
        records.jugadores = JSON.parse(jugadores);
    return records;
};
