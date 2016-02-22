/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function generaTablaJuego()
{
    var dimensionTablaX = 6;
    var dimensionTablaY = 7;
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

function meterFicha(columna)
{
    var salir = false;
    var fila = 0;
    for (var i=0; i<tablero[columna].length && !salir;i++)
    {
        if (tablero[columna][i] === 0)
        {
            salir = true;
            fila = i;
        }
    }
    $("#"+columna+"-"+fila).css("background","red");
    tablero[columna][fila] = "X";
    
    // mirar cuatro en raya
    
}
function rellenarArray(x, y)
{
    for (var i = 0; i < x; i++) {
        tablero[i] = new Array();
    }
    for (var i = 0; i < x; i++) {
       
        for (var j = 0; j < y; j++)
        {
            tablero[i][j] = 0;
        }
    }

}


var tablero = new Array();
rellenarArray(4,4);

