class MovableObject {
  x = 100;
  y = 250;
  img;
  width = 100;
  height = 200;



  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log('moving to the right')
  }

  moveLeft() {
    console.log('moving to the left')
  }

  attack() {

  }
}