/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {
    cambiarPantalla('pantallaLogin');
    generaTablaJuego();
});

function generaTablaJuego()
{
    var dimensionTabla = 3;
    $('#' + DIV_TABLA_JUEGO).html('');
    var tabla = "<table style='width: 300px;height: 300px'>";
    for (var i = 0; i < dimensionTabla; i++) {
        tabla += "<tr>";
        for (var j = 0; j < dimensionTabla; j++)
        {
            tabla += "<td style=\"border:2px solid black;width: 100px;height: 100px\" " +
                    ">";
            tabla += '<div id="' + i + '-' + j + '" onclick="pichoJugador(\'' + i + '-' + j + '\');" style="background-size: 100px 100px;width: 100px;height: 100px"></div>'
            tabla += "</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    $('#' + DIV_TABLA_JUEGO).html(tabla);

}

function comienzaJuego() {
    cambiarPantalla(DIV_PANTALLA_JUEGO);
    guardarJugadores();
    $("#jugadorActual").text(jugador1);
}

function guardarJugadores()
{
    jugador1 = $("#jugador1").val();
    jugador2 = $("#jugador2").val();
}

function cambiarPantalla(idPantalla)
{
    $("#" + DIV_PANTALLA_LOGIN).css('display', 'none');
    $("#" + DIV_PANTALLA_JUEGO).css('display', 'none');
    $("#" + idPantalla + "").css('display', 'block');
}

var jugador1 = "";
var jugador2 = "";

var numTurnos =0;

function pichoJugador(id)
{
    // comente
var jugadorActual = "";

    if ($("#" + id).css("background-image") === "none")
    {
        numTurnos ++;
        jugadorActual = $("#jugadorActual").text();
        if ($("#jugadorActual").text() === jugador1)
        {
            $("#" + id).css("background-image", "url('/img/X.png')");
            $("#jugadorActual").text(jugador2);
        } else
        {
            $("#" + id).css("background-image", "url('/img/O.png')");
            $("#jugadorActual").text(jugador1);
        }
        if (numTurnos===9)
        {
            alert("JUEGO ACABADO");
        }
        
        compruebaTresEnRaya(id,jugadorActual);
            
    }
}


function compruebaTresEnRaya(id,jugadorActual)
{
    var columna= id.substring(0,1);
    var fila = id.split("-")[1];
    
    if (($("#" + columna+"-0").css("background-image") === $("#" + columna+"-1").css("background-image")) 
            && ($("#" + columna+"-0").css("background-image") === $("#" + columna+"-2").css("background-image") ) )
    {
        alert("HAS GANADO "+jugadorActual);
    }
    else if (($("#0-" + fila).css("background-image") === $("#1-" + fila).css("background-image")) 
            && ($("#0-" + fila).css("background-image") === $("#2-" + fila).css("background-image") ) )
 
    {
        alert("HAS GANADO "+jugadorActual);
    }
}
