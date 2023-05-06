// Récupérer l'élément canvas et son contexte
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Définir la taille des cellules et le nombre de lignes et de colonnes
const cellSize = 10;
const numRows = canvas.height / cellSize;
const numCols = canvas.width / cellSize;

// Variable pour stocker la grille
let grid;

// Créer une grille vide avec le nombre de lignes et de colonnes spécifié
function createGrid(rows, cols) {
  const grid = new Array(rows);
  for (let row = 0; row < rows; row++) {
    grid[row] = new Array(cols).fill(0);
  }
  return grid;
}

// Remplir la grille avec des cellules vivantes (1) et mortes (0) de manière aléatoire
function randomizeGrid(grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      grid[row][col] = Math.random() > 0.5 ? 1 : 0;
    }
  }
}

// Dessiner la grille sur le canvas
function drawGrid(grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      ctx.fillStyle = grid[row][col] ? 'red' : 'cyan';
      ctx.fillRect(col * cellSize, row * cellSize, cellSize - 1, cellSize - 1);
    }
  }
}

// Compter le nombre de voisins vivants d'une cellule
function countNeighbors(grid, row, col) {
  let count = 0;
  for (let r = -1; r <= 1; r++) {
    for (let c = -1; c <= 1; c++) {
      if (r === 0 && c === 0) continue;
      const newRow = row + r;
      const newCol = col + c;
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[row].length &&
        grid[newRow][newCol]
      ) {
        count++;
      }
    }
  }
  return count;
}

// Calculer la prochaine génération de la grille en appliquant les règles du Jeu de la Vie
function nextGeneration(grid) {
  const newGrid = createGrid(grid.length, grid[0].length);
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const neighbors = countNeighbors(grid, row, col);
      if (grid[row][col]) {
        newGrid[row][col] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        newGrid[row][col] = neighbors === 3 ? 1 : 0;
      }
    }
  }
  return newGrid;
}

// Boucle principale du jeu
function gameLoop() {
  // Calculer la prochaine génération et mettre à jour la grille
  grid = nextGeneration(grid);
  
  // Dessiner la nouvelle grille
  drawGrid(grid);

  // Programmer la prochaine itération de la boucle avec un délai
    // de 100 ms entre les générations
    setTimeout(gameLoop, 100);
}

// Fonction d'initialisation du jeu
function init() {
  // Créer une grille vide
  grid = createGrid(numRows, numCols);

  // Remplir la grille de manière aléatoire
  randomizeGrid(grid);

  // Dessiner la grille initiale
  drawGrid(grid);

  // Lancer la boucle de jeu
  gameLoop();
}

// Initialiser le jeu au chargement de la page
init();

