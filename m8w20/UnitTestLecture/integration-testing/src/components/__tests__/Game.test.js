// Well where do we start?
// We know we need to render a React component

import React from "react";

import Game from "../Game";

// Component we need some way to render it -> render method
// We need some way to interact with said component -> fireEvent
import { fireEvent, render, prettyDOM } from '@testing-library/react';

describe('Testing for cheat mode', ()=> {
    // Happy path
    // We need to be able to activate cheate state
    test('activate cheat state when robot icon is clicked on', () => {
        // We need to make our test fail first
        // Find a way to grab the robot icon
        // First need to render the component
        const { getByTestId, container } = render(<Game />);

        const robotIcon = getByTestId('robot-icon');

        // Click on the robot icon
        fireEvent.click(robotIcon);
        // If we need to render the container to be sure
        // We can grab the container, and with prettyDOM, we can render it in our terminal
        console.log(prettyDOM(container))
        expect(robotIcon).toHaveClass('cheating');
    })
    // Sad Path
    test('deactivate cheat state when robot icon is clicked on twice', () => {
        // We need to make our test fail first
        // Find a way to grab the robot icon
        // First need to render the component
        const { getByTestId, container } = render(<Game />);

        const robotIcon = getByTestId('robot-icon');

        // Click on the robot icon
        fireEvent.click(robotIcon);
        fireEvent.click(robotIcon);
        // If we need to render the container to be sure
        // We can grab the container, and with prettyDOM, we can render it in our terminal
        // console.log(prettyDOM(container))
        expect(robotIcon).not.toHaveClass("cheating");
    })

    // We need to have it so that our computer always wins
    // The computer will select Paper and win if player selects Rock
    test('the computer will select Paper and win if player selects Rock', ()=> {
        const { getByTestId, container } = render(<Game />);
        // First activate cheat mode
        const robotIcon = getByTestId('robot-icon');

        // Click on the robot icon
        fireEvent.click(robotIcon);
        // As a player select rock
        // First highlight the rock emoji

        const playerSelection = getByTestId('Rock');
        // Clicking on the rock emoji to select it
        fireEvent.click(playerSelection);
        // Find the game result text
        const resultMessage = getByTestId("game_result");
        // Search the game result text to see if it displays Too bad! Better luck next time.
        expect(resultMessage.innerHTML).toBe('Too bad! Better luck next time.')
    })
    // The computer will select Scissors and win if player selects Paper
    test('the computer will select Scissors and win if player selects Paper', ()=> {
        const { getByTestId, container } = render(<Game />);
        // First activate cheat mode
        const robotIcon = getByTestId('robot-icon');

        // Click on the robot icon
        fireEvent.click(robotIcon);

        const playerSelection = getByTestId('Paper');
        // Clicking on the rock emoji to select it
        fireEvent.click(playerSelection);
        // Find the game result text
        const resultMessage = getByTestId("game_result");
        console.log(prettyDOM(container))
        // Search the game result text to see if it displays Too bad! Better luck next time.
        expect(resultMessage.innerHTML).toBe('Too bad! Better luck next time.')
    })
    // The computer will select Rock and win if player selects Scissors
    test('the computer will select Rock and win if player selects Scissors', ()=> {
        const { getByTestId, container } = render(<Game />);
        // First activate cheat mode
        const robotIcon = getByTestId('robot-icon');

        // Click on the robot icon
        fireEvent.click(robotIcon);

        const playerSelection = getByTestId('Scissors');
        // Clicking on the rock emoji to select it
        fireEvent.click(playerSelection);
        // Find the game result text
        const resultMessage = getByTestId("game_result");
        console.log(prettyDOM(container))
        // Search the game result text to see if it displays Too bad! Better luck next time.
        expect(resultMessage.innerHTML).toBe('Too bad! Better luck next time.')
    })
})