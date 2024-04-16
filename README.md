# Snake and Ladder Game

This is a simple implementation of the classic Snake and Ladder game in JavaScript.

## Description

The Snake and Ladder game is a popular board game where players roll dice to move their tokens across a board with numbered squares. The goal is to reach the final square first, avoiding snakes that can send you backwards and using ladders that help you advance.

This implementation allows you to create and play both normal and crooked versions of the game. In the crooked version, the dice is biased to produce only even numbers.

## How to Play

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `node snakeLadderGame.js` to start the game.
5. Follow the on-screen instructions to play the game.

## Usage

```javascript
const { createNewSnakeLadderGame } = require('./snakeLadderGame');

// Create a new normal game
const game = createNewSnakeLadderGame();
game.addSnake(14, 7); // Add a snake from position 14 to 7
game.addSnake(54, 34); // Add a snake from position 54 to 34
game.addSnake(62, 19); // Add a snake from position 62 to 19
game.addSnake(92, 40); // Add a snake from position 92 to 40
game.play(); // Start the game

### Options


createNewSnakeLadderGame(diceType): Creates a new game instance. Pass 'normal' for a normal game or 'crooked' for a crooked game.
