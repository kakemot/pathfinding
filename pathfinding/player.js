class Player {
  constructor(gridX, gridY) {
    this.gridX = gridX;
    this.gridY = gridY;
    this.size = CSIZE;
  }

  display() {
    fill(0, 255, 0); // Green color
    rect(this.gridX * this.size, this.gridY * this.size, this.size, this.size);
    fill(0, 0, 0)
  }

  move(dx, dy) {
    // Check if the new position is within the canvas bounds
    if (
      this.gridX + dx >= 0 &&
      this.gridX + dx < width / this.size &&
      this.gridY + dy >= 0 &&
      this.gridY + dy < height / this.size
    ) {
      this.gridX += dx;
      this.gridY += dy;
    }
  }
}