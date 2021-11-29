/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // part 1. create the piles

  // create an object to hold our piles
  const piles = {};

  // iterate through the array
  for (const num of arr) {
    // have we seen this number before?
    if (piles[num]) {
      // if yes, increment the current number
      piles[num] += 1;
    } else {
      // if no, create a new key/value pair
      piles[num] = 1;
    }

    // piles[num] = piles[num] + 1 || 1
  }

  // console.log(piles);

  // part 2. determine which pile is highest

  // set up variables to hold current highest and highest key
  let currentHighestValue = 0;
  let currentHighestKey = null; 

  // iterate through the piles object
  for (const key in piles) {
    // compare the current key's value to our current highest value
    const currentKeysValue = piles[key];
    if (currentKeysValue > currentHighestValue) {
      // if higher, we have a new highest value and associated key
      currentHighestValue = currentKeysValue;
      currentHighestKey = key;
    }
  }

  // return the highest key
  return Number(currentHighestKey);
};

// Don't change below:
module.exports = { mode };
