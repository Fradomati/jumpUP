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

        // Movimiento

        this.vel = 8
        this.speedX = 1
        this.speedY = 0

        // Medidas Salto 
        this.power = 1
        this.minPower = 1
        this.maxPower = 20


        this.grty = 1
        this.distance = 5
        this.stop = 1

        this.obsFloor = []
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

   

    angulo() {
        this.posX += this.distance
        console.log("angulo:", this.posX)
    }



    move() {

        //this.posY += this.grty (TENGO QUE HACER QUE MIENTRAS ESTÉ SOBRE UN OBS, SE MANTENGA)
        
        this.posY -= this.speedY * this.grty // Cuando uso this.jump(), la velocidad cambia y salta... y si grty cambia, caerá
        
        if (go === true) {
            if (jumperMove === 65) { // Miro hacia qué lado (IZQUIERDA)
                face = "right" // Dirección de vista
                this.posX -= this.speedX
                if (this.speedX < this.vel) { // Limito la velocidad
                    this.speedX++
                }
            }

            else if (jumperMove === 68) { // Miro hacia la Derecha
                face = "left" // Dirección de vista
                this.posX += this.speedX
                if (this.speedX < this.vel) { // Limito la velocidad
                    this.speedX++
                }
            }
        }

    }

    reset() {
        this.speedX = 0

    }

    // La idea sería crear una función que todo el rato compruebe si está sobre una
    // plataforma, de manera que si deja de estar, la Vel se ponga positiva y el 
    // bicho caiga hasta que toque una plataforma, y que mientras la Vel o algo
    // similar sea distinto de 0, no se pueda tocar ningún elemento.

    jump() {
        //console.log(jumperJump)
       // console.log(this.power)
       maxJump(jumperJump)
        if(goJump === true){
          
            if(this.speedY < maxJump(jumperJump)){
                this.speedY++
               console.log( this.speedY)
            }  else if (this.speedY >= maxJump(jumperJump)){
                jumperJump = []
                this.speedY = 0
                goJump = false
            }
           


        }

    }
        // // this.collision(this.posY, this.posX)
        //  }




    // down() {
    //     return 0
    // }

    // gravity() {
    //    let x = this.posX;
    //    let y = this.posY;

    //     for (let i = 0; i < numObs; i++) {
    //         if (y <= obsY[i] - 116 && y >= (obsY[i] - 116 + obsSize2[i])) { // Esto sería si golpease por abajo
    //             //this.stop = 1
    //         } else if (y >= obsY[i] - 116 && y <= (obsY[i] - 116 + obsSize2[i])) { // Significa que viene de arriba, cayendo
    //             if (x >= obsX[i] - 90 && x <= (obsX[i] + obsSize1[i])) { // Aquí me mide si cae entre los valores de un cuadro
    //                 this.posY = obsY[i] - 116
    //                 //this.stop = 1 
    //                 this.obsFloor = [obsX[i], obsX[i] + obsSize1[i]] // tamaño de la plataforma
    //             }

    //         }
    //     }

    // }
    // Función para saber cuando deja de estar en la plataforma 

    collision() {
        let xIzq = this.posX + 20; //le sumo 20 para que me coja 20px más hacia el centro del Jumper.
        let xDrc = this.posx + 80  // le sumo 80 para que me coja 89px más hacia el centro desde la derecha.
        let yBot = this.posY - 166; // le resto 116 para que cuente desde la parte de abajo del Jumper.
        let yTop = this.posY // parte de arriba.

        for (let i = 0; i < numObs; i++) {

        // ## CHOQUE POR ABAJO ##

           // 1º Compruebo a la altura de qué elemento está
            if(yBot >= obsY[i]) {
                console.log("OBSTÁCULO!")
                if(xIzq < obsX[i] || xDrc > obsX[i]+obsSize1[i]){
                    //this.posY = obsX[i]
                }
            }
            // Compruebo que esté entre el principio y el final de un obs.
            
        }
    }
        
    //     if (this.posX + 70 < this.obsFloor[0] || this.posX - 70 > this.obsFloor[1]) {
    //         console.log(this.posX, this.obsFloor[0])
    //         this.stop = 0
    //         //goDown == true
    //         console.log("hola")

    //         this.obsFloor = []
    //         return true
    //     }
    // }

}

// Función para potencia de salto

function maxJump(a) {
    console.log("longitud", a.length)
   
    if (a.length <= 2) {
        return 15
    } else if(a.length >= 3 && a.length <= 45){
        return 25
    } else if(a.length >= 56 && a.length <= 80) {
        return 30
    } else if(a.length >= 81){
        return 35
    }

}

// Función para saber cuando deja de estar en la plataforma 

