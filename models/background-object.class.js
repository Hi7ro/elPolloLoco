class BackgroundObject extends MovableObject {
    width = 720
    height = 420
    y = 80
    x = 0

    constructor(imagePath) {
        super().loadImage(imagePath)
    }
}