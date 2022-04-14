class Chicken extends MovableObject {
  height = 70
  width = 80
  y = 350

  IMAGES_WALKING = [
    '/img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
    '/img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
    '/img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
  ];

  constructor() {
    super().loadImage('../img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
    this.loadImages(this.IMAGES_WALKING);


    this.x = 500 + Math.floor(Math.random() * 500);
    this.animte();

  }

  animte() {
    this.speed = 0.15 + Math.random() * 1
    this.moveLeft()

    setInterval(() => {
      let i = this.currentImage % this.IMAGES_WALKING.length;
      let path = this.IMAGES_WALKING[i];
      this.img = this.imageCache[path];
      this.currentImage++
    }, 150);
  }

}