 
var mensaje = document.getElementById("mensaje");
var mensaje2 = document.getElementById("mensaje2");
var mensaje3 = document.getElementById("mensaje3")
//distancia a recorrer aleatorio  

let recorrido = Math.floor((Math.random() * 100)+  20);
mensaje2.innerHTML += `Destino a: ${recorrido} km <br/>`;
let tiempoTotal =Math.floor((Math.random() * 2)+  1) ;
mensaje2.innerHTML += `Tiempo Total: ${tiempoTotal} hr<br/>`; 
// numero de paradas aleatorias de 1 a 3
let numerodeParadas = Math.floor((Math.random() *3) +1 );
mensaje2.innerHTML += `Paradas : ${numerodeParadas} <br/>`; 
//numero de paradas aleatorias de 1 a 2
let duraciondeParadas = Math.floor((Math.random() *5) +1 );
mensaje2.innerHTML += "Tiempo de Paradas:" + duraciondeParadas + "seg";
// Distancia entre paradas a ejecutar
let ejecucionDeParadas = (Math.floor(((tiempoTotal*60)-10)/numerodeParadas));


// ejecutar giros
        //Giros Derecha
const giroAbajo = (evento) => {
   
    if (evento.keyCode == 114) {
        document.getElementById("btn-right").classList.add("btncontrol");    
    } 
    if (evento.keyCode == 108) {
        document.getElementById("btn-left").classList.add("btncontrol");  
    }
};
    
    document.onkeypress = function(e) {giroAbajo(e)};

const giroArriba = (evento) => {
   
    if (evento.keyCode == 82) {
        document.getElementById("btn-right").classList.remove("btncontrol");    
    }
    if (evento.keyCode == 76) {
        document.getElementById("btn-left").classList.remove("btncontrol");  
    }
    
};
  
    document.onkeyup = function(e) {giroArriba(e)};
    
// Comprobar que el carro esta encendido

let on = document.querySelector('.on');
let cambio = document.querySelector('.cambio');
let btnFdm = document.querySelector('.fdm');


/* Condicional para enceder*/
const encender = () => {
    if(on == null){
        mensaje.innerHTML = "El auto esta apagado";
        setTimeout(function(){
            mensaje.innerHTML = "Verificando velocidad neutro y freno de mano activo";
            setTimeout(function(){ 
                if( cambio == null && btnFdm != null){  
                    //btnFdm.classList.remove("fdm");
                    mensaje.innerHTML = "Encender el auto";
                    document.getElementById("btn-encender").classList.add("on");
                    mensaje.innerHTML = "Encendido";
                    
                    activarClutch();
                }
            },2000);
        },2000)
    } 
};

encender();

/* Condicional para arrancar*/

/* Activar el Clutch*/
function activarClutch() {
    setTimeout(function(){
        document.getElementById("btn-clutch").classList.add("btncontrol");
        mensaje.innerHTML = "Activar el Clutch"
            setTimeout(function(){
                frenar();
            },2000)
    },2000);     
};

/* Activar el freno de piso*/
function frenar(){
    setTimeout(function(){
    document.getElementById("btn-freno").classList.add("btncontrol");
    mensaje.innerHTML = "Activado el Freno de Piso"
        setTimeout(function(){
            frenoDeMano()
        },2000)
    },2000);
}

/* Activar el freno de mano*/
function frenoDeMano(){
    setTimeout(function(){
        btnFdm.classList.remove("fdm");
        mensaje.innerHTML = "Freno de mano desactivado"
        setTimeout(function(){
            activarPrimera()
        },2000)
    },2000);
}

/* Activar Primera*/
function activarPrimera(){
    setTimeout(function(){
        document.getElementById("btn-1").classList.add("btncambios");
        mensaje.innerHTML = "Activar primera ";
        setTimeout(function(){
            desactivarFrenar()
        },2000)
    },2000)
}


function desactivarFrenar(){
    setTimeout(function(){
    document.getElementById("btn-freno").classList.remove("btncontrol");
    mensaje.innerHTML = "Desactivar el Freno de Piso"
        setTimeout(function(){
            desactivarClutch()
        },2000)
    },2000);

}

function desactivarClutch() {
    setTimeout(function(){
        document.getElementById("btn-clutch").classList.remove("btncontrol");
        mensaje.innerHTML = "Desactivar el Clutch"
            setTimeout(function(){
                acelerar()
            },1000)
    },2000);     
};

function acelerar() {
    setTimeout(function(){
        document.getElementById("btn-acelerador").classList.add("btncontrol");
        mensaje.innerHTML = "Acelerar"
            setTimeout(function(){
                contador()
            },2000)
    },1000);     
};


/* Activar el temporizador*/

var timer = 0;
var timerMaximo = tiempoTotal*60;
var velocidad =0;
var acelerador = 2; 


function contador(){
    var tiempoDeRecorrido= setInterval(function(){
        mensaje3.innerHTML ="Timer:" +" "+ (timer++) + "seg";
        velocidad += acelerador;
        cambios(velocidad);
       
      
        if (timer == timerMaximo ){
            clearInterval(tiempoDeRecorrido);
        }
    },1000);
};



/* Ejecutar los cambios*/
function cambios(velocidad){
    document.querySelectorAll('.btn-p').forEach(function(item){ item.classList.remove('btncambios')} )
    if(velocidad<=20){
        document.getElementById("btn-1").classList.add("btncambios");
        mensaje.innerHTML = "Activo Primera";
    } else if (velocidad>20 && velocidad <= 35){

        document.getElementById("btn-2").classList.add("btncambios");
        mensaje.innerHTML = "Activa Segunda";
    } else if (velocidad>35 && velocidad <= 45){
    
        document.getElementById("btn-3").classList.add("btncambios");
        mensaje.innerHTML = "Activa Tercera";
    }
    else if (velocidad>45 && velocidad <= 55){
        document.getElementById("btn-4").classList.add("btncambios");
        mensaje.innerHTML = "Activa Cuarto";
    }
    else if (velocidad>55 && velocidad <= 65){
        document.getElementById("btn-5").classList.add("btncambios");
        mensaje.innerHTML = "Activa Quinta";
    }
    else if(velocidad>65 && velocidad <= 160){  
        document.getElementById("btn-6").classList.add("btncambios");
        mensaje.innerHTML = "Activa Sexta";
    };
};

