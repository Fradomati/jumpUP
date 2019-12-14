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

        // Medidas de Caida 

        this.vel = 8
        this.speedX = 1
        this.speedY = 1


        this.up = 20
        this.power = 1
        this.grty = this.vel
        this.distance = 5
        this.stop = 1

        this.obsFloor = []
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    gravity() {
        if (this.posY < this.posY0) {
            this.posY += this.grty * 4
            
            this.angulo()
        } else {
            console.log("hola")
            this.posY += this.grty
        }
    }

    angulo() {
        this.posX += this.distance
        console.log("angulo:", this.posX)
    }

   

    move() {

      //  this.posY -= this.grty
        console.log(go)
        if (go == true) {
            if (jumperMove === 65 && this.speedX < this.vel) {
                this.posX -= this.speedX
                console.log(this.speedX)
            this.speedX++
            }

            else if (jumperMove === 68 && this.speedX < this.vel) {
                this.posX += this.speedX
            this.speedX++
            }
        }

    }

    reset(){
            this.speedX = 0
        
    }

    // La idea sería crear una función que todo el rato compruebe si está sobre una
    // plataforma, de manera que si deja de estar, la Vel se ponga positiva y el 
    // bicho caiga hasta que toque una plataforma, y que mientras la Vel o algo
    // similar sea distinto de 0, no se pueda tocar ningún elemento.

    jump() {

        if (goJump === true && jumperJump.length > 0) {
            if (this.power <= maxJump(jumperJump)) {
                this.posY -= this.up * power
                console.log(this.power)
                this.posX += this.vel * 2.5 // REVISAR EL ÁNGULO
                this.power++
                
            } else if (this.power > maxJump(jumperJump)) {
                this.power = 1
                jumperJump = []
                goJump = false;
                // goDown = true;
            }

        }
       // this.collision(this.posY, this.posX)
    }




    down() {

    }

    collision(x, y) {
        for (let i = 0; i < numObs; i++) {
            if (y <= obsY[i] - 116 && y >= (obsY[i] - 116 + obsSize2[i])) { // Esto sería si golpease por abajo
                //this.stop = 1
            } else if (y >= obsY[i] - 116 && y <= (obsY[i] - 116 + obsSize2[i])) { // Significa que viene de arriba, cayendo
                if (x >= obsX[i] - 90 && x <= (obsX[i] + obsSize1[i])) { // Aquí me mide si cae entre los valores de un cuadro
                    this.posY = obsY[i] - 116
                    //this.stop = 1 
                    this.obsFloor = [obsX[i], obsX[i] + obsSize1[i]] // tamaño de la plataforma
                }

            }
        }

    }
    // Función para saber cuando deja de estar en la plataforma 

    noFloor() {

        if (this.posX + 70 < this.obsFloor[0] || this.posX - 70 > this.obsFloor[1]) {
            console.log(this.posX, this.obsFloor[0])
            this.stop = 0
            //goDown == true
            console.log("hola")

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

