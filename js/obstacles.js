let w = window.innerWidth;
let h = window.innerHeight;
let floor = h * 0.99
let obsX = [0, w*0.2, w*0.3, w*0.6, w*0.4, w*0.4, w*0.4, w*0.6]; // Inicio del elemento, izq a drcha
let obsY = [floor, 850, 650, 400, 400, 195, 850, 700]; // Inicio de la altura, Arriba a bajo
let obsSize1 = [w, 100, 75, 200, 200, 230, 230, 100]; // Final del elemento, derecha
let obsSize2 = [150, 50, 50, 50, 50, 50, 50, 50]; // Final del elemento, abajo.
let numObs = obsX.length - 5; // -i + 1
let p = null;


// Establecer Fases, contador de fases.

class Obstacles {
    constructor(ctx) {
        this.ctx = ctx;

    }

    draw() {

       let num = 0
        if(phase == 1) { 

            p = 0
            num = 6
        } else if(phase == 2){
            p = 6
            num = 10
        }
            for (p; p < num; p++) {
           
                this.ctx.fillRect(obsX[p], obsY[p], obsSize1[p], obsSize2[p])
            }

        
      
    }

}