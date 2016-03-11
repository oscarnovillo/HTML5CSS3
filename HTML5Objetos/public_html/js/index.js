/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tablero = null;
$(document).ready(function () {
    tablero = new Tablero(2, 2);
    for (var i = 0; i < 2; i++)
    {

        for (var j = 0; j < 2; j++)
        {
            tablero.setCelda(i, j, i + "-" + j);
        }
    }

});


