class CollisionBlock {
  constructor({ position }) {
    this.position = position
    this.width = 64
    this.height = 64
  }

  draw() {
    c.fillStyle = 'rgba(248, 3, 229, 0.5)'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}
