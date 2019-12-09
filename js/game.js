let game;
let w = window.innerHeight;
let h = window.innerHeight;

const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps:60,

    preStart: function(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        this.start()
    },

    start: function(){
        this.createGame()

        this.interval = setInterval(() => {
            this.clear()
            this.drawAll()
        }, 1000/this.fps)
        

    },

    createGame: function(){
        this.background = new Background(this.ctx, this.width, this.height)
    },

    drawAll: function(){
        this.background.draw();
    },

    clear: function(){
        this.ctx.clearRect(0,0,this.width,this.height)
    }
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