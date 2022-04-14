class MovableObject {
  x = 100;
  y = 225;
  img;
  width = 100;
  height = 200;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;


  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * @param {Array} arr - ['img/image1.png,.....']
   */

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    console.log('moving to the right')
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed
    }, 1000 / 60);
  }

  attack() {

  }
}