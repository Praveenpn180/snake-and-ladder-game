// Import the function to be tested
const { createNewSnakeLadderGame } = require('./snakeLadderGame');

// Describe block for testing createNewSnakeLadderGame function
describe('createNewSnakeLadderGame', () => {
  // Test case for creating a normal game
  it('should create a normal game without errors', () => {
    const game = createNewSnakeLadderGame();
    expect(game).toBeDefined();
  });

  // Test case for creating a crooked game
  it('should create a crooked game without errors', () => {
    const game = createNewSnakeLadderGame("crooked");
    expect(game).toBeDefined();
  });

  // Test case for adding a snake with invalid positions
  it('should not add a snake with invalid positions', () => {
    const game = createNewSnakeLadderGame();
    game.addSnake(7, 14); // Invalid snake positions
    const snakes = game.getSnakes();
    expect(snakes.length).toBe(0); // Ensure snake is not added
  });

  // Test case for adding a snake with valid positions
  it('should add a snake with valid positions', () => {
    const game = createNewSnakeLadderGame();
    game.addSnake(14, 7); // Add a snake from position 14 to 7
    const snakes = game.getSnakes();
    expect(snakes.length).toBe(1); // Ensure snake is added
  });

   // Test case for playing the game without errors
   it('should play the game without errors', () => {
    const game = createNewSnakeLadderGame();
    game.addSnake(14, 7); // Add a snake from position 14 to 7
    game.addSnake(54, 34); // Add a snake from position 54 to 34
    game.addSnake(62, 19); // Add a snake from position 62 to 19
    game.addSnake(92, 40); // Add a snake from position 92 to 40
    expect(() => game.play()).not.toThrow(); // Ensure the game runs without errors
  });

});
