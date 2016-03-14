/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Tablero(x, y) {

    this.ancho = x;
    this.alto = y;

    this.celdas = new Array();
    for (var i = 0; i < x; i++)
    {
        this.celdas[i] = new Array();
        for (var j = 0; j < y; j++)
        {
            this.celdas[i][j] = new Celda(i, j);
        }
    }

    this.ultimaCeldaOcupada = null;
    /**
     *  mensaje */
    this.setCelda = function (i, j, celda) {
        this.celdas[i][j].eleHtml = celda;
    };
    this.meterFicha = function (col) {

        // Mirar la ultima fila sin ocupar.

        // cambio la celda

        // pongo la ultimaCeldaOcupada a esa celda.

        return this.comprueba4raya();
    };

    this.comprueba4raya = function () {
        var fin = false;
        fin = this.comprueba4rayaAbajo();
        if (!fin)

        {
            //ejemplo
            //this.getCeldaArriba(ultimaCeldaOcupada);
            //this.getCeldaArriba(this.getCeldaArriba(ultimaCeldaOcupada));
        }
        return fin;
    };

    this.comprueba4rayaAbajo = function () {

    };


    this.getCeldaArriba = function (celda) {
        var celdaArriba = null;
        // comprobar que no hay.
        if (celda.getY() < this.alto)
        {
            celdaArriba = this.celdas[celda.getX()][celda.getY() + 1];
        }
        return celdaArriba;
    };




}

