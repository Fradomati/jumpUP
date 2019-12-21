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


let go = false;
let jumperMove = undefined;

let goJump = false;
let goDown = false;

let face = "right"



const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    
    


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
        this.jumper = new Jumper(this.ctx, 100, 100, this.width, this.height)
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
        
  
        
       
    },

    jump: function () {
       this.jumper.jump()
      
    },

}

// Bucle de renderizado

function a() {
    function renderizado() {
        window.requestAnimationFrame(renderizado);
        Game.clear()
        Game.drawAll()
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




// Functions

function pushJumps(e) {
    for (let i = 0; i < power; i++) { jumperJump.push(e) } // el power dice si quiero que me lo mande de 1 en 1 o de 2 en 2 para dar más o menos fuerza.

}









