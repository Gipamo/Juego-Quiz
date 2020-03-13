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
var DatosCuriosos = []; //Array para los datos curiosos

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
    secciones[10] = document.getElementById("Ayuda");


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

//Declaracion de datos

DatosCuriosos[1] = "Robin Williams, quien le dio la voz al Genio, grabó 20 versiones diferentes de cada diálogo en un total de 16 horas.";
DatosCuriosos[2] = "El nombre original de la película era You Are A Toy, lo que viene siendo “Tú eres un juguete”.";
DatosCuriosos[3] = "Solo se utilizó uno de los robots de dinosaurios en el rodaje al aire libre.";
DatosCuriosos[4] = "Sulley tiene 2,320,413 pelos en su cuerpo. Esto fue un reto para Pixar, pues fue el primer personaje que tuvo cada cabello animado.";
DatosCuriosos[5] = "Para que se viera más realista, se cocinaron y fotografiaron todos los platos que aparecen en la cinta. Unos 270.";
DatosCuriosos[6] = "En la película “Star Wars” aparece WALL-E entre los robots que han secuestrado R2-D2 y C3P-O, el cual sale a verlos cuando éstos llegan.";
DatosCuriosos[7] = "Aunque en la pantalla parecía enorme, el King Kong de la primera película en realidad solo levantaba 45 centímetros del suelo.";
DatosCuriosos[8] = "El Oxford English Dictionary define supercalifragilisticexpialidocious como: “extraordinariamente bueno; maravilloso”";
DatosCuriosos[9] = "La tasa de niños que se apuntaron a campamentos de verano cayó un 69%, tras el estreno del primer film.";
DatosCuriosos[10] = "A pesar de ser una película de ciencia-ficción, la cinta solo tiene 32 escenas con efectos especiales.";
DatosCuriosos[11] = "El logotipo de Los cazafantasmas es considerado uno de los veinte logos más reconocibles del mundo junto al de Coca Cola o Superman. Está inspirado en el fantasma Casper.";
DatosCuriosos[12] = "El director utilizó solomillos y una variedad de melones para imitar el sonido del apuñalamiento de un cuerpo humano.";
DatosCuriosos[13] = "La palabra jod*** (en inglés) se usa 265 veces en la cinta.";
DatosCuriosos[14] = "Kim Cattrall rechazó en dos ocasiones interpretar a Samantha. La actriz ha declarado que en un inicio, pensó que el papel era de mamá de alguna de las chicas";
DatosCuriosos[15] = "Scorsese leyó el guión en 1972, pero tuvo que esperar dos años hasta que Columbia dio el visto bueno a la película, protagonizada por De Niro, que había ganado el Oscar por la segunda entrega de El Padrino.";
DatosCuriosos[16] = "El nombre de Gotham City proviene del anuncio de una joyería llamada Gotham Jewlers encontrado en la guía telefónica de Nueva York. ";
DatosCuriosos[17] = "Capitán América fue presentado al mundo en 1941 en su propio cómic como un símbolo y ejemplo del orgullo estadounidense utilizado para motivar al público en una época de guerra.";
DatosCuriosos[18] = "Deadpool es el único personaje capaz de romper la pared invisible imaginaria entre el cómic o la pantalla y la realidad.";
DatosCuriosos[19] = "Una de las extravagancias más grandes de Tony Stark en los cómics fue la de adquirir del Gobierno de EEUU la propiedad sobre la famosa Área 51.";
DatosCuriosos[20] = "Los padres de Peter, antes de morir, fueron Agentes de Shield. Incluso salvaron la vida a Logan (Wolverine).";
DatosCuriosos[21] = "En Inglaterra fue prohibida en un principio a menores de 16 años porque la horrible bruja intentaba matar a Blancanieves.";
DatosCuriosos[22] = "Butkus, su mascota en la película, era su perro en la vida real.";
DatosCuriosos[23] = "Shrek es la primera película de animación digital protagonizada por humanos.";
DatosCuriosos[24] = "Existe una casa-museo dedicada a la vida del famoso detective. El museo, ubicado en Baker Street, es el segundo lugar más visitado del Reino Unido.";
DatosCuriosos[25] = "Ni Samantha, Charlotte o Miranda repitieron algún atuendo a lo largo de la serie. La única que lo hizo fue Carrie, quien utilizó el mismo abrigo de la primera temporada en el último episodio de la serie. ";
DatosCuriosos[26] = "La paleta de colores es muy importante en el filme. De acuerdo a Bonetto, cada personaje debía tener su propia paleta. ";
DatosCuriosos[27] = "La canción “You’re The One That I Want” fue grabada en tan sólo una tarde. Esta es llegando casi al final del musical y sin duda se convirtió en una de las escenas más clásicas";
DatosCuriosos[28] = "El nombre del circo (visto en un cartel cuando el tren sale de la estación de invierno) es WDP Circus (Walt Disney Productions).";
DatosCuriosos[29] = "Varios animadores de Disney viajaron a África para estudiar la vida de los leones. También trabajaron con estos felinos dentro del estudio de producción.";
DatosCuriosos[30] = "Los dementores representan la depresión de la autora J.K. Rowling.";

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
        crearFinal();
        ayuda=false;
        textoComprobar="";
        arrayCuadros=[]; // Array con las letras desordenadas
        arrayLetras=[]; //Array con los cuadradrados de las letras del teclado
        letrasDevolver=[]; //array con las posicion de las letras seleccionadas
        pruebas=[]; //Array con los elementos para validar el nivel correcto
    }

    else{
        var elemento=document.getElementById("nomPelicula");
        if(letrasDevolver.length==arrayCuadros.length){
            elemento.className="animated jello ";
        }
        else{
            elemento.className="";
        }

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

        salida+='<div class="Parrafo"><label id="texto">¿Esta seguro que quiere pedir una ayuda por 15 puntos?</label></div>';
        salida+='<div class="BtnAlerta"><input type="button" id="btnSI" onclick="modificarPuntaje(1)" value="Si" >';
        salida+='<input type="button" id="btnNO" onclick="retornar()"value="No" ></div>';
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
        salida +='<div class="Parrafo"><label id="texto">La pelicula o personaje empieza por la letra "'+letraAyuda+'"</label></div>';
        salida +='<div class=BtnAlerta"><input type="button" id="btnOK" onclick="retornar()" value="Ok" ></input></div>';
        contenedorAyuda.innerHTML=salida;
        ayuda=true;
    }
    else{
        var contenedorAyuda=document.getElementById("ayudaContenido");
        contenedorAyuda.innerHTML="";
        var salida="";
        salida +='<div class="Parrafo"><label id="texto">"Puntos Insuficientes"</label></div>';
        salida +='<div class=BtnAlerta"><input type="button" id="btnOK" onclick="retornar()" value="Ok" ></input></div>';
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

function crearFinal(){

    contenedor=document.getElementById("ContenedorFinal");
    var salida="";
    salida = '<img  id ="imgFinal" src="'+imagenes[numeroComprobar]+'" ></img>';
    contenedor.innerHTML=salida;

    contenedorDato=document.getElementById("datoCurioso");
    var salidaDato="";
    salidaDato='<div id="datoCurioso" >'+DatosCuriosos[numeroComprobar]+'</div> ';
    contenedorDato.innerHTML=salidaDato;

}
function crearFinal(){

    var contenedorTicket=document.getElementById("cntTicket2");
    var salidaTicket="";

    salidaTicket += '<img class="Ticket" src="img/Ticket.png" alt=""></img>'
    salidaTicket +='<div id="numTicket2" class="NumTicket">'+localStorage.getItem('puntos')+'</div>';
    contenedorTicket.innerHTML=salidaTicket;

    var contenedor=document.getElementById("ContenedorFinal");
    var salida="";
    salida = '<img  id ="imgFinal" src="'+imagenes[numeroComprobar]+'"></img>';
    contenedor.innerHTML=salida;

    var contenedorDato=document.getElementById("datoCurioso");
    var salidaDato="";
    salidaDato='<div id="datoCurioso" class="Dato">'+DatosCuriosos[numeroComprobar]+'</div> ';
    contenedorDato.innerHTML=salidaDato;

    var contenedorFinal=document.getElementById("nomPeliculaFinal");
    var salidaFinal="";
    for(var i=0;i < salidaCuadrados.length;i++){

        salidaFinal+=salidaCuadrados[i];

    }
    contenedorFinal.innerHTML=salidaFinal;
}
function quitarNombre(){
    salidaCuadrados=[];
}