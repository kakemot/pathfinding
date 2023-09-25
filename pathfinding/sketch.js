let frame = 0;
let step = 5;
let grid;
let pathfinder;
let goal;
let boxes = [];

const CSIZE = 16;

function setup() {
  grid = new Grid(512, 512, CSIZE);
  grid.createGrid();
  boxes = PopulateObstacles(512, 512);
  player = new Player(1, 1);
  pathfinder = new Pathfinder(1, 1);
  goal = new ChessBox(14, 18, CSIZE);
  createCanvas(512, 512);
}

function update() {

  if (frame < step) {
    frame ++;
    return;
  }
  frame = 0;
  const directions = [
    { dx: 1, dy: 0 }, // Right
    { dx: -1, dy: 0 }, // Left
    { dx: 0, dy: 1 }, // Down
    { dx: 0, dy: -1 }, // Up
  ];
  
  let moved = false; // Initialize a flag to track whether the pathfinder has moved
  
  for (const direction of directions) {
    const newX = pathfinder.x + direction.dx;
    const newY = pathfinder.y + direction.dy;
  
    // Check if the new position is within the grid boundaries
    if (
      newX >= 0 && newX < grid.numCols &&
      newY >= 0 && newY < grid.numRows
    ) {
      if (
        !isBoxAtPosition(newX, newY, boxes) &&
        grid.isVisited(newX, newY) === false
      ) {
        grid.markVisited(newX, newY);
        pathfinder.x = newX;
        pathfinder.y = newY;
        moved = true; // Set the flag to true if the pathfinder has moved
        break; // Exit the loop after moving
      }
    }
  }
  
  // If the pathfinder didn't move, reset the visited status of nearby cells
  if (!moved) {
    for (const direction of directions) {
      const newX = pathfinder.x + direction.dx;
      const newY = pathfinder.y + direction.dy;
  
      // Check if the new position is within the grid boundaries
      if (
        newX >= 0 && newX < grid.numCols &&
        newY >= 0 && newY < grid.numRows
      ) {
        grid.markUnVisited(newX, newY); // Mark the cell as unvisited
      }
    }
  }
}

function draw() {
  background(129);
  for (const box of boxes) {
    box.display();
  }
  grid.display();
  player.display();
  goal.display();
  pathfinder.display();
  update();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.move(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    player.move(1, 0);
  } else if (keyCode === UP_ARROW) {
    player.move(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    player.move(0, 1);
  }
}