class MovableObject {
  x = 120;
  y = 200;
  img;
  width = 150;
  height = 250;



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