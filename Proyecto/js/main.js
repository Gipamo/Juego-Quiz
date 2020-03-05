var secciones = [];
var imagenes = [];
var contenedor;
var gtipo;
var gdificultad;
var gid;
var tiempo_splash = 2500;

window.onload = function(){
    inicializarReferencias();
    setTimeout(cambiarSplash,tiempo_splash);


}

function inicializarReferencias(){
    

    secciones[1] = document.getElementById("inicio");
    secciones[2] = document.getElementById("categoria");
    secciones[3] = document.getElementById("nivel");
    secciones[4] = document.getElementById("seleccion");
    secciones[5] = contenedor = document.getElementById("juego");
    secciones[6] = document.getElementById("final");
    secciones[7] = document.getElementById("instrucciones");
    secciones[8] = document.getElementById("creditos");
    secciones[9] = document.getElementById("splash");

}

// Declaracion de imagenes

imagenes[1] = [
    {id:"imagen",src:"img/peliculas/facil/aladdin.JPG"},
  ];

imagenes[2] = [
    {id:"imagen",src:"img/peliculas/facil/comoentrenaratudragon.JPG"},
  ];
  
imagenes[3] = [
    {id:"imagen",src:"img/peliculas/facil/jurassicpark.JPG"},
  ];
  
imagenes[4] = [
    {id:"imagen",src:"img/peliculas/facil/monstersinc.JPG"},
  ];
  
imagenes[5] = [
    {id:"imagen",src:"img/peliculas/facil/ratatouille.JPG"},
  ];
  
imagenes[6] = [
    {id:"imagen",src:"img/peliculas/normal/aliciaenelpaisdelasmaravillas.JPG"},
  ];
  
imagenes[7] = [
    {id:"imagen",src:"img/peliculas/normal/kingkong.JPG"},
  ];
  
imagenes[8] = [
    {id:"imagen",src:"img/peliculas/normal/mobydick.JPG"},
  ];
  
imagenes[9] = [
    {id:"imagen",src:"img/peliculas/normal/viernes13.JPG"},
  ];
  
imagenes[10] = [
    {id:"imagen",src:"img/peliculas/normal/volveralfuturo.JPG"},
  ];

imagenes[11] = [
    {id:"imagen",src:"img/peliculas/dificil/cazafantasmas.JPG"},
  ];

imagenes[12] = [
    {id:"imagen",src:"img/peliculas/dificil/psicosis.PNG"},
  ];

imagenes[13] = [
    {id:"imagen",src:"img/peliculas/dificil/pulpfiction.JPG"},
  ];

imagenes[14] = [
    {id:"imagen",src:"img/peliculas/dificil/sexandthecity.JPG"},
  ];

imagenes[15] = [
    {id:"imagen",src:"img/peliculas/dificil/taxidriver.JPG"},
  ];



  //Seleccion de tipo de juego
function tipoJuego(tipo){
    if(tipo==1){
        gtipo=15;

    }
    else{
        gtipo=0;
    }
}

  //Seleccion de dificultad
function cambioDificultad(dificultad){
    if(dificultad==0){
        gdificultad=0;

    }
    else if (dificultad==1){
        gdificultad=5;
    }
    else{
        gdificultad=10;
    }

}
  //Cambio de nivel

function cambioNivel(id){
    nivel=gtipo+gdificultad+id;
    var nivelActual=imagenes[nivel];
    var salida = "";
    contenedor.innerHTML = "";
    for(var i=0;i<nivel.length;i++){
      
     salida += '<img src="'+nivelActual[i].src+'"id="'+nivelActual[i].id+'"></img>';

    }
    contenedor.innerHTML = salida;
}

 

//pantalla splash

function cambiarSplash(){
    secciones[9].className = "splash oculto";
    secciones[1].className = "inicio flex";
}

//Seleccion de ventanas
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