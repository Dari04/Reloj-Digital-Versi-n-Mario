//cerrar ventana de paises
$(document).ready(function() {
    setInterval("digiClock()", 1000);
    window.location.closeVentana();

})

(function  digiClock(){
    var actualizarhora = function (){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        var pHoras = document.getElementById("horas"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diasemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        var semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes"];
        pDiaSemana.textContent = semana [diaSemana];

        pDia.textContent = dia;

        var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        pMes.textContent = meses[mes];

        pYear.textContent = year;

        if (horas >= 12) {
            horas = horas - 12;
            ampm = "PM";
        } else {
            ampm ="AM"
        };

        if (horas == 0) {
            horas = 12;
        };

        pHoras.textContent = horas;

        pAMPM.textContent = ampm;

        if (minutos < 10) {
            minutos = "0" + minutos;
        };

        if (segundos < 10) { 
            segundos ="0" + segundos;
        };

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

    };

    actualizarhora();
    var intervalo = setInterval (actualizarhora, 1000);
}())
//Comienza la aventura
$(document).ready(function()){
    var timezone = [1,1,1,1,1,1,1,1,1,1],
    $(".check").click(function()){
        var indice = $(this).attr("data-indice")
        var fecha = new Date()
        var hora = fecha.getHours()
        var horaInt = hora + timezone[indice]
        var mensaje = "Hora Peru" ->
    }
}




//Abrir la pequeña ventana para elegir otro país:
 $(document).ready(function(){
    $("button").click(openVentana());
 })
function openVentana() {
    $(".ventana").slideDown("slow");
}
function closeVentana() {
    $(".ventana").slideUp("fast");
}







