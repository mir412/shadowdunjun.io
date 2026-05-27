const enemy = new Enemy({
    imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Goblin/Idle.png",
    frameRate: 4,
    frameBuffer: 7,
  
    animations: {
      idle: {
        frameRate: 4,
        frameBuffer: 7,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Goblin/Idle.png",
      },
      idleLeft: {
        frameRate: 4,
        frameBuffer: 7,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Goblin/IdleLeft.png",
      },
      death: {
        frameRate: 15,
        frameBuffer: 15,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Goblin/death.png",
      },
      deathLeft: {
        frameRate: 15,
        frameBuffer: 15,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Goblin/deathLeft.png",
      },
      run: {
        frameRate: 8,
        frameBuffer: 8,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Goblin/Run.png",
      },
  
      runLeft: {
        frameRate: 8,
        frameBuffer: 8,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Goblin/RunLeft.png",
      },
    },
    width: 20,
    height: 20,

  });
  
  const enemy2 = new Enemy({
    imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Mushroom/Idle.png",
    frameRate: 4,
    frameBuffer: 7,
  
    animations: {
      idle: {
        frameRate: 11,
        frameBuffer: 8,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Mushroom/Idle.png",
      },
      idleLeft: {
        frameRate: 11,
        frameBuffer: 8,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Mushroom/IdleLeft.png",
      },
      run: {
        frameRate: 8,
        frameBuffer: 8,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Mushroom/Run.png",
      },
      runLeft: {
        frameRate: 8,
        frameBuffer: 8,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Mushroom/RunLeft.png",
      },
      death: {
        frameRate: 15,
        frameBuffer: 15,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Mushroom/Death.png",
      },
      deathLeft: {
        frameRate: 15,
        frameBuffer: 15,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Mushroom/DeathLeft.png",
      },
      death2: {
        frameRate: 15,
        frameBuffer: 15,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Flying eye/Death.png",
      },

      fly: {
        frameRate: 8,
        frameBuffer: 12,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Flying eye/Flight.png",
      },

    },
    width: 20,
    height: 20,
  });
  const boss = new Enemy({
    imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Skeleton/Idle.png",
    frameRate: 4,
    frameBuffer: 7,
  
    animations: {
      death: {
        frameRate: 11,
        frameBuffer: 8,
        loop: true,
        
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Skeleton/Death.png",
      },
      attackRight: {
        frameRate: 8,
        frameBuffer: 2,
        loop: true,
        
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Skeleton/Attack.png",
      },
      attackLeft: {
        frameRate: 8,
        frameBuffer: 2,
        loop: true,
        
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Skeleton/AttackLeft.png",
      },
  
      idle: {
        frameRate: 11,
        frameBuffer: 8,
        loop: true,
        imageSrc: "./img/Monsters_Creatures_Fantasy/Monsters_Creatures_Fantasy/Skeleton/Idle.png",
      },
    },
    })
  

  function newPos() {
    //Level 1
      if(enemy.position.x >= 350 && enemy.position.y == 285 && (level == 1 || level == 5 || level == 9)){
        enemy.position.x -= 1
        enemy.switchSprite('runLeft')
        if(enemy.position.x == 350){
          enemy.position.y -= 1
        }
      }
      if(enemy.position.x <= 700 && enemy.position.y == 284 && (level == 1 || level == 5 || level == 9)){
        enemy.position.x += 1
        enemy.switchSprite('run')
        if(enemy.position.x == 700){
          enemy.position.y += 1
        }
      }

      if(enemy2.position.x >= 350 && enemy2.position.y == 284 && (level == 1 || level == 5 || level == 9)){
        enemy2.position.x -= 1
        enemy2.switchSprite('runLeft')
        if(enemy2.position.x == 350){
          enemy2.position.y += 1
        }
      }
      if(enemy2.position.x <= 700 && enemy2.position.y == 285 && (level == 1 || level == 5 || level == 9)){
        enemy2.position.x += 1
        enemy2.switchSprite('run')
        if(enemy2.position.x == 700){
          enemy2.position.y -= 1
        }
      }
      //Level 2
      if(enemy.position.x >= 127 && enemy.position.y == 410 && (level == 2 || level == 6 || level == 10)){
        enemy.position.x -= 1
        enemy.switchSprite('runLeft')
        if(enemy.position.x == 127){
          enemy.position.y -= 1
        }
      }
      if(enemy.position.x <= 550 && enemy.position.y == 409 && (level == 2 || level == 6 || level == 10)){
        enemy.position.x += 1
        enemy.switchSprite('run')
        if(enemy.position.x == 550){
          enemy.position.y += 1
        }
      }
      //Level 3
      if(enemy.position.x >= 200 && enemy.position.y == 350 && (level == 3 || level == 7 || level == 11)){
        enemy.position.x -= 1
        enemy.switchSprite('runLeft')
        if(enemy.position.x == 200){
          enemy.position.y -= 1
        }
      }
      if(enemy.position.x <= 650 && enemy.position.y == 349 && (level == 3 || level == 7 || level == 11)){
        enemy.position.x += 1
        enemy.switchSprite('run')
        if(enemy.position.x == 650){
          enemy.position.y += 1
        }
      }
      if(enemy2.position.y >= 200 && enemy2.position.x == 300 && (level == 3 || level == 7 || level == 11)){
        enemy2.position.y -= 1
        enemy2.switchSprite('fly')
        if(enemy2.position.y == 200){
          enemy2.position.x -= 1
        }
      }
      if(enemy2.position.y >= 200 && enemy2.position.x == 299 && enemy2.position.y <= 350 && (level == 3 || level == 7 || level == 11)){
        enemy2.position.y += 1
        enemy2.switchSprite('fly')
        if(enemy2.position.y == 350){
          enemy2.position.x += 1
        }
      }
      if(level == 3 || level == 7 || level == 11){
        enemy2.switchSprite('fly')
      }
    


  }