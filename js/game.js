let game;

let keyDown = null;
let key = null;
let jumpUP = false;
let animateCounter = 0
let direction = 105 // Face Right
let phase = 1
let imFloor = "no"
let power = 15;
let jumperJump = []
let w2 = window.innerWidth;
let h2 = window.innerHeight;
let hPJ = h*0.1 // Alto pj
let wPJ = w*0.05 // Ancho pj

let go = false;
let jumperMove = undefined;

let goJump = false;
let goDown = false;

let face = "right"

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
        this.jumper = new Jumper(this.ctx, wPJ, hPJ, this.width, this.height)
        this.obstacles = new Obstacles(this.ctx);
    },

    drawAll: function () {
        this.background.draw();
        this.jumper.phases();
        this.jumper.draw();
        this.obstacles.draw();

    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },


    move: function () {
        this.jumper.move()
        
      //  this.jumper.gravity()
      //  this.jumper.collision()
        
       
    },

    jump: function () {
       this.jumper.jump()
      //  this.jumper.down()
    },

}

// Bucle de renderizado

function a() {
    function renderizado() {
        window.requestAnimationFrame(renderizado);
        Game.clear()
        Game.drawAll()
       // Game.jump()
        Game.move()
        

     
    }
    document.addEventListener("keydown", function (e) {
        keyDown = true
        switch(e.keyCode){
            case 65: // Left
            direction = 0   // Pj face left
            key = "left"
            animateCount()
            break;
            case 68: // Right
            direction = 105 // Pj face right
            key = "right"
            animateCount()
            break;
            case 32: // Space
            jumperJump.push(1)
            break;
        }
    })
    
    document.addEventListener("keyup",function (e) {
        if(e.keyCode == 32){
            key = "jump"
        } else {
            
            key = null;
        }
        keyDown = false;
    }) 
    window.requestAnimationFrame(renderizado)
}


function animateCount(){
    animateCounter++
    if(animateCounter == 6){
        animateCounter = 0
    } 
}

// Keyboards





// document.addEventListener("keydown", function (e) {
//     if (goDown == true) return undefined // Aquí evito que pueda moverse cayendo.

//     go = true
    
//     if (e.keyCode == 65 || e.keyCode == 68) {
        
//             jumperMove = e.keyCode
//     }
//     else if (e.keyCode == 32) { pushJumps(e.keyCode)  /*jumperJump.push(e.keyCode).repeat(2)*/ }
//     else { return undefined }

// })


// document.addEventListener("keyup", function (e) {
//     go = false
//     if ( e.keyCode == 65 || e.keyCode == 68) {
//         jumperMove = []

       
//     } else if( e.keyCode == 32) {
//         goJump = true;
        
//     }

// })



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