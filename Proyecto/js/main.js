var secciones = [];
var imagenes = [];
var nombre=[];
var gtipo;
var gdificultad;
var gid;
var textoComprobar="";
var numeroComprobar;
var tiempo_splash = 2500;
var ayuda=false;  //define si nse pidio ayuda o no
var letraAyuda="";
var arrayCuadros=[]; // Array con las letras desordenadas
var arrayLetras=[]; //Array con los cuadradrados de las letras del teclado
var letrasDevolver=[]; //array con las posicion de las letras seleccionadas
var salidaCuadrados=[]; //  Array con los cuadros de las letras seleccionadas
var pruebas=[]; //Array con los elementos para validar el nivel correcto
var componentes=[]; //array para las ayudas

window.onload = function(){
    inicializarReferencias();
    setTimeout(cambiarSplash,tiempo_splash);
    if(localStorage.getItem('puntos')==null){
        localStorage.setItem('puntos','15');
    }

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

// Declaracion de imagenes

imagenes[1] ="img/peliculas/facil/aladdin.jpg";
imagenes[2] ="img/peliculas/facil/toystory.jpg";
imagenes[3] ="img/peliculas/facil/jurassicpark.jpg";
imagenes[4] ="img/peliculas/facil/monstersinc.jpg";
imagenes[5] ="img/peliculas/facil/ratatouille.jpg";
imagenes[6] ="img/peliculas/normal/walle.jpg";
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
imagenes[30] ="img/personajes/dificil/harry potter.jpg";

// Declaracion de victoria

nombre[1]="ALADDIN";
nombre[2]="TOYSTORY";
nombre[3]="JURASSICPARK";
nombre[4]="MONSTERSINC";
nombre[5]="RATATOUILLE";
nombre[6]="WALLE";
nombre[7]="KINGKONG";
nombre[8]="MOBYDICK";
nombre[9]="VIERNES13";
nombre[10]="VOLVERALFUTURO";
nombre[11]="CAZAFANTASMAS";
nombre[12]="PSICOSIS";
nombre[13]="PULPFICTION";
nombre[14]="SEXANDTHECITY";
nombre[15]="TAXIDRIVER";
nombre[16]="BATMAN";
nombre[17]="CAPITANAMERICA";
nombre[18]="DEADPOOL";
nombre[19]="IRONMAN";
nombre[20]="SPIDERMAN";
nombre[21]="BLANCANIEVES";
nombre[22]="ROCKY";
nombre[23]="SHREK";
nombre[24]="SHERLOCKHOLMES";
nombre[25]="VENOM";
nombre[26]="AMELIE";
nombre[27]="BRILLANTINA";
nombre[28]="DUMBO";
nombre[29]="ELREYLEON";
nombre[30]="HARRYPOTTER";


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
    var lvl=[];
    var salida="";
    var texto="";
    if(dificultad==0){
        gdificultad=0;
        texto='<h2 id="dificultadActual">Facil</h2>';

    }
    else if (dificultad==1){
        gdificultad=5;
        texto='<h2 id="dificultadActual">Medio</h2>';
    }
    else{
        gdificultad=10;
        texto='<h2 id="dificultadActual">Dificil</h2>';
    }

    lvl[1]=document.getElementById("lvl1")
    lvl[2]=document.getElementById("lvl2")
    lvl[3]=document.getElementById("lvl3")
    lvl[4]=document.getElementById("lvl4")
    lvl[5]=document.getElementById("lvl5")
    var nivelImagen=gtipo+gdificultad;
    var contenedorSeleccion=document.getElementById("dificultadActual");
    contenedorSeleccion.innerHTML=texto;
    for(var i=1;i <=5;i++){

        contenedor=lvl[i];
        var src= imagenes[nivelImagen+i]
        salida='<img  class ="btn_Selec" src="'+src+'"></img>'
        contenedor.innerHTML=salida;
        
    }

}
  //Cambio de nivel

function cambioNivel(id){
    nivel=gtipo+gdificultad+id;
    var nivelActual=imagenes[nivel]; 

    var contenedorTicket=document.getElementById("cntTicket");
    var salidaTicket="";

    salidaTicket += '<img class="Ticket" src="img/Ticket.png" alt=""></img>'
    salidaTicket +='<div id="numTicket" class="NumTicket">'+localStorage.getItem('puntos')+'</div>';
    contenedorTicket.innerHTML=salidaTicket;

    contenedor=document.getElementById("pistaImg");
    var estilos ="style= 'width:200px; height:200px;'"
    salida = '<img  id ="imgNivel" src="'+nivelActual+'" '+estilos+' ></img>';
    contenedor.innerHTML=salida;
    numeroComprobar=nivel;
    repartirPalabras(nivel)
}


