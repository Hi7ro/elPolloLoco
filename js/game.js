let canvas;
let world;

function $(id) {
  return document.getElementById(id);
}

function init() {
  canvas = $('canvas');

  world = new World(canvas);


  console.log('Character is ', world.character)

}