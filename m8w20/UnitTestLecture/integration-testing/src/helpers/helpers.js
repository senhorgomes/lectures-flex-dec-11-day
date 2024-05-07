export const announceResult = (playerSelection, compSelection) => {
    const lookup = {
      'Scissors': 'Paper',
      'Paper': 'Rock',
      'Rock': 'Scissors'
    };
    if (!(playerSelection && compSelection)) {
      return 'Waiting';
    }
    // Tree === Tree
    if (lookup[playerSelection] === compSelection) {
      return 'Won';
    }
    if (lookup[compSelection] === playerSelection) {
      return 'Lost';
    }
    return 'Tied';
  };
  


  export const genFeedbackMessage = (status) => {
    const lookup = {
      Waiting: 'Waiting for your choice!',
      Won: 'You win!!',
      Lost: 'Too bad! Better luck next time.',
      Tied: 'Tie game'
    };
    return lookup[status];
  };

  export const generateComputerSelection = (cheating, playerSelection) => {
    // if cheating mode is one
    if(cheating){
      // Then beat the player
      console.log(playerSelection)
      if(playerSelection === "Rock"){
        return 'Paper'
      }
      if(playerSelection === "Paper"){
        return 'Scissors'
      }
      if(playerSelection === "Scissors"){
        return 'Rock'
      }
    }

    // We need an array of selection
    const arrayOfChoices = ['Rock', 'Paper', 'Scissors'];
    // We need to select one of the elements in the array at random
    const randomIndex = Math.floor(Math.random() * arrayOfChoices.length);
    // console.log(randomIndex)
    // Return a random selection using our array and index
    return arrayOfChoices[randomIndex];
  }