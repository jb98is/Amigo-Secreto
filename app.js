// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

  let listaAmigos =[];
function agregarAmigo(){
 
  let amigo = document.querySelector("#amigo").value;
  let c=0;
  
  function mostrarP(texto,m) {
    let text = document.querySelector(m);
    text.innerHTML =texto;
  }
  function guardarAmigos(amigo){
    listaAmigos.push(amigo);
    c++;
    mostrarP(listaAmigos,"p");
  }
  
  guardarAmigos(amigo);
}
