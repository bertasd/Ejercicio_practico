// Desplazarse a una posición exacta de la ventana Si conoces los píxeles específicos a los que quieres mover la pantalla (por ejemplo, volver al inicio superior de la página):

function volver(){
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth"
});
}