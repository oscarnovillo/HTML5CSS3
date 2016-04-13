/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tablero = null;
$(document).ready(function () {
    tablero = new Tablero(6, 7);
    
    for (var i = 0; i < 6; i++)
    {

        for (var j = 0; j < 7; j++)
        {
            tablero.setCelda(i, j, i + "-" + j);
        }
    }



});

function meterFicha(col)
{
    if (tablero.meterFicha(col))
        alert("ha ganado");
}


