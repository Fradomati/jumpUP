class Jumper {
    constructor(ctx, width, height, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = "img/idle_1.png";


        this.posX = canvasWidth / 2 - height / 2;

        this.posY0 = canvasHeight * 0.98- width;
        this.posY = canvasHeight * 0.98 - width;

        // Medidas de Caida 

        this.vel = 6
        this.power = 0
        this.grty = this.vel
        this.distance = 1
        this.stop = 1

        this.obsFloor = []
    }

    gravity() {
        this.posY += this.grty
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move() {

      this.posY -= this.grty

        if(go == true){
            if (jumperMove === 65) {
                this.posX -= this.vel
            }

            else if (jumperMove=== 68) {
                this.posX += this.vel
            }
        }

          
        

    }

    // La idea sería crear una función que todo el rato compruebe si está sobre una
    // plataforma, de manera que si deja de estar, la Vel se ponga positiva y el 
    // bicho caiga hasta que toque una plataforma, y que mientras la Vel o algo
    // similar sea distinto de 0, no se pueda tocar ningún elemento.

    jump() {

        if(goJump === true && jumperJump.length > 0){
            if(this.power <= maxJump(jumperJump) ){
                this.posY -= this.vel * 5
                this.posX += this.vel * 2.5 // REVISAR EL ÁNGULO
                this.power++
            } else if(this.power > maxJump(jumperJump)){
                this.power = 1
                jumperJump = []
                goJump = false;
               // goDown = true;
            }
    
          }
        } 

        
    

    down() {
        
        
    }

    collision(x, y) {
        for (let i = 0; i < numObs; i++) {
            if (y <= obsY[i] - 116 && y >= (obsY[i] - 116 + obsSize2[i])) {
                //this.stop = 1
            } else if (y >= obsY[i] - 116 && y <= (obsY[i] - 116 + obsSize2[i])) {
                if (x >= obsX[i] - 90 && x <= (obsX[i] + obsSize1[i])) {
                   // goDown = false;
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

