var secciones = [];
var tiempo_splash = 2000;

window.onload = function(){
    inicializarReferencias();
    setTimeout(cambiarSplash,tiempo_splash);


}

function inicializarReferencias(){
    secciones[1] = document.getElementById("inicio");
    secciones[2] = document.getElementById("categoria");
    secciones[3] = document.getElementById("nivel");
    secciones[4] = document.getElementById("seleccion");
    secciones[5] = document.getElementById("juego");
    secciones[6] = document.getElementById("final");
    secciones[7] = document.getElementById("instrucciones");
    secciones[8] = document.getElementById("creditos");
    secciones[9] = document.getElementById("splash");

}

function cambiarSplash(){
    secciones[9].className = "splash oculto";
    secciones[1].className = "inicio flex";
}

//https://developer.mozilla.org/es/docs/Web/API/Element/classList
//https://www.youtube.com/watch?v=2z0wMNHPbzk
function cambiarSeccion(id_seccion){
    if(id_seccion){

        for (var i in secciones) {
            secciones[i].classList.remove("flex");
            secciones[i].classList.add("oculto");
        }
    
        secciones[id_seccion].classList.remove("oculto");
        secciones[id_seccion].classList.add("flex");
    }
    
}