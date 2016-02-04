/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function creaTabla()
{
    var dimensionTabla = $('#columnas').val();
    $('#tablaJuego').html('');
    $('#tablaJuego').append("<table style='border:solid black 1px'>");
    for (var i = 0; i < dimensionTabla; i++) {
        $('#tablaJuego').append("<tr>");
        for (var j = 0; j < dimensionTabla; j++)
            $('#tablaJuego').append("<td id='" + i + "-" + j + "'>hola</td>");
        $('#tablaJuego').append("</tr>");
    }
    $('#tablaJuego').append("</table>");


}

function cambiarColumna() {
    var dimensionTabla = $('#columnas').val();
    for (var i = 0; i < dimensionTabla; i++) {
        for (var j = 0; j < dimensionTabla; j++) {
            $('#' + i + '-' + j).css('background', 'red');
            $('#' + i + '-' + j).css("padding","+10px");
                    
        }
    }

}
function clicko()
{
    // alert('hola mundo');
    var zumba = "zumba";
    $('#div1').append('io \"' + zumba + 'io');
    $('#div1').html($('#div1').html() + 'io \"' + zumba + 'io');
    $('#div1').css({'background': 'red'});
//alert($('#div1').css('background'));

}
