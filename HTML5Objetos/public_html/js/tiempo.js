/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    $.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=Madrid,es&mode=xml&lang=es&units=metric&cnt=16&appid=b1fc43b0ae8083ad57137a036012d56d",
            function (data) {
                var dias8 = "<div class='row'>";
                var dias16 = "<div class='row'><div class='col-xs-12' >";

                $(data).find("forecast>time").each(
                        function (i, hora) {
    
                            var fecha = moment($(hora).attr("day"), "YYYY-MM-DD");
                            var div = "<div class='divdia col-xs-1 ' onclick='verHoras(\"" +
                                    fecha.format("DD-MM-YYYY") + "\")' > ";
                            div += "<div class='dia'>"+fecha.format("DD-MM-YYYY")+" </div>";

                            div += "<div class='temp'> MAX "+$(hora).find("temperature").attr("max")+" ºC</div>";
                            div += "<div class='temp'> MIN "+$(hora).find("temperature").attr("min")+" ºC</div>";
                            div += "<div class='temp'> MIN "+$(hora).find("temperature").attr("min")+" ºC</div>"
                            
                            div +=" </div>";
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
                $("#dias8").append(dias8);
                $("#dias16").append(dias16);
                verDias("8");

                //alert(data);
            });

});


function verDias(dias)
{
    $("#dias8").css('display', 'none');
    $("#dias16").css('display', 'none');
    $("#dias" + dias).css('display', 'block');
}

function verHoras(dia)
{

}
