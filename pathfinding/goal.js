class ChessBox {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }
  
    display() {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          if ((i + j) % 2 === 0) {
            fill(255); // White color
          } else {
            fill(0); // Black color
          }
          rect(
            this.x * this.size + i * (this.size / 2),
            this.y * this.size + j * (this.size / 2),
            this.size / 2,
            this.size / 2
          );
        }
      }
    }
  }