let w = window.innerWidth;
let h = window.innerHeight;
let floor = h * 0.99
let obsX = [0, w*0.5, w*0.3, w*0.6]; // Inicio del elemento, izq a drcha
let obsY = [floor, 700, 500, 300]; // Inicio de la altura, Arriba a bajo
let obsSize1 = [w, 100, 75, 200]; // Final del elemento, derecha
let obsSize2 = [h*0.1, 50, 35, 100]; // Final del elemento, abajo.
let numObs = obsX.length;


class Obstacles {
    constructor(ctx) {
        this.ctx = ctx;

    }

    draw() {
        for (let i = 0; i < numObs; i++) {
            this.ctx.fillRect(obsX[i], obsY[i], obsSize1[i], obsSize2[i])
        }
    }

}