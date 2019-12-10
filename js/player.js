class Jumper {
    constructor(ctx, width, height, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = "img/idle_1.png";

        this.posX = canvasWidth / 2 - height / 2;
        this.posY = canvasHeight * 0.98 - width;

        this.vel = 6
        this.power = 1
    }


    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move() {
        // Movimientos laterales, uso una array para que tenga un pequeño Sprint.
        for (let i = 0; i < 2; i++) {
            // Limpio el array de jumperMoves para que no carge la ram
            if (jumperMoves.length % 5 == 0) jumperMoves.splice(2, 2)

            if (jumperMoves[i] === 65) {
                this.posX -= this.vel
            }
            else if (jumperMoves[i] === 68) {
                this.posX += this.vel
            }
        }

    }

    jump() {
      if(goJump === true){
        if(this.power <= maxJump(jumperJump) ){
            this.posY -= this.vel * 5
            this.posX += this.vel * 2.5 // REVISAR EL ÁNGULO
            this.power++
        } else if(this.power > maxJump(jumperJump)){
            this.power = 1
            jumperJump = []
            goJump = false;
            goDown = true;
        }
        
      }
    }

    down() {
        if(goDown == true){
            if(this.posY != 862.36){
                this.posY += this.vel * 2.5
                this.posX += this.vel / 2
            } else if (this.posY == 862.36) {
                goDown = false;
            }
        }
    }
}

// Función para potencia de salto

function maxJump(a){
    if(a.length >= 20){
        return 20
    } else {
        return a.length
    }
}