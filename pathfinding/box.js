class Box {
    constructor(x, y) {
      this.x = x - 1;
      this.y = y - 1;
    }

    display() {
        rect(this.x * CSIZE, this.y * CSIZE, CSIZE, CSIZE);
    }
  }