class Jumper {
    constructor(ctx, width, height, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = "img/idle_1.png";


        this.posX = canvasWidth / 2 - height / 2;

        this.posY0 = canvasHeight * 0.98 - width;
        this.posY = canvasHeight * 0.98 - width;

        this.vel = 6
        this.power = 0
        this.grty = 0

        this.obsFloor = []
    }

    gravity() {
        this.posY += this.grty  
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move(vel) {
        //console.log("plataforma", this.obsFloor)
       
       if (this.noFloor() == true) return undefined
       //if(this.posY == posY0) 
        // Movimientos laterales, uso una array para que tenga un pequeño Sprint.
        for (let i = 0; i < 1; i++) {
            // Limpio el array de jumperMoves para que no carge la ram
            if (jumperMoves.length % 5 == 0) jumperMoves.splice(2, 2)

            if (jumperMoves[i] === 65) {
                this.posX -= vel
            }
            else if (jumperMoves[i] === 68) {
                this.posX += vel
            }
        }
        
        

    }

    // La idea sería crear una función que todo el rato compruebe si está sobre una
    // plataforma, de manera que si deja de estar, la Vel se ponga positiva y el 
    // bicho caiga hasta que toque una plataforma, y que mientras la Vel o algo
    // similar sea distinto de 0, no se pueda tocar ningún elemento.

    jump() {
        if (goJump === true) {
            if (this.power <= maxJump(jumperJump)) {
                this.posY -= this.vel * 5 // REVISAR Vel + this.vel * x
                this.posX += this.vel * 2.5 // REVISAR EL ÁNGULO
                this.power++
            } else if (this.power > maxJump(jumperJump)) {
                this.power = 1
                jumperJump = []
                goJump = false;
                goDown = true;
            }

        }
    }

    down() {
        if (goDown == true) {
            if (this.posY != this.posY0) {
                this.posY += this.vel * 2.5
                this.posX += this.vel / 2
                this.collision(this.posX, this.posY)
            } else if (this.posY == this.posY0) {
                goDown = false;
            }
        }
    }

    collision(x, y) {
        for (let i = 0; i < numObs; i++) {
            if (y >= obsY[i] - 116 && y <= (obsY[i]-116 + obsSize2[i])) {
                if (x >= obsX[i] -90 && x <= (obsX[i] + obsSize1[i])) {
                    goDown = false;
                    this.posY = obsY[i] - 116
                    this.obsFloor = [obsX[i], obsX[i] + obsSize1[i]] // tamaño de la plataforma
                }

            }
        }

    }
    // Función para saber cuando deja de estar en la plataforma 

    noFloor(){
        if(this.posX < this.obsFloor[0] || this.posX > this.obsFloor[1]){

            console.log("hola")
            goDown == true
            this.obsFloor = []
            return true
        }
    }

}

// Función para potencia de salto

function maxJump(a) {
    if (a.length >= 20) {
        return 20
    } else {
        return a.length
    }
}

// Función para saber cuando deja de estar en la plataforma 

