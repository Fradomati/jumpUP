let w = window.innerWidth;
let obsX = [w*0.5, w*0.3, w*0.6];
let obsY = [700, 500, 300];
let obsSize1 = [100, 75, 200];
let obsSize2 = [50, 35, 100];


class Obstacles {
    constructor(ctx) {
        this.ctx = ctx;



        // this.objs = {
        //     obj1: {
        //         x: 400,
        //         y: 400,
        //         size: [50, 100]
        //     }
        // }
    }

    draw() {
        for (let i = 0; i < obsX.length; i++) {
            this.ctx.fillRect(obsX[i], obsY[i], obsSize1[i], obsSize2[i])
        }
    }

}