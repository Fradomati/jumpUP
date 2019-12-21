let testY = null;


class Jumper {
    constructor(ctx, width, height, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = "img/Zombies.png"

        //this.image.src = "img/idle_1.png";


        this.posX = canvasWidth / 2 - height / 2;

        this.posY0 = canvasHeight * 0.96 - width;
        this.posY = canvasHeight * 0.96 - width;

        // Movimiento

        this.speedY = 0;
        this.speedX = 0;
        this.grty = 0.8 // antes estaba a 0.5   
        this.fall = this.speedY += this.grty * 5

        this.distance = 5
        this.stop = 1

        this.obsFloor = []
    }

    draw() {
        //this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        this.ctx.drawImage(this.image, 0+(100*animateCounter), direction, 100, 100, this.posX, this.posY, this.width, this.height);
        testY = this.posY;
    }



    angulo() {
        this.posX += this.distance
       
    }


    phases(){

        if(this.posY <= 150 && imFloor == "yes" && phase == 1){
            phase = 2
           
            this.changePhase()
        } else if(this.posY <= 150 && imFloor == "yes" && phase == 2) {
            phase = 3
            this.changePhase()
          
        } else if(this.posY <= 150 && imFloor == "yes" && phase == 3){
            console.log("Victory!")
         } 


    }



    move() {

        if(this.speedY == -(this.grty)){ // evito que pueda moverse una vez hecho el salto.

        
        if (keyDown === true) {
            if (key == "left") {
                face = "left"
                this.speedX -= 1
            }
            else if (key == "right") {
                face = "right"
                this.speedX += 1
            }
        } else if( keyDown == false && key == "jump") {

                jumpUP = true;
                imFloor = "no" // ya no está en la plataforma

                maxJump(jumperJump)
                this.speedY -= 4 * power
              
                if(face === "right"){
                    this.speedX += 2 * power
                } else {
                    this.speedX -= 2 * power
                }
             key = null;
             jumperJump = []
            }
        }
    


        this.speedY += this.grty // Simulo gravedad
        this.posX += this.speedX // Movimiento Lateral
        this.posY += this.speedY // Movimiento Vertical
      
        this.speedX *= 0.9 // Reduce la velocidad progresivamente, Lateral
        this.speedY *= 0.9// Reduce la velocidad progresivamente, Vertical

        // Detecta si está en la base   

        if (this.floor() == true) {
            this.speedY = 0 - this.grty
        }
        

        // Aquí toca hacer una función que compruebe continuamente sobre qué plataforma está.
        this.floorObs()
        this.collision()
      
        

       
    }

    changePhase(){
        imFloor = "no"
        this.posY = this.posY + 700
            
    
    }

    floor() {
        if(phase == 1) {

        

        let yBot = Math.floor(this.posY + 105) // le resto 116 para que cuente desde la parte de abajo del Jumper.        

        if (yBot > Math.floor(obsY[0]) && yBot < Math.floor(obsY[0] + 10)) {
            
            return true
        } else {
            return false
        }

     } else if(this.posY > h && phase == 3) { // Caída y salida por arriba
        this.posY = 0
        phase = 2
       
        
    } else if(this.posY > h && phase == 2) { // Caída y salida por arriba, vuelta a fase 1
        this.posY = 0
        phase = 1
       
       
    }

    }

    floorObs() {
        
      
        let l = 1
        let num = 5
        let xIzq = Math.floor(this.posX + 25);
        let xDrc = Math.floor(this.posX + 65)
        let yBot = Math.floor(this.posY + 100) 
        let yTop = Math.floor(this.posY) 
        
        if(phase == 1){
            l = 1
            num = 10 

        } else if (phase == 2) {

            
            l = 10
            num = 20
        } else if (phase == 3){
            l = 20
            num = 30
        }
       

        for (l; l < num; l++) {
            
            if (yBot <= obsY[l] + 15 && yBot >= obsY[l] - 5) { // Suelo
                console.log(this.posY, yBot, obsY[l])
                if (xDrc > obsX[l] + obsSize1[l] && xIzq > obsX[l] + obsSize1[l]) { // Si se sale por la drecha, bye bye
                    
                    imFloor = "no"
                    this.fall  
                  
                            
                               
                } else if (xDrc < obsX[l] && xIzq < obsX[l]) { // Si se sale por la izquierda.
                    imFloor = "no"
                    this.fall
                   
                    
                    
                } else {
                    if(this.posY <= 200){
                        imFloor = "yes" // Certifico que está sobre la plataforma superior para el cambio de fase
                    }
                  
                    this.speedY = 0 - this.grty
                   
                }
            } else { 
                this.fall 
                
            }
                
        }
    

}

    collision() {

       
        let l = 0
        let num = 5
        let xIzq = Math.floor(this.posX +25); 
        let xDrc = Math.floor(this.posX + 65)    
        let yTop = Math.floor(this.posY)
        let yBot = Math.floor(this.posY + 100) 

        if(phase == 1){
            l = 1 
            num = 10
         

        } else if (phase == 2) {
            l = 10
            num = 20
        } else if (phase == 3){
            l = 20
            num = 30
        }
       
        // Collision TOP
        for (l; l < num; l++) {
            if (yTop < Math.floor(obsY[l] + obsSize2[l]) && yTop > Math.floor(obsY[l])) { // "Techo"

                if (xIzq > obsX[l] && xIzq < obsX[l] + obsSize1[l]) {
                    
                    //this.speed = 0
                    this.speedY = 0 - this.grty
                    this.speedY += this.grty * 10
                    //console.log(this.grty)
                } else if (xDrc > obsX[l] && xDrc < obsX[l] + obsSize1[l]) {
                    //this.speed = 0
                    this.speedY = 0 - this.grty
                    this.speedY += this.grty * 10
                }
            }
        }

        // Collision Left   

        // for (let l = 1; l < numObs; l++) {

        //     if (xDrc <= obsX[l]) {    // Lado Izquierdo
        //         if (yBot > obsY[l] + 5 && yBot < obsY[l] + obsSize2[l]-10) {
        //             if (xDrc >= obsX[l] - 5) {
                       
        //                 this.speedX = 0 - this.grty
        //                 this.speedX -= this.grty * 10
        //             }  else  if (yBot > obsY[l] && yBot < obsY[l] + obsSize2[l]) {
        //                 if (xDrc >= obsX[l] - 5) {
                         
        //                     this.speedX = 0 - this.grty
        //                     this.speedX -= this.grty * 10
        //                 }
        //             }
        //         }
        //     }

        //     if (xDrc >= obsX[l] +obsSize1[l]) {    // Lado derecho
        //         if (yBot > obsY[l] + 5 && yBot < obsY[l] + obsSize2[l]) {
        //             if (xDrc <= obsX[l] + obsSize1[l] + 5) {
                       
        //                 this.speedX = 0 - this.grty
        //                 this.speedX += this.grty * 10

        //             }
        //         }
        //     }
        // }
    }
}





        // Función para potencia de salto

        function maxJump(a) {
         

            if (a.length <= 2) {
                power = 5
            } else if (a.length >= 3 && a.length <= 5 ) {
                power = 7
            } else if (a.length >= 6 && a.length <= 10 ) {
                power = 8 
            } else if (a.length >= 11 && a.length <= 14 ) {
                power = 9 
            } else if (a.length >= 15 && a.length <= 18 ) {
                power = 10 
            } else if (a.length >= 19 && a.length <= 22 ) {
                power = 11 
            } else if (a.length >= 23 && a.length <= 25 ) {
                power = 12
            } else if (a.length >= 26) {
                power = 15
            } 

        }



