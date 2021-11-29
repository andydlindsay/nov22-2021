/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // create a variable to hold the current lowest value
  let lowestValue = arr[0];

  // loop through our numbers
  // for (let i = 1; i < arr.length; i++) {}
  for (const num of arr) {
    // is the current number lower than the lowest value
    if (num < lowestValue) {
      // if yes, we have found a new lowest value
      lowestValue = num;
    }
  }

  // return the lowest value
  return lowestValue
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // set up a variable to hold current highest
  let highestValue = arr[0];

  // loop through array
  for (const num of arr) {
    // is the current num higher than current highest
    if (num > highestValue) {
      // if yes, we have a new current highest
      highestValue = num;
    }
  }

  // return the current highest
  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);

  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
