class Pathfinder {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = CSIZE;
    }

    display() {
        fill(0, 0, 255); // Green color
        rect(this.x * this.size, this.y * this.size, this.size, this.size);
        fill(0, 0, 0)
      }
}