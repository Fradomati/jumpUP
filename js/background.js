class Background {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image_1 = new Image();
    this.image_1.src = "img/bc_zombie_jump_1.jpg";
    this.image_2 = new Image();
    this.image_2.src = "img/bc_zombie_jump_2.jpg";
    this.image_3 = new Image();
    this.image_3.src = "img/bc_zombie_jump_3.jpg";

    this.posX = 0;
    this.posY = 0;
  }

  draw() {
    if (phase == 1) {
      this.ctx.drawImage(
        this.image_1,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
    } else if (phase == 2) {
      this.ctx.drawImage(
        this.image_2,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
    } else if (phase == 3) {
      this.ctx.drawImage(
        this.image_3,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
    }
  }
}
