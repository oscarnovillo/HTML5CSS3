/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Celda(x, y)
{
    this.eleHtml = null;
    this.ocupada = false;
    this.color = 0;
    this.x = x;
    this.y = y;

    this.setX = function (x) {
        this.x = x;
    };
    this.setY = function (y) {
        this.y = y;
    };
    this.getX = function () {
        return this.x;
    };
    this.getY = function () {
        return this.y;
    };
    
}