//organizar y repartir palabras
function repartirPalabras(nivel){
    var palabra=nombre[nivel];
    var arrayPalabra=palabra.split("");
    arrayCuadros=shuffle(arrayPalabra);
    var contenedor=document.getElementById("letras")
    var salida="";
    for(var i=0;i < arrayPalabra.length;i++){
        arrayLetras[i]='<div class="cuadradosLetras block" id="letra'+i+'" onclick="comprobarNivel('+i+')">'+arrayCuadros[i]+'</div>';
        salida+=arrayLetras[i];

    }

    contenedor.innerHTML=salida;



}

//comprobar nivel
function comprobarNivel(id){
    var contenedor=document.getElementById("nomPelicula");
    var elementoPush='<div class="cuadrados block" id="letravalidar'+id+'" >'+arrayCuadros[id]+'</div>';
    salidaCuadrados.push(elementoPush);
    var salida="";
    for(var i=0;i < salidaCuadrados.length;i++){

        salida+=salidaCuadrados[i];

    }
    contenedor.innerHTML=salida;
    var agregarProbar=document.getElementById("letravalidar"+id);
    pruebas.push(agregarProbar.innerHTML);
    letrasDevolver.push(id)
    arrayLetras[id]='<div class="cuadradosLetras oculto" id="letra'+id+'" onclick="comprobarNivel('+id+')">'+arrayCuadros[id]+'</div>';
    var contenedorLetras=document.getElementById("letras");
    var salidaLetras="";
    for(var i=0;i < arrayLetras.length;i++){
        salidaLetras+=arrayLetras[i];

    }

    contenedorLetras.innerHTML=salidaLetras;
    comprobarCorrecto();

}

//regresar letras
function regresar(){
    salidaCuadrados.pop();
    pruebas.pop();
    var id=letrasDevolver.pop();
    arrayLetras[id]='<div class="cuadradosLetras block" id="letra'+id+'" onclick="comprobarNivel('+id+')">'+arrayCuadros[id]+'</div>';
    var contenedor=document.getElementById("nomPelicula");
    var salida="";
    for(var i=0;i < salidaCuadrados.length;i++){

        salida+=salidaCuadrados[i];

    }
    contenedor.innerHTML=salida;
    var contenedorLetras=document.getElementById("letras");
    var salidaLetras="";
    for(var i=0;i < arrayLetras.length;i++){
        salidaLetras+=arrayLetras[i];

    }

    contenedorLetras.innerHTML=salidaLetras;



}

//Comprueba que el elemento este correcto
function comprobarCorrecto(){
    textoComprobar=pruebas.join('');
    if(textoComprobar==nombre[numeroComprobar]){

        cambiarSeccion(6);
        modificarPuntaje(0);
        ayuda=false;
        textoComprobar="";
        arrayCuadros=[]; // Array con las letras desordenadas
        arrayLetras=[]; //Array con los cuadradrados de las letras del teclado
        letrasDevolver=[]; //array con las posicion de las letras seleccionadas
        salidaCuadrados=[]; //  Array con los cuadros de las letras seleccionadas
        pruebas=[]; //Array con los elementos para validar el nivel correcto
    }

    else{
    }
}

//shuffle
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

//pantalla splash

function cambiarSplash(){
    secciones[9].className = "splash oculto";
    secciones[1].className = "inicio flex";
}

//Seleccion de ventanas
function cambiarSeccion(id_seccion){
    if(id_seccion==4){

        for (var i in secciones) {
            secciones[i].classList.remove("flex");
            secciones[i].classList.add("oculto");
        }
    
        secciones[id_seccion].classList.remove("oculto");
        secciones[id_seccion].classList.add("flex");
        arrayCuadros=[]; // Array con las letras desordenadas
        arrayLetras=[]; //Array con los cuadradrados de las letras del teclado
        letrasDevolver=[]; //array con las posicion de las letras seleccionadas
        salidaCuadrados=[]; //  Array con los cuadros de las letras seleccionadas
        pruebas=[]; //Array con los elementos para validar el nivel correcto
    }
    else{
        
        for (var i in secciones) {
            secciones[i].classList.remove("flex");
            secciones[i].classList.add("oculto");
        }
    
        secciones[id_seccion].classList.remove("oculto");
        secciones[id_seccion].classList.add("flex");
    }
    var contenedor=document.getElementById("nomPelicula");
    contenedor.innerHTML="";

}

