/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *          area = length * width
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const q0Funcs = require('./q0');
const sum = q0Funcs.sum;

const stdev = function(arr) {
  // sqrt(sum((x - populationMean)^2)/numberOfValues)
  const numberOfValues = arr.length;
  const populationMean = sum(arr) / numberOfValues;

  // create an array that's filled with the answer to (num - populationMean)
  const differences = [];
  for (const num of arr) {
    differences.push(num - populationMean);
  }
  // console.log(differences);
  
  // const differences = arr.map((num) => num - populationMean)
  // console.log(differences);

  const squares = [];
  for (const difference of differences) {
    squares.push(Math.pow(difference, 2));
  }
  // console.log(squares);

  // const squares = differences.map((difference) => Math.pow(difference, 2));
  // console.log(squares);

  const sumOfSquares = sum(squares);
  const avgOfSquares = sumOfSquares / numberOfValues;

  // console.log('sum:', sumOfSquares);
  // console.log('avg:', avgOfSquares);

  return round(Math.sqrt(avgOfSquares));
};

// Don't change below:
module.exports = { stdev };
