const createNewSnakeLadderGame = (diceType = "normal") => {

    let playerPosition = 0;
    let gameOver = false;
    let snakes = []
    const rollDice = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    const rollCrookedDice = () => {
        return (Math.floor(Math.random() * 3) + 1) * 2; // Only even numbers
    }

    const movePlayer = (currentPosition,steps) => {
        let newPosition;
        if (currentPosition === 0 && steps < 6) {
            newPosition = currentPosition;
        } else if (currentPosition === 0 && steps === 6) {
            if(diceType==="normal"){
                newPosition = 1;
            }else{
                newPosition = 2;
            }
            
        } else if (currentPosition + steps > 100) {
            newPosition = currentPosition;
        } else { 
            newPosition = currentPosition + steps;
        }
        return newPosition;
    }
    const addSnake = (head, tail) => {
        if (head <= tail || head > 100 || head < 1 || tail > 100 || tail < 1) {
            console.log("Invalid snake positions. Head should be greater than tail and both should be between 1 and 99.");
            return;
        }
        if (diceType === "crooked" && tail % 2 !== 0) {
            console.log("Tail should be an even number when using a crooked dice.");
            return;
        }
        snakes.push({ head, tail });
        console.log(`Snake added: From ${head} to ${tail}`);
    };
    const getSnakes = () => {
        return snakes;
    };
    const checkSnake = ()=>{
        const snake = snakes.find((s) => s.head === playerPosition );
        if (snake) {
            playerPosition = snake.tail;
            console.log(`Oops! You encountered a snake. Move to position ${playerPosition}`);
        } 
    }
    const isGameOver = () => {
        return gameOver;
    };

    const play = ()=> {
        console.log("Game Started!");
        while (!gameOver) {
          const diceValue = diceType === 'normal' ? rollDice() : rollCrookedDice();
          console.log(`Dice: ${diceValue}`);
          playerPosition = movePlayer(playerPosition, diceValue);
          console.log(`Player Position: ${playerPosition}`);
          checkSnake();
          if (playerPosition === 100) {
            console.log("Congratulations! You've reached the end.");
            gameOver = true;
          }
        }
        console.log("Game Over!");
      }
    
      return { play , addSnake , getSnakes , isGameOver};

}

const game = createNewSnakeLadderGame();
game.addSnake(14, 7); // Add a snake from position 14 to 7
game.addSnake(54,34); // Add a snake from position 54 to 34
game.addSnake(62, 19); // Add a snake from position 62 to 19
game.addSnake(92, 40); // Add a snake from position 92 to 40
game.play(); // Start the game

// const game2 = createNewSnakeLadderGame("crooked");
// game2.addSnake(14, 7); // Add a snake from position 14 to 7
// game2.addSnake(54,34); // Add a snake from position 54 to 34
// game2.addSnake(62, 19); // Add a snake from position 62 to 19
// game2.addSnake(92, 40); // Add a snake from position 92 to 40
// game2.play(); // Start the game

module.exports = { createNewSnakeLadderGame };
