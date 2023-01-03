let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9 + 1);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    if (humanDifference <= computerDifference) {
        return true;
    } else if (humanDifference >= computerDifference) {
        return false;
    } else if (humanDifference === computerDifference) {
        return true;
    };
};
    const updateScore = (winner) => {
      if (winner === 'human') {
          humanScore++;
      } else if (winner === 'computer') {
          computerScore++;
      }
    }

    const advanceRound = () => currentRoundNumber++;

    updateScore('human');
    console.log(humanScore);

    updateScore('computer');
    console.log(computerScore);