//boton volver
function botonVolver(id){
    ayuda=false;
    cambiarSeccion(id);
    

}

function pedirAyuda(){
    var ventanaAyuda=document.getElementById("ventana");
    componentes[1]=document.getElementById("btnVolver");
    componentes[2]=document.getElementById("imgNivel");
    componentes[3]=document.getElementById("nomPelicula");
    componentes[4]=document.getElementById("letras");
    componentes[5]=document.getElementById("btnDelete");
    componentes[6]=document.getElementById("abrirAyuda");
    if(ayuda==false){
        var contenedorAyuda=document.getElementById("ayudaContenido");
        var salida ="";
        salida+='<label id="texto">¿Esta seguro que quiere pedir una ayuda por 15 puntos?</label>';
        salida+='<input type="button" id="btnSI" onclick="modificarPuntaje(1)" value="Si" >';
        salida+='<input type="button" id="btnNO" onclick="retornar()"value="No" >';
        contenedorAyuda.innerHTML=salida;
        ventanaAyuda.classList.remove("oculto");
        for(var i=1;i < componentes.length;i++){
            componentes[i].classList.add("oculto");
        }
    }
    else{
        ventanaAyuda.classList.remove("oculto");
        for(var i=1;i < componentes.length;i++){
            componentes[i].classList.add("oculto");
         }
    }

}

function ayudar(id){
    if(id==1){
        var contenedorAyuda=document.getElementById("ayudaContenido");
        contenedorAyuda.innerHTML="";
        var palabra=nombre[numeroComprobar];
        var arrayPalabra=palabra.split("");
        var letraAyuda=arrayPalabra[0];
        var salida="";
        salida +='<label id="texto">La pelicula o personaje empieza por la letra "'+letraAyuda+'"</label>';
        salida +='<input type="button" id="btnOK" onclick="retornar()" value="Ok" ></input>';
        contenedorAyuda.innerHTML=salida;
        ayuda=true;
    }
    else{
        var contenedorAyuda=document.getElementById("ayudaContenido");
        contenedorAyuda.innerHTML="";
        var salida="";
        salida +='<label id="texto">"Puntos Insuficientes"</label>';
        salida +='<input type="button" id="btnOK" onclick="retornar()" value="Ok" ></input>';
        contenedorAyuda.innerHTML=salida;
    }
}
function retornar(){
    var ventanaAyuda=document.getElementById("ventana");
    var componentes=[]
    componentes[1]=document.getElementById("btnVolver");
    componentes[2]=document.getElementById("imgNivel");
    componentes[3]=document.getElementById("nomPelicula");
    componentes[4]=document.getElementById("letras");
    componentes[5]=document.getElementById("btnDelete");
    componentes[6]=document.getElementById("abrirAyuda");
    ventanaAyuda.classList.add("oculto");
    for(var i=1;i < componentes.length;i++){
        componentes[i].classList.remove("oculto");
     }

}

function actualizarPuntaje(){
    var contenedorTicket=document.getElementById("cntTicket");
    var salidaTicket="";
    salidaTicket += '<img class="Ticket" src="img/Ticket.png" alt=""></img>'
    salidaTicket +='<div id="numTicket" class="NumTicket">'+localStorage.getItem('puntos')+'</div>';
    contenedorTicket.innerHTML=salidaTicket;
}

function modificarPuntaje(id){
    var puntaje=localStorage.getItem('puntos');
    if(id==1){
        var puntosNumero=parseInt(puntaje,10);
        if(puntosNumero >=15){
            puntosNumero=puntosNumero-15;
            ayudar(1);
            localStorage.setItem('puntos',puntosNumero);
            actualizarPuntaje();
        }
        else{
            ayudar(0);
        }
    }
    else{
        var puntosNumero=parseInt(puntaje,10);
        if(puntosNumero <= 60){
            puntosNumero=puntosNumero+3;
            localStorage.setItem('puntos',puntosNumero);
            actualizarPuntaje();
        }
        else{
        }

    }
}
