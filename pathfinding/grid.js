class Grid {
  constructor(height, width, cellsize) {
    this.height = height;
    this.width = width;
    this.cellsize = cellsize;
    this.numRows = Math.floor(height / cellsize);
    this.numCols = Math.floor(width / cellsize);
    this.grid = this.createGrid();
  }

  createGrid() {
    const grid = [];
    for (let row = 0; row < this.numRows; row++) {
      const newRow = [];
      for (let col = 0; col < this.numCols; col++) {
        newRow.push({ visited: false }); // Initialize each cell with 'visited' set to false
      }
      grid.push(newRow);
    }
    return grid;
  }

  display() {
    // Draw horizontal lines
    for (let y = 0; y <= this.height; y += this.cellsize) {
      line(0, y, this.width, y);
    }

    // Draw vertical lines
    for (let x = 0; x <= this.width; x += this.cellsize) {
      line(x, 0, x, this.height);
    }
  }

  // You can add methods to access and modify the 'visited' property as needed
  markVisited(row, col) {
    if (row >= 0 && row < this.numRows && col >= 0 && col < this.numCols) {
      this.grid[row][col].visited = true;
    }
  }

  markUnVisited(row, col) {
    if (row >= 0 && row < this.numRows && col >= 0 && col < this.numCols) {
      this.grid[row][col].visited = false;
    }
  }

  isVisited(row, col) {
    if (row >= 0 && row < this.numRows && col >= 0 && col < this.numCols) {
      return this.grid[row][col].visited;
    }
    return false;
  }
}