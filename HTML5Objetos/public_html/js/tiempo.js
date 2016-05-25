/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    pintarDataList();

});

function cargarCiudad() {

    var ciudad = $("#ciudad").val();
    if (ciudad !== "") {
        ciudad = ciudad.toUpperCase();
        $("#cabeceraCiudad").html("TIEMPO EN " + ciudad);
        var ciudades = recuperarCiudades();
        if (ciudades.indexOf(ciudad)===-1)
        {
            ciudades[ciudades.length] = ciudad;
            guardaCiudades(ciudades);
        }


        $.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+ciudad+"&mode=xml&lang=es&units=metric&cnt=16&appid=b1fc43b0ae8083ad57137a036012d56d",
                function (data) {
                    var dias8 = "<div class='row'>";
                    var dias16 = "<div class='row'><div class='col-xs-12' >";

                    $(data).find("forecast>time").each(
                            function (i, hora) {

                                var fecha = moment($(hora).attr("day"), "YYYY-MM-DD");
                                var div = "<div class='divdia col-xs-1 ' onclick='verHoras(\"" +
                                        fecha.format("DD-MM-YYYY") + "\")' > ";
                                div += "<div class='dia'>" + fecha.format("DD-MM-YYYY") + " </div>";

                                div += "<div class='temp'> MAX " + $(hora).find("temperature").attr("max") + " ºC</div>";
                                div += "<div class='temp'> MIN " + $(hora).find("temperature").attr("min") + " ºC</div>";


                                div += " </div>";
                                if (i < 8)
                                {
                                    dias8 += div;
                                } else
                                {
                                    dias16 += div;
                                }
                            });

                    dias8 += "</div>";
                    dias16 += "</div>";
                    $("#dias8").html(dias8);
                    $("#dias16").html(dias16);
                    verDias("8");

                });
    }
}


function verDias(dias)
{
    $("#dias8").hide();
    $("#dias16").hide();
    $("#dias" + dias).show();
}

function verHoras(dia)
{
    var ciudad = $("#ciudad").val();
    $.get("http://api.openweathermap.org/data/2.5/forecast?q="+ciudad+"&lang=es&units=metric&mode=xml&appid=b1fc43b0ae8083ad57137a036012d56d",
            function (data) {
                var dias = "<div class='row'>";
                var hayDatos = false;
                $(data).find("forecast>time").each(
                        function (i, hora) {
                            var fecha = moment.utc($(hora).attr("from"));
                            if (fecha.format("DD-MM-YYYY") === dia)
                            {
                                hayDatos = true;

                                dias += "<div class='divdia col-xs-1 '  > ";
                                dias += "<div class='dia'>" + moment.utc($(hora).attr("from")).format("HH:MM") + " " +
                                        moment.utc($(hora).attr("to")).format("HH:MM") + " </div>";

                                dias += "<div class='temp'> temp " + $(hora).find("temperature").attr("value") + " ºC</div>";

                                dias += " </div>";


                            }
                        });
                dias += "</div>";
                if (hayDatos)
                {
                    $("#dia").html(dias);
                } else
                {
                    $("#dia").html("<div class='divdia'>NO HAY DATOS DISPONIBLES PARA " + dia + "</div>");
                }

            });
}


function recuperarCiudades()
{
    var aux = localStorage.getItem("ciudades");
    var ciudades;
    if (aux === null)
        ciudades = new Array();
    else
        ciudades = JSON.parse(aux);

    return ciudades;
}
function pintarDataList()
{
    var ciudades = recuperarCiudades();
    var optionCiudades = "";
    $(ciudades).each(function (i, ciudad) {

        optionCiudades += "<option>" + ciudad
                + "</option>";

    });

// recorrido con for
//    for (var i = 0; i < ciudades.length; i++)
//    {
//        var ciudad = ciudades[i];
//        optionCiudades += "<option>" + ciudades[i] + "</option>";
//    }
    $("#ciudades").html(optionCiudades);

}
function guardaCiudades(ciudades)
{
    localStorage.setItem("ciudades", JSON.stringify(ciudades));
    pintarDataList();
}

