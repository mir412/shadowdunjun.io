class Player extends Sprite {
  constructor({ collisionBlocks = [], imageSrc, frameRate, animations, loop }) {
    super({ imageSrc, frameRate, animations, loop })
    this.position = {
      x: 200,
      y: 200,
    }

    this.velocity = {
      x: 0,
      y: 0,
    }

    this.sides = {
      bottom: this.position.y + this.height,
    }
    this.gravity = 1
    this.collisionBlocks = collisionBlocks
    this.health = 100

  }
  playerHealthBar(){
    if (this.health > 0){
      c.fillStyle = 'red'
      c.fillRect (this.position.x + 15, this.position.y + 10, this.width - 40, 10)
      c.fillStyle = 'green'
      c.fillRect (this.position.x + 15, this.position.y + 10, (this.width - 40) * this.health / 100, 10)
    }
    if(this.health == 0){
      this.switchSprite('death')
      setTimeout(()=>{
        this.position.x = 2000
      }, 400)
    }
  }
  blackOutBox(){
    if(this.health <= 0){
      c.fillStyle= 'red'
      c.fillRect(200,600,400,100)
    }
  }

  update() {
    this.position.x += this.velocity.x
    this.updateHitbox()
    this.checkForHorizontalCollisions()
    this.applyGravity()
    this.updateHitbox()
    this.playerHealthBar()
    this.blackOutBox()
    this.checkForVerticalCollisions()

  }
  Enemy(enemy){
      //Level 1
        if(((this.position.x  == enemy.position.x && ((this.position.y + 0.01 - 21) == enemy.position.y || (this.position.y + 0.01 - 20) == enemy.position.y)) || (this.position.x  == enemy2.position.x &&  ((this.position.y + 0.01 - 21)==enemy2.position.y || (this.position.y + 0.01 - 20)==enemy2.position.y))) && (level == 1 || level == 5 || level == 9)){
          setTimeout(()=>{
            this.health -= 10
          }, 500)
        }
      //Level 2
        if((this.position.x == enemy.position.x || this.position.x -0.99 == enemy.position.x || this.position.x -0.01 == enemy.position.x) && (level==2 || level == 6 || level == 10)){
          setTimeout(()=>{
            this.health -= 10
          }, 500)
        }
      //Level 3
        if(((this.position.x == enemy.position.x || this.position.x -0.99 == enemy.position.x || this.position.x -0.01 == enemy.position.x) && (this.position.y - 18.99 == enemy.position.y || this.position.y - 19.99 == enemy.position.y)&& (level == 3 || level == 7 || level == 11))){
          setTimeout(()=>{
            this.health -= 10
          }, 500)
        }
        if(this.position.x >= enemy2.position.x - 5 && this.position.x <= enemy2.position.x + 5 && (level == 3 || level == 7 || level == 11) && this.position.y <= 300){
          setTimeout(()=>{
            this.health -= 10
          }, 500)
        }
      //Boss
        let bx = boss.position.x
        let by = boss.position.y 
        let px = this.position.x
        if(by == 285 && (px-0.01 >= bx - 30 && px-0.01 <= bx + 30 || px+0.01 >= bx - 30 && px+0.01 <= bx + 30)){
          setTimeout(()=>{
            this.health -= 0.5
          }, 500)
        }
        if(by == 286 && (px-0.01 >= bx - 30 && px-0.01 <= bx + 30 || px+0.01 >= bx - 30 && px+0.01 <= bx + 30)){
          setTimeout(()=>{
            this.health -= 0.5
          }, 500)
        }
  }

  handleInput(keys) {
    if (this.preventInput) return
    this.velocity.x = 0
    if (keys.d.pressed) {
      this.switchSprite('runRight')
      this.velocity.x = 2
      this.lastDirection = 'right'
    } else if (keys.a.pressed) {
      this.switchSprite('runLeft')
      this.velocity.x = -2
      this.lastDirection = 'left'
    }else if(keys.q.pressed && this.lastDirection == 'left'){
      this.switchSprite('attackLeft')
    }else if(keys.q.pressed && this.lastDirection == 'right'){
      this.switchSprite('attack')
    }else if(keys.o.pressed){
      this.switchSprite('death')
    }else if(this.health <= 0 && this.lastDirection == 'left'){
      this.switchSprite('deathLeft')
      setTimeout(()=>{
        this.position.x = 2000
        this.switchSprite('idleLeft')
    },500)
    }else if(this.health <= 0 && this.lastDirection == 'right'){
      this.switchSprite('death')
      //window.location.href = "username.html";
      setTimeout(()=>{
        this.position.x = 2000
        this.switchSprite('idleLeft')
    },500)
    }else {
      if (this.lastDirection === 'left') this.switchSprite('idleLeft')
      else this.switchSprite('idleRight')
    }
    
  }

  switchSprite(name) {
    if (this.image === this.animations[name].image) return
    this.currentFrame = 0
    this.image = this.animations[name].image
    this.frameRate = this.animations[name].frameRate
    this.frameBuffer = this.animations[name].frameBuffer
    this.loop = this.animations[name].loop
    this.currentAnimation = this.animations[name]
  }

  updateHitbox() {
    this.hitbox = {
      position: {
        x: this.position.x + 1,
        y: this.position.y + 16,
      },
      width: 40,
      height: 63,
    }
  }

  checkForHorizontalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      // if a collision exists
      if (
        this.hitbox.position.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >=
          collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          collisionBlock.position.y &&
        this.hitbox.position.y <=
          collisionBlock.position.y + collisionBlock.height
      ) {
        // collision on x axis going to the left
        if (this.velocity.x < -0) {
          const offset = this.hitbox.position.x - this.position.x
          this.position.x =
            collisionBlock.position.x + collisionBlock.width - offset + 0.01
            break
        }

        if (this.velocity.x > 0) {
          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width
          this.position.x = collisionBlock.position.x - offset - 0.01
          break
        }
      }
    }
  }

  applyGravity() {
    this.velocity.y += this.gravity
    this.position.y += this.velocity.y
  }

  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      // if a collision exists
      if (
        this.hitbox.position.x <=
          collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >=
          collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >=
          collisionBlock.position.y &&
        this.hitbox.position.y <=
          collisionBlock.position.y + collisionBlock.height
      ) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0
          const offset = this.hitbox.position.y - this.position.y
          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01
          break
        }

        if (this.velocity.y > 0) {
          this.velocity.y = 0
          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height
          this.position.y = collisionBlock.position.y - offset - 0.01
          break
        }
      }
    }
  }
}
