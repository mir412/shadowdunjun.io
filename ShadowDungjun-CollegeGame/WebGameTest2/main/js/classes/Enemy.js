class Enemy extends Sprite {
  constructor({ imageSrc, frameRate, animations, loop }) {
    super({ imageSrc, frameRate, animations, loop });
    this.position = {
      x: 650,
      y: 570,
    };
    this.bossHealth = 100
    this.enemyHealth = 2
    this.enemyHealth2 = 2
  }
    //boss health
    bossHealthBar(){
      if (boss.bossHealth > 0){
        c.fillStyle = 'red'
        c.fillRect (this.position.x , this.position.y + 10, this.width, 10)
        c.fillStyle = 'green'
        c.fillRect (this.position.x, this.position.y + 10, this.width * this.bossHealth / 100, 10)
      }
    }

  switchSprite(name) {
    if (this.image === this.animations[name].image) return;
    this.currentFrame = 0;
    this.image = this.animations[name].image;
    this.frameRate = this.animations[name].frameRate;
    this.frameBuffer = this.animations[name].frameBuffer;
    this.loop = this.animations[name].loop;
    this.currentAnimation = this.animations[name];
  }
}