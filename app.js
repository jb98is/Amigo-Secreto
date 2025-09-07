// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

  let listaAmigos =[];

//mostrar Parrafo
function mostrarP(texto,lugar) {
    let text = document.querySelector(lugar);
    text.innerHTML =texto;
}
 //boton agregarAmigo 
function agregarAmigo(){
   let amigo = document.querySelector("#amigo").value;
   if(estaraVacio(amigo)){mostrarP("Esta vacio,añade un nombre o apodo de tu amigo,por favor","p");}
   else{añadirAmigo(amigo);}
   //estaraVacio(amigo);
}
function estaraVacio(texto) {
  if(texto == ""){return true;}
  else{return false;}
}
function añadirAmigo(amigo) {
   listaAmigos.push(amigo);
    document.querySelector("#amigo").value="";
    mostrarP(listaAmigos,"p"); 
}
//boton sortearAmigo
function sortearAmigo(){
    mostrarP("","p");
    let num= Math.floor(Math.random()*listaAmigos.length);
    let amgSC =listaAmigos[num];
    mostrarP(`Tu Amigo SECRETO es: ${amgSC}`,"h3");
    //listaAmigos=[];
    
}
