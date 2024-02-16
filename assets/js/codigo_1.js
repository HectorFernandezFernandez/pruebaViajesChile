$(document).ready(function(){

    $("#showSet1").click(function(){
        $("#imageSet2").hide();
        $("#imageSet1").show();
        $("#showSet2").css("background-color", "#373A3C31");
        $("#showSet1").css("background-color", "#373A3C");
    });

    $("#showSet2").click(function(){
        $("#imageSet1").hide();
        $("#imageSet2").show();
        $("#showSet1").css("background-color", "#373A3C31");
        $("#showSet2").css("background-color", "#373A3C");
    });

    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente");
    });

    $("#favoritos").click(function(){
        alert("agrega el link a favoritos");
    });

    $("#suscripcion").click(function(){
        var correo = prompt("Ingrese su correo:");
        alert("Su correo a sido suscrito para envio de informacion",correo);
    });

    verificarAnchoPantalla();

    $(window).resize(function(){
        verificarAnchoPantalla();
    });

    function verificarAnchoPantalla(){

        var anchoPantalla = $(window).width();
        
        var anchoMaximoTelefono = 768;

        if(anchoPantalla <= anchoMaximoTelefono){
            $("#imageSet1").css("display","none");
            $("#contenedorBotones").css("display","none");
        } else {
            $("#imageSet1").css("display", "");
            $("#contenedorBotones").css("display", "");
        }
    }

    $("#title-red").dblclick(function(){
        $("#title-red").css("color", "#ff0000");
    });
    $("#title-red-2").dblclick(function(){
        $("#title-red-2").css("color", "#ff0000");
    });

    $("#title-1").click(function(){
        $("#title-1").css("display","none");
    });
    $("#title-2").click(function(){
        $("#title-2").css("display","none");
    });
    $("#title-3").click(function(){
        $("#title-3").css("display","none");
    });

});


    
