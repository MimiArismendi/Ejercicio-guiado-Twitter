function mostrarComentario() {

  var contenedorComentarios = document.getElementById("comentarioPublicado");
  var contenedorAutor = document.getElementById("autor");
  var comentario = document.getElementById("comentario");
  var autor = document.getElementById("usuario");
  contenedorComentarios.innerHTML = comentario.value + "<br>" + "Por" + autor.value;


  //contenedorAutor.innerText = autor.value;
  //var parrafo = document.getElementById("autor");
  //var parrafo2 = document.createElement("p");
  //parrafo.innerText = comentario.value;
  //parrafo.innerHTML = "Por: " + autor.value;
}
