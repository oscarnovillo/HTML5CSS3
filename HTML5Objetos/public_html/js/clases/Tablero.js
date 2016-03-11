/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Tablero(x, y) {
    this.celdas = new Array();
    for (var i = 0; i < x; i++)
    {
        this.celdas[i] = new Array();
        for (var j = 0; j < y; j++)
        {
            this.celdas[i][j] = new Celda();
        }
    }

    this.setCelda = function (i, j, celda) {
        this.celda[i][j].eleHtml = celda;
    };
    this.meterFicha = function (i) {
        for (var i = 0; this.celdas.length; i++)
    };

}

