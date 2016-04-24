/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var jugador1 = "";
var jugador2 = "";
var dimensionTabla = 3;
var numTurnos = 0;
var finJuego = false;
var records = null;

$(document).ready(function () {

    $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .9, // Opacity of modal background
        in_duration: 800, // Transition in duration
        out_duration: 800, // Transition out duration
    }
    );
    records = Records.cargar();
    jugadoresHistorico();
    cambiarPantalla('pantallaLogin');
    generaTablaJuego();

});

function jugadoresHistorico()
{
    var opciones = "";
    for (var jugador in records.jugadores) {
        opciones += "<option value='" + jugador + "'>";
    }
    $("#jugadores").html(opciones);
}

function generaTablaJuego()
{
    var dimensionTabla = 3;
    $('#' + DIV_TABLA_JUEGO).html('');
    var tabla = "<table >";
    for (var i = 0; i < dimensionTabla; i++) {
        tabla += "<tr>";
        for (var j = 0; j < dimensionTabla; j++)
        {
            tabla += "<td  " +
                    ">";
            tabla += '<div id="' + i + '-' + j + '" onclick="pichoJugador(\'' + i + '-' + j + '\');" ></div>'
            tabla += "</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    $('#' + DIV_TABLA_JUEGO).html(tabla);

}

function restart()
{
    for (var i = 0; i < dimensionTabla; i++) {

        for (var j = 0; j < dimensionTabla; j++)
        {
            $("#" + i + '-' + j).css("background-image", "");
        }

    }

    cambiarPantalla(DIV_PANTALLA_LOGIN);

}

function tablaRecords() {
    cambiarPantalla(DIV_PANTALLA_RECORDS);
    records.pintaRecords("tablaRecords");
}

function comienzaJuego() {
    finJuego = false;
    numTurnos = 0;
    cambiarPantalla(DIV_PANTALLA_JUEGO);
    guardarJugadores();
    $("#jugadorActual").text(jugador1);
}

function eliminarJugadores()
{
    records = new Records();
    records.guardar();
    jugadoresHistorico();
    tablaRecords();

}

function guardarJugadores()
{
    jugador1 = $("#jugador1").val();
    jugador2 = $("#jugador2").val();
    records.addJugador(jugador1);
    records.addJugador(jugador2);
    records.guardar();
    jugadoresHistorico();
}

function cambiarPantalla(idPantalla)
{
    $("#" + DIV_PANTALLA_LOGIN).css('display', 'none');
    $("#" + DIV_PANTALLA_JUEGO).css('display', 'none');
    $("#" + DIV_PANTALLA_RECORDS).css('display', 'none');
    $("#" + idPantalla + "").css('display', 'block');
}



function pichoJugador(id)
{
    if (!finJuego) {
        var jugadorActual = "";
        var otroJugador = "";

        if ($("#" + id).css("background-image") === "none")
        {
            numTurnos++;
            jugadorActual = $("#jugadorActual").text();
            if ($("#jugadorActual").text() === jugador1)
            {
                $("#" + id).css("background-image", "url('img/X.png')");
                $("#jugadorActual").text(jugador2);
                otroJugador = jugador2;
            } else
            {
                $("#" + id).css("background-image", "url('img/O.png')");
                $("#jugadorActual").text(jugador1);
                otroJugador = jugador1;
            }

            if (compruebaTresEnRaya(id, jugadorActual))
            {
                $("#cabModal").text("Enhorabuena");
                $("#jugadorActual").text("");
                $("#ganador").html("Has Ganado <span class='textJugador'>" + jugadorActual + "</span>");
                $('#modal1').openModal();
                records.ganaJugador(jugadorActual);
                records.pierdeJugador(otroJugador);
                records.guardar();
                finJuego = true;
            } else if (numTurnos === 9)
            {
                $("#cabModal").text("Fin de Juego");
                $("#jugadorActual").text("");
                $("#ganador").html("No hay mas movimientos ");
                $('#modal1').openModal();
                records.empataJugador(jugador1);
                records.empataJugador(jugador2);
                finJuego = true;
            }



        }
    }
}


function compruebaTresEnRaya(id, jugadorActual)
{
    var columna = id.substring(0, 1);
    var fila = id.split("-")[1];
    var hayGanador = false;

    if (($("#" + columna + "-0").css("background-image") === $("#" + columna + "-1").css("background-image"))
            && ($("#" + columna + "-0").css("background-image") === $("#" + columna + "-2").css("background-image")))
    {
        hayGanador = true;
    } else if (($("#0-" + fila).css("background-image") === $("#1-" + fila).css("background-image"))
            && ($("#0-" + fila).css("background-image") === $("#2-" + fila).css("background-image")))

    {
        hayGanador = true;
    } else if ((fila === columna) && ($("#0-0").css("background-image") === $("#1-1").css("background-image"))
            && ($("#0-0").css("background-image") === $("#2-2").css("background-image")))
    {
        hayGanador = true;
    } else if (($("#0-2").css("background-image") !== "none") && ($("#0-2").css("background-image") === $("#1-1").css("background-image"))
            && ($("#0-2").css("background-image") === $("#2-0").css("background-image")))
    {
        hayGanador = true;
    }

    return hayGanador;

}
