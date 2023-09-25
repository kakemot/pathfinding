function PopulateObstacles(width, height) {
    // Define the probability of spawning a box in each cell (adjust as needed)
const spawnProbability = 0.2; // You can change this value to control density

// Create an array to store the boxes
const arrayOfBoxes = [];

// Loop through grid cells and randomly spawn boxes
for (let y = 0; y <= height; y += CSIZE) {
  for (let x = 0; x <= width; x += CSIZE) {
    if (Math.random() < spawnProbability) {
      // Create a new box and add it to the array, translating x and y to the grid cell
      const gridX = Math.floor(x / CSIZE);
      const gridY = Math.floor(y / CSIZE);
      arrayOfBoxes.push(new Box(gridX, gridY));
    }
  }
}
console.log(arrayOfBoxes)
return arrayOfBoxes;
}

function isBoxAtPosition(x, y, arrayOfBoxes) {
    for (const box of arrayOfBoxes) {
      if (box.x === x && box.y === y) {
        return true; // Box found at the specified position
        console.log("u crash facka");
      }
    }
    return false; // No box found at the specified position
  }