import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('can create fake functions', () => {
  const fakeFn = jest.fn(); // () => {}

  const result = fakeFn();
  expect(fakeFn).toHaveBeenCalled();
  expect(fakeFn).toHaveBeenCalledTimes(1);

  const elaborateFake = jest.fn(() => {
    return 'hello world'
  });

  const resultTwo = elaborateFake();
  expect(resultTwo).toBe('hello world');
});

// action('setState') ==== () => {}

test('can display the results of an API call', () => {
  // render the component
  const {getByTestId, findByText, container, debug} = render(<Result status="Waiting" />);

  // console.log(prettyDOM(container));
  debug();

  // get the fetch high scores button
  const highScoresButton = getByTestId('high-scores');

  // click on the fetch high score button
  fireEvent.click(highScoresButton);

  // check the DOM to see if it contains 'Carol'
  return findByText('Carol', { exact: false });
});
