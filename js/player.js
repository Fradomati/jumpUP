class Jumper{
    constructor(ctx, width, height, canvasWidth, canvasHeight){
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = "img/idle_1.png";

        this.posX = canvasWidth / 2 - height / 2;
        this.posY = canvasHeight * 0.98 - width;
    }


    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
}