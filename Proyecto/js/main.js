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
    secciones[5] = document.getElementById("juego");
    secciones[6] = document.getElementById("final");
    secciones[7] = document.getElementById("instrucciones");
    secciones[8] = document.getElementById("creditos");
    secciones[9] = document.getElementById("splash");

    contenedor=document.getElementById("pistaImg");

}

// Declaracion de imagenes

imagenes[1] ="img/peliculas/facil/aladdin.jpg";
imagenes[2] ="img/peliculas/facil/comoentrenaratudragon.jpg";
imagenes[3] ="img/peliculas/facil/jurassicpark.jpg";
imagenes[4] ="img/peliculas/facil/monstersinc.jpg";
imagenes[5] ="img/peliculas/facil/ratatouille.jpg";
imagenes[6] ="img/peliculas/normal/aliciaenelpaisdelasmaravillas.jpg";
imagenes[7] ="img/peliculas/normal/kingkong.jpg";
imagenes[8] ="img/peliculas/normal/mobydick.jpg";
imagenes[9] ="img/peliculas/normal/viernes13.jpg";
imagenes[10] ="img/peliculas/normal/volveralfuturo.jpg";
imagenes[11] ="img/peliculas/dificil/cazafantasmas.jpg";
imagenes[12] ="img/peliculas/dificil/psicosis.png";
imagenes[13] ="img/peliculas/dificil/pulpfiction.jpg";
imagenes[14] ="img/peliculas/dificil/sexandthecity.jpg";
imagenes[15] ="img/peliculas/dificil/taxidriver.jpg";
imagenes[16] ="img/personajes/facil/batman.jpg";
imagenes[17] ="img/personajes/facil/capitanamerica.jpg";
imagenes[18] ="img/personajes/facil/deadpool.jpg";
imagenes[19] ="img/personajes/facil/ironman.jpg";
imagenes[20] ="img/personajes/facil/spiderman.jpg";
imagenes[21] ="img/personajes/normal/blancanieves.jpg";
imagenes[22] ="img/personajes/normal/rocky.jpg";
imagenes[23] ="img/personajes/normal/shrek.jpg";
imagenes[24] ="img/personajes/normal/sherlockholmes.jpg";
imagenes[25] ="img/personajes/normal/venom.jpg";
imagenes[26] ="img/personajes/dificil/amelie.jpg";
imagenes[27] ="img/personajes/dificil/brillantina.jpg";
imagenes[28] ="img/personajes/dificil/dumbo.jpg";
imagenes[29] ="img/personajes/dificil/elreyleon.jpg";
imagenes[30] ="img/personajes/dificil/harrypotter.jpg";

// Declaracion de victoria

nombre[1]="ALADDIN";
nombre[2]="COMOENTRENARATUDRAGON";
nombre[3]="JURASSICPARK";
nombre[4]="MONSTERSINC";
nombre[5]="RATATOUILLE";
nombre[6]="ALICIAENELPAISDELASMARAVILLAS";
nombre[7]="KINGKONG";
nombre[8]="MOBYDICK";
nombre[9]="VIERNES13";
nombre[10]="VOLVERALFUTURO";


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
    var estilos ="style= 'width:200px; height:200px;'"
    salida = '<img  id ="imgNivel" src="'+nivelActual+'" '+estilos+' ></img>';
    contenedor.innerHTML=salida;
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