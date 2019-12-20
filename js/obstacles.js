let w = window.innerWidth;
let h = window.innerHeight;
let floor = h * 0.98
let obsX = [0, w*0.2, w*0.3, w*0.6, w*0.35, w*0.45, w*0.4, w*0.6]; // Inicio del elemento, izq a drcha
let obsY = [floor, 850, 650, 400, 500, 195, 850, 700]; // Inicio de la altura, Arriba a bajo
let obsSize1 = [w, 100, 75, 200, 200, 230, 230, 100]; // Final del elemento, derecha
let obsSize2 = [500, 50, 50, 50, 50, 50, 50, 50]; // Final del elemento, abajo.
let numObs = obsX.length - 5; // -i + 1
let p = null;


// Establecer Fases, contador de fases.

class Obstacles {
    constructor(ctx) {
        this.ctx = ctx;

        this.imageStart = new Image();
        this.imageStart.src = "img/MakingMap2.png";

        this.image = new Image();
        this.image.src = "img/stone_floor.png";

    }

    draw() {

       let num = 0
        if(phase == 1) { 

            p = 0
            num = 6
        } else if(phase == 2){
            p = 6
            num = 7
        }
            for (p; p < num; p++) {
                if(p == 0) {
                    this.ctx.drawImage(this.imageStart, obsX[p], obsY[p], obsSize1[p], obsSize2[p])
                } else {
                    this.ctx.drawImage(this.image, obsX[p], obsY[p], obsSize1[p], obsSize2[p])
                }
                
                //this.ctx.fillRect(obsX[p], obsY[p], obsSize1[p], obsSize2[p])
            }

        
      
    }

}