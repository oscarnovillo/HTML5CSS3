/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Tablero(x, y) {
    
    var id=0;
    this.add= function(){id++;};
    this.getId = function(){return id;};
    this.ancho = x;
    this.alto=y;
    
    this.celdas = new Array();
    for (var i = 0; i < x; i++)
    {
        this.celdas[i] = new Array();
        for (var j = 0; j < y; j++)
        {
            this.celdas[i][j] = new Celda();
        }
    }
    
    this.ultimaCeldaOcupada=null;
    /**
     *  mensaje */
    this.setCelda = function (i, j, celda) {
        this.celdas[i][j].eleHtml = celda;
    };
    this.meterFicha = function (col) {
        for (var i = 0; this.celdas.length; i++){};
    };
    
    this.comprueba4raya = function(){
        
    };
    
    
    

}

