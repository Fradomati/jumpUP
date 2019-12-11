let game;
let jumperMoves = []
let jumperJump = []
let goJump = false;
let goDown = false;
let power = 9;

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
    },

    drawAll: function () {
        this.background.draw();
        this.jumper.draw();
    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    move: function () {
        this.jumper.move()
    },

    jump: function() {
        this.jumper.jump()
        this.jumper.down()
    },

}

// Bucle de renderizado

function a() {
    function renderizado() {
        window.requestAnimationFrame(renderizado);
        Game.clear()
        Game.drawAll()
        Game.move()
        Game.jump()
    }
    window.requestAnimationFrame(renderizado)
}

// Keyboards

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 65 || e.keyCode == 68) { jumperMoves.push(e.keyCode) }
    else if (e.keyCode == 32) { pushJumps(e.keyCode)  /*jumperJump.push(e.keyCode).repeat(2)*/ }

})

document.addEventListener("keyup", function () {
    jumperMoves = []
    goJump = true
})



// Functions

function pushJumps(e){
    for(let i = 0; i < power; i++){jumperJump.push(e)}
    
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