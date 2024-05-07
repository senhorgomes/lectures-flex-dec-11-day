import { announceResult, generateComputerSelection } from "../helpers";

// We need to create four tests
describe('Test announceResult function', ()=> {
    let fakeState; 
    beforeEach(()=> {
      fakeState = {
          compSelection: null,
          playerSelection: null,
          status: 'Waiting',
          cheating: false
      }
    })
    // One for winning
    test('returns Won if the player is "Scissors" and the comp is "Paper"', ()=> {
      // Modify state to include the player selection and compSelection
      fakeState.playerSelection = 'Scissors';
      fakeState.compSelection = 'Paper';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
    })
    // One for losing
    test('returns Lost if the player is "Paper" and the comp is "Scissors"', ()=> {
      // Modify state to include the player selection and compSelection
      fakeState.playerSelection = 'Paper';
      fakeState.compSelection = 'Scissors';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
    })
    // One for a tied game
    test('returns Tied if the player and comp make the same selection', ()=> {
      fakeState.playerSelection = 'Paper';
      fakeState.compSelection = 'Paper';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied')
    })
    test('returns Waiting if the player and comp have not made their selection', ()=> {
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Waiting')
    })

})

// Testing AI selection
// Create the test first, then have it so that the test fails, refactor the function
describe('Testing for computer selection', ()=> {
  // The function shouldn't take in anything and should return either Rock, Paper, Scissors
  // Happy Path -> Ai can make a selection
  test('function generates selection for computer.', ()=> {
    // What are our choices?
    const arrayOfChoices = ['Rock', 'Paper', 'Scissors'];
    // Whatever our function generates, it should always equal to one of the three choices and nothing else.
    const selectedChoice = generateComputerSelection();
    expect(arrayOfChoices).toContain(selectedChoice);
  })
})


