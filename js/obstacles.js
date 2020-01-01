let w = window.innerWidth;
let h = window.innerHeight;
let floor = h * 0.98;
let obsX = [
  0,
  w * 0.2,
  w * 0.28,
  w * 0.27,
  w * 0.35,
  w * 0.5,
  w * 0.35,
  w * 0.55,
  w * 0.7,
  w * 0.8 /*p2*/,
  w * 0.8,
  w * 0.7,
  w * 0.62,
  w * 0.5,
  w * 0.35,
  w * 0.198,
  w * 0.25,
  w * 0.4,
  w * 0.6,
  w * 0.75 /*p3*/,
  w * 0.75,
  w * 0.68,
  w * 0.59,
  w * 0.5,
  w * 0.6,
  w * 0.45,
  w * 0.4,
  w * 0.2,
  w * 0.15,
  w * 0.05
]; // Inicio del elemento, izq a drcha
let obsY = [
  floor,
  h * 0.83,
  h * 0.83,
  h * 0.48,
  h * 0.675,
  h * 0.675,
  h * 0.48,
  h * 0.43,
  h * 0.298,
  h * 0.185 /*p2*/,
  h * 0.89,
  h * 0.8,
  h * 0.8,
  h * 0.8,
  h * 0.6,
  h * 0.45,
  h * 0.3,
  h * 0.31,
  h * 0.31,
  h * 0.185 /*p3*/,
  h * 0.89,
  h * 0.58,
  h * 0.8,
  h * 0.58,
  h * 0.38,
  h * 0.38,
  h * 0.38,
  h * 0.38,
  h * 0.33,
  h * 0.198
]; // Inicio de la altura, Arriba a bajo
let obsSize1 = [
  w,
  w * 0.05,
  w * 0.04,
  w * 0.04,
  w * 0.1,
  w * 0.1,
  w * 0.11,
  w * 0.11,
  w * 0.05,
  w * 0.05 /*p2*/,
  w * 0.05,
  w * 0.05,
  w * 0.025,
  w * 0.05,
  w * 0.05,
  w * 0.12,
  w * 0.055,
  w * 0.1,
  w * 0.025,
  w * 0.055 /*p3*/,
  w * 0.05,
  w * 0.1,
  w * 0.025,
  w * 0.05,
  w * 0.025,
  w * 0.1,
  w * 0.025,
  w * 0.1,
  w * 0.025,
  w * 0.05
]; // Final del elemento, derecha
let obsSize2 = [
  500,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05 /*p2*/,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05 /*p3*/,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05,
  h * 0.05
]; // Final del elemento, abajo.
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
    let num = 0;
    if (phase == 1) {
      p = 0; // p1 = 0 - 10 // p2 = 10 - 21 // p3 = 20 - 30
      num = 10;
    } else if (phase == 2) {
      p = 10;
      num = 20;
    } else if (phase == 3) {
      p = 20;
      num = 30;
    }
    for (p; p < num; p++) {
      if (p == 0) {
        this.ctx.drawImage(
          this.imageStart,
          obsX[p],
          obsY[p],
          obsSize1[p],
          obsSize2[p]
        );
      } else {
        this.ctx.drawImage(
          this.image,
          obsX[p],
          obsY[p],
          obsSize1[p],
          obsSize2[p]
        );
      }

      //this.ctx.fillRect(obsX[p], obsY[p], obsSize1[p], obsSize2[p])
    }
  }
}
