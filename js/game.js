let canvas;
let ctx;
let character = new Image();

function $(id) {
  return document.getElementById(id);
}

function init() {
  canvas = $('canvas');
  ctx = canvas.getContext('2d');

  character.src = '../img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png';

  setTimeout(() => {
    ctx.drawImage(character, 150, 200, 100, 250);
  }, 1000);




}