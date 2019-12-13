let game;
let go = false;
let jumperMove = undefined;
let jumperJump = []
let goJump = false;
let goDown = false;
let power = 2;

/*
let delta = 0;
let last = 0; */

const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    
    // moves: [],


    fps: 60,

    start: function () {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.createGame()
        a()
    },



    createGame: function () {
        this.background = new Background(this.ctx, this.width, this.height)
        this.jumper = new Jumper(this.ctx, 100, 116, this.width, this.height)
        this.obstacles = new Obstacles(this.ctx);
    },

    drawAll: function () {
        this.background.draw();
        this.jumper.draw();
        this.obstacles.draw();

    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    move: function () {
        this.jumper.move()
        this.jumper.gravity()
    },

    jump: function () {
        this.jumper.jump()
        this.jumper.down()
    },

}

// Bucle de renderizado

function a() {
    function renderizado() {
        window.requestAnimationFrame(renderizado);
        Game.clear()
        Game.jump()
        Game.drawAll()
        Game.move()
        


    //     document.addEventListener("keydown", function (e) {
    //         if (goDown == true) return undefined // Aquí evito que pueda moverse cayendo.
    //         if (e.keyCode == 65 || e.keyCode == 68) {
    //             if (goDown == true) { // Test si se cae de la plataforma
    //                 jumperMoves = []
    //             } else
    //                 jumperMoves.push(e.keyCode) // Movimiento 
    //         }
    //         else if (e.keyCode == 32) { pushJumps(e.keyCode)  /*jumperJump.push(e.keyCode).repeat(2)*/ }
    //         else { return undefined }
    //     })
    }
    window.requestAnimationFrame(renderizado)
}

// Keyboards

document.addEventListener("keydown", function (e) {
    if (goDown == true) return undefined // Aquí evito que pueda moverse cayendo.

    go = true
    
    if (e.keyCode == 65 || e.keyCode == 68) {
            jumperMove = e.keyCode
    }
    else if (e.keyCode == 32) { pushJumps(e.keyCode)  /*jumperJump.push(e.keyCode).repeat(2)*/ }
    else { return undefined }

})

document.addEventListener("keyup", function (e) {
    go = false

    if ( e.keyCode == 65 || e.keyCode == 68) {
        jumperMove = []
        

       
    } else if( e.keyCode == 32) {
        goJump = true;
    }

})



// Functions

function pushJumps(e) {
    for (let i = 0; i < power; i++) { jumperJump.push(e) } // el power dice si quiero que me lo mande de 1 en 1 o de 2 en 2 para dar más o menos fuerza.

}






















/*
class Game {
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = 1500;
        this.height = 1000;
        this.start()
        //this.background = new Background(this.ctx, this.width, this.height)

    }


    start() {
        this.createGame()

        this.drawAll();
    }

    createGame(){
        this.background = new Background(this.ctx, this.width, this.height)
    }

    drawAll(){
        this.background.draw();
    }
} */