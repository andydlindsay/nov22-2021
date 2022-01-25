import React from 'react';
import Game from '../Game';
import {render, fireEvent} from '@testing-library/react';

describe('tests for the Game component', () => {

  test('can toggle the cheating state by clicking on the robot head icon', () => {
    // render the Game component
    const { getByTestId } = render(<Game />);

    // finding the robot head icon
    const robotHeadIcon = getByTestId('robot-head-icon');

    // trigger a click event on the robot head icon
    fireEvent.click(robotHeadIcon);

    // check to see if the robot head has a class called 'cheating'
    expect(robotHeadIcon).toHaveClass('cheating');

    // trigger a click event on the robot head icon
    fireEvent.click(robotHeadIcon);

    // check to see if the robot head does not haz a class called 'cheating'
    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
