class Cloud extends MovableObject {
    y = 10
    width = 700
    height = 450

    constructor() {
        super().loadImage('../img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500

        this.animate()
    }

    animate() {
        this.moveLeft()
    }
}