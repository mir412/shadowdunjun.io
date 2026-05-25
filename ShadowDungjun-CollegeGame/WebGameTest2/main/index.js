const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


score = 0;


canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9 // 576

let parsedCollisions
let collisionBlocks
let background
let doors
let f = true
let ng = 0
const player = new Player({
  imageSrc: './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png',
  frameMax: 1,
  scale: 1.5,

  animations: {
    idleRight: {
      frameRate: 10,
      frameBuffer: 2,
      loop: true,
      imageSrc : './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png',
    },
    idleLeft: {
      frameRate: 10,
      frameBuffer: 2,
      loop: true,
      imageSrc: './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_IdleLeft.png',
    },
    attack: {
      frameRate: 4,
      frameBuffer: 2,
      loop: true,
      imageSrc : './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Attack.png',
    },
    attackLeft: {
      frameRate: 4,
      frameBuffer: 2,
      loop: true,
      imageSrc : './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_AttackLeft.png',
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Run.png',
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_RunLeft.png',
    },
    death: {
      frameRate:  10,
      frameBuffer: 7,
      loop: true,
      imageSrc: './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Death.png',
    },
    deathLeft: {
      frameRate:  10,
      frameBuffer: 7,
      loop: true,
      imageSrc: './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_DeathLeft.png',
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 4,
      loop: false,
      imageSrc: './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Roll.png',
      onComplete: () => {
        console.log('completed animation')
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level++
            if(level == 11){
              enemy.enemyHealth += 200
              enemy.enemyHealth2 += 200
              enemy.bossHealth += 10
              ng += 1
            }
            if (level === 11) {
            level = 1
            }
            levels[level].init()
            player.switchSprite('idleLeft')
            player.preventInput = false
            gsap.to(overlay, {
              opacity: 0,
            })
          },
        })
      },
    },
  },
  enterDoorLeft: {
    frameRate: 8,
    frameBuffer: 4,
    loop: false,
    imageSrc: './img/king/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_RollLeft.png',
    onComplete: () => {
      console.log('completed animation')
      gsap.to(overlay, {
        opacity: 1,
        onComplete: () => {
          level++
          if(level == 11){
            enemy.enemyHealth += 2
            enemy.enemyHealth2 += 2
            enemy.bossHealth += 10
            ng += 1
          }
          if (level === 11) {
          level = 1
          }
          levels[level].init()
          player.switchSprite('idleLeft')
          player.preventInput = false
          gsap.to(overlay, {
            opacity: 0,
          })
        },
      })
    },
  },
})
let level = 1
let levels = {
  1: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks

      enemy.position.x = 600
      enemy.position.y = 285
      enemy2.position.x = 400
      enemy2.position.y = 285


      if (player.currentAnimation) player.currentAnimation.isActive = false


      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel1.png',
      })
      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 270,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  2: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 96
      player.position.y = 140

      enemy.position.x = 300
      enemy.position.y = 410
      enemy2.position.x = 3000


      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel2.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 772.0,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  3: {
    init: () => {
      parsedCollisions = collisionsLevel3.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 750
      player.position.y = 230


 
      enemy.position.x = 640
      enemy.position.y = 350
      enemy2.position.x = 300
      enemy2.position.y = 350

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel3.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 176.0,
            y: 335,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  4: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks

      boss.position.x = 600
      boss.position.y = 285
      enemy.position.x = 2000
      enemy2.position.x = 2000


      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel1.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 270,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  5: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks

      player.position.x = 200
      player.position.y = 280
      enemy.position.x = 500
      enemy.position.y = 285
      enemy2.position.x = 400
      enemy2.position.y = 285

      if (player.currentAnimation) player.currentAnimation.isActive = false


      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel1.png',
      })
      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 270,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  6: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 96
      player.position.y = 140

      enemy.position.x = 300
      enemy.position.y = 410
      enemy2.position.x = 3000


      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel2.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 772.0,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  7: {
    init: () => {
      parsedCollisions = collisionsLevel3.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 750
      player.position.y = 230


 
      enemy.position.x = 640
      enemy.position.y = 350
      enemy2.position.x = 300
      enemy2.position.y = 350


      if (player.currentAnimation) player.currentAnimation.isActive = false


      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel3.png',
      })
      doors = [
        new Sprite({
          position: {
            x: 176.0,
            y: 335,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  8: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks

      boss.position.x = 600
      boss.position.y = 285
      enemy.position.x = 2000
      enemy2.position.x = 2000

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel1.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 270,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  9: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
 
      player.position.x = 200
      player.position.y = 280

      enemy.position.x = 500
      enemy.position.y = 285
      enemy2.position.x = 400
      enemy2.position.y = 285

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel1.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 270,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  10: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 96
      player.position.y = 140

      enemy.position.x = 300
      enemy.position.y = 410
      enemy2.position.x = 3000


      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel2.png',
      })

    doors = [
        new Sprite({
          position: {
            x: 772.0,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  11: {
    init: () => {
      parsedCollisions = collisionsLevel3.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 750
      player.position.y = 230

 
      enemy.position.x = 640
      enemy.position.y = 350
      enemy2.position.x = 300
      enemy2.position.y = 350
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel3.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 176.0,
            y: 335,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  12: {
    init: () => {
      
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks

      boss.position.x = 600
      boss.position.y = 285
      enemy.position.x = 2000
      enemy2.position.x = 2000

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel1.png',
      })
      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 270,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  
};


const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  q: {
    pressed: false,
  },
  o: {
    pressed: false,
  },
}

const overlay = {
  opacity: 0,
}

let marginLeft = false

function animate() {
  window.requestAnimationFrame(animate)

  background.draw()

  doors.forEach((door) => {
    door.draw()
  })
  //collisionBlocks.forEach((block) => {
   // block.draw()
 // })

  player.handleInput(keys)
  player.Enemy(enemy)
  player.draw()
  player.update()

  enemy.draw()
  enemy2.draw()
  
  newPos()

  const ex = enemy.position.x 
  const ey = enemy.position.y
  const ex2 = enemy2.position.x
  const ey2 = enemy2.position.y 
  const px = player.position.x - 1
  const py = player.position.y 
  const bx = boss.position.x
  const by = boss.position.y

  let eh = enemy.Health

  if(keys.q.pressed == true && (px <= ex && px >= ex - 40 && px <= ex + 40) && (py+0.01 - 20 == ey) && (level == 1 || level == 5 || level ==9)){
    enemy.enemyHealth-=2
    if(enemy.enemyHealth <= 1 && enemy.position.y == 284){
    enemy.switchSprite('deathLeft')
    score++
    setTimeout(() => {
      enemy.position.x = 5000
      enemyHealth =+ eh
      enemy.switchSprite('idle')
    }, 400);
  }

  if(enemy.enemyHealth <= 1 && enemy.position.y == 285){
    enemy.switchSprite('death')
    score++
    setTimeout(() => {
      enemy.position.x = 5000
      enemyHealth =+ eh
      enemy.switchSprite('idle')
    }, 400);
  }
  }
  if(keys.q.pressed == true && (px <= ex && px >= ex - 40 && px <= ex + 40) && (py+0.01 - 23 == ey || py+0.01 - 24 == ey) && (level == 2 || level == 6 || level == 10)){
    enemy.enemyHealth-=2
    if(enemy.enemyHealth <= 1 && enemy.position.y == 410){
    enemy.switchSprite('deathLeft')
    score++
    setTimeout(() => {
      enemy.position.x = 5000
      enemyHealth =+ eh
      enemy.switchSprite('idle')
    }, 400);
  }
  if(enemy.enemyHealth <= 1 && enemy.position.y == 409){
    enemy.switchSprite('death')
    score++
    setTimeout(() => {
      enemy.position.x = 5000
      enemyHealth =+ eh
      enemy.switchSprite('idle')
    }, 400);
  }
  }
  if(keys.q.pressed == true && (px >= ex - 40 && px <= ex + 40) && (py+0.01 - 19 == ey || py+0.01 - 20 == ey) && (level == 3 || level == 7 || level == 11)){
    enemy.enemyHealth-=2
    if(enemy.enemyHealth <= 1 && enemy.position.y == 350){
      enemy.switchSprite('deathLeft')
      score++
      setTimeout(() => {
        enemy.position.x = 5000
        enemyHealth =+ eh
        enemy.switchSprite('idle')
      }, 400);
    }
  
    if(enemy.enemyHealth <= 1 && enemy.position.y == 349){
      enemy.switchSprite('death')
      score++
      setTimeout(() => {
        enemy.position.x = 5000
        enemyHealth =+ eh
        enemy.switchSprite('idle')
      }, 400);
    }
  }
  if(keys.q.pressed == true && (px >= ex2 - 40 && px <= ex2 + 40) && (level == 1 || level == 5 || level ==9)){
    enemy2.enemyHealth2 -=2
    if(enemy2.enemyHealth2 <= 1 && enemy2.position.y == 285){
    enemy2.switchSprite('deathLeft')
    score++
    setTimeout(() => {
      enemy2.position.x = 5000
      enemyHealth2 =+ eh
      enemy2.switchSprite('idle')
    }, 400);
  }
  if(enemy2.enemyHealth2 <= 1 && enemy2.position.y == 284){
    enemy2.switchSprite('death')
    score++
    setTimeout(() => {
      enemy2.position.x = 5000
      enemyHealth2 =+ eh
      enemy2.switchSprite('idle')
    }, 400);
  }
  }
  if(px >= ex2 - 30 && px <= ex2 + 30 && keys.q.pressed){
    enemy2.switchSprite('death2')
    score++
    setTimeout(() => {
      enemy2.position.x = 5000
      enemyHealth2 =+ eh
      enemy2.switchSprite('idle')
    }, 400);
  }

  let i = true
  if(keys.q.pressed == true && (px >= bx - 40 && px <= bx + 40) && (py+0.01 - 20 == by)){
    boss.bossHealth -= 2
    if(boss.bossHealth <= 0){
      boss.switchSprite('death')
      score++
      setTimeout(() => {
        boss.position.x += 5000
        boss.bossHealth =+ 100
        player.health =+ 100
        boss.switchSprite('idle')
        i = false
      }, 200);
    }
  }
  if(level == 4 || level == 8){
  boss.bossHealthBar()  
  boss.draw()
  }

  if(i==false){
    boss.position.x -= 5000
  }

  if(boss.position.x <= 600 && boss.position.x >= 400 && boss.bossHealth != 0 && f == true){
    boss.switchSprite('attackLeft')
    boss.position.x -= 0.5
    if(boss.position.x == 400) {
      f = false
      boss.position.y += 1
    }

  }

  if(boss.position.x <= 600 && boss.position.x >= 400 && boss.bossHealth != 0 && f == false){
    boss.switchSprite('attackRight')
    boss.position.x += 0.5
    if(boss.position.x == 600) {
    f = true
    boss.position.y -= 1
    }
  }

 document.getElementById("score").innerHTML = score;
 document.getElementById("scoring").value = score;

  c.save()
  c.globalAlpha = overlay.opacity
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.restore()

}

levels[level].init()
animate()
