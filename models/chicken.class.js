class Chicken extends MovableObject {
  height = 70
  width = 80
  y = 380

  constructor() {
    super().loadImage('../img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

    this.x = 200 + Math.floor(Math.random() * 500);
  }



}