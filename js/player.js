class Jumper {
    constructor(ctx, width, height, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = "img/idle_1.png";


        this.posX = canvasWidth / 2 - height / 2;

        this.posY0 = canvasHeight * 0.970 - width;
        this.posY = canvasHeight * 0.970 - width;

        // Movimiento

        this.speedY = 0;
        this.speedX = 0;
        this.grty = 0.5
        this.fall = this.speedY += this.grty

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
        if (keyDown === true) {
            if (key == "left") {
                this.speedX -= 1
            }
            else if (key == "right") {
                this.speedX += 1
            }
            else if (key == "jump" && jumpUP == false) {
                jumpUP = true;
                this.speedY -= 60
            }
        }

        
        this.speedY += this.grty // Simulo gravedad
        this.posX += this.speedX // Movimiento Lateral
        this.posY += this.speedY // Movimiento Vertical
        // console.log(Math.floor(obsY[0]))
        this.speedX *= 0.9 // Reduce la velocidad progresivamente, Lateral
        this.speedY *= 0.9 // Reduce la velocidad progresivamente, Vertical

        // Detecta si está en la base   

        if (this.floor() == true) {
            this.speedY = 0 - this.grty
        }

        // Aquí toca hacer una función que compruebe continuamente sobre qué plataforma está.
        this.collision()
        this.floorObs()
        
      
        // if (down == true) {
        //     this.speedY =  0 - this.grty
        // }
    }

    floor() {
        let yBot = Math.floor(this.posY + 116) // le resto 116 para que cuente desde la parte de abajo del Jumper.        

        if (yBot > Math.floor(obsY[0]) && yBot < Math.floor(obsY[0] + 10)) {
            return true
        } else {
            return false
        }

    }

    floorObs() {
        let xIzq = Math.floor(this.posX);
        let xDrc = Math.floor(this.posX + 100)
        let yBot = Math.floor(this.posY + 116) // le resto 116 para que cuente desde la parte de abajo del Jumper.
        let yTop = Math.floor(this.posY) // parte de arriba.
        console.log(xIzq, xDrc)

        for (let l = 1; l < numObs; l++) {

            if (yBot > Math.floor(obsY[l]) && yBot < Math.floor(obsY[l] + 5)) { // Suelo
               
                if (xDrc > obsX[l] + obsSize1[l] && xIzq > obsX[l] + obsSize1[l]) { // Si se sale por la drecha, bye bye
                    this.fall
                } else if (xDrc < obsX[l] && xIzq < obsX[l]) { // Si se sale por la izquierda.
                    this.fall
                } else {
                    this.speedY = 0 - this.grty
                }
            } else { this.fall }
        }
    }

        collision() {
            let xIzq = Math.floor(this.posX); 7
            let xDrc = Math.floor(this.posX + 100)  // le sumo 80 para que me coja 89px más hacia el centro desde la derecha.
            let yBot = Math.floor(this.posY + 116) // le resto 116 para que cuente desde la parte de abajo del Jumper.
            let yTop = Math.floor(this.posY)

            // Collision TOP
            for (let l = 1; l < numObs; l++) {
                if (yTop < Math.floor(obsY[l] + obsSize2[l]) && yTop > Math.floor(obsY[l])) { // "Techo"
                   
                    if (xIzq > obsX[l] && xIzq < obsX[l] + obsSize1[l]) {
                        console.log(xIzq, "obstáculo:", obsX[l], obsX[l] + obsSize1[l])
                        //this.speed = 0
                        this.speedY += this.grty*14
                        console.log(this.grty)
                    } else if (xDrc > obsX[l] && xDrc < obsX[l] +obsSize1[l]) {
                            //this.speed = 0
                            this.speedY += this.grty*14
                    }
                }   
            }
    }
    }

        // for (let i = 0; i < numObs; i++) {

        //     // ## CHOQUE POR ABAJO ##

        //     // 1º Compruebo a la altura de qué elemento está
        //     if (yBot <= obsY[i] ){
        //         console.log("OBSTÁCULO!")
        //       //  this.posY = obsY[i] -116
        //         return true
        //     }
        //     // if(xIzq < obsX[i] || xDrc > obsX[i]+obsSize1[i]){

        // }

        // La idea sería crear una función que todo el rato compruebe si está sobre una
        // plataforma, de manera que si deja de estar, la Vel se ponga positiva y el 
        // bicho caiga hasta que toque una plataforma, y que mientras la Vel o algo
        // similar sea distinto de 0, no se pueda tocar ningún elemento.

        // jump() {
        //     //console.log(jumperJump)
        //    // console.log(this.power)
        //    maxJump(jumperJump)
        //     if(goJump === true){

        //         if(this.speedY < maxJump(jumperJump)){
        //             this.speedY++
        //            console.log( this.speedY)
        //         }  else if (this.speedY >= maxJump(jumperJump)){
        //             jumperJump = []
        //             this.speedY = 0
        //             goJump = false
        //         }



        //     }

        // }
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

        // collision() {
        //     let xIzq = this.posX + 20; //le sumo 20 para que me coja 20px más hacia el centro del Jumper.
        //     let xDrc = this.posx + 80  // le sumo 80 para que me coja 89px más hacia el centro desde la derecha.
        //     let yBot = this.posY - 166; // le resto 116 para que cuente desde la parte de abajo del Jumper.
        //     let yTop = this.posY // parte de arriba.

        //     for (let i = 0; i < numObs; i++) {

        //     // ## CHOQUE POR ABAJO ##

        //        // 1º Compruebo a la altura de qué elemento está
        //         if(yBot >= obsY[i]) {
        //             console.log("OBSTÁCULO!")
        //             if(xIzq < obsX[i] || xDrc > obsX[i]+obsSize1[i]){
        //                 //this.posY = obsX[i]
        //             }
        //         }
        //         // Compruebo que esté entre el principio y el final de un obs.

        //     }
        // }

        //     if (this.posX + 70 < this.obsFloor[0] || this.posX - 70 > this.obsFloor[1]) {
        //         console.log(this.posX, this.obsFloor[0])
        //         this.stop = 0
        //         //goDown == true
        //         console.log("hola")

        //         this.obsFloor = []
        //         return true
        //     }
        // }

    



// Función para potencia de salto

function maxJump(a) {
    console.log("longitud", a.length)

    if (a.length <= 2) {
        return 15
    } else if (a.length >= 3 && a.length <= 45) {
        return 25
    } else if (a.length >= 56 && a.length <= 80) {
        return 30
    } else if (a.length >= 81) {
        return 35
    }

}

// Función para saber cuando deja de estar en la plataforma 

