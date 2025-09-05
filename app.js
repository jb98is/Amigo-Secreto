// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

  let listaAmigos =[];
  let c=0;

//mostrar Parrafo
   function mostrarP(texto) {
    let text = document.querySelector("p");
    text.innerHTML =texto;
  }
 //boton agregarAmigo 
function agregarAmigo(){
  let amigo = document.querySelector("#amigo").value;
  listaAmigos.push(amigo);
  document.querySelector("#amigo").value="";
  mostrarP(listaAmigos);
}
 
//boton sortearAmigo
function sortearAmigo(){
    mostrarP("");
    let num= Math.floor(Math.random()*listaAmigos.length);
    let amgSC =listaAmigos[num];
    mostrarP(amgSC);
    listaAmigos=[];
    
}
