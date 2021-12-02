const promiseGenerator = require('./helpers/promise-generator');

const promiseOne = promiseGenerator('promise one', false, 5000, true);
const promiseTwo = promiseGenerator('promise two', false, 5000, true);
const promiseThree = promiseGenerator('promise three', false, 5000, true);
const promiseFour = promiseGenerator('promise four', false, 5000, true);
const promiseFive = promiseGenerator('promise five', false, 5000, true);

const promises = [promiseOne, promiseTwo, promiseThree, promiseFour, promiseFive];

Promise.race(promises)
  .then((onlyResultThatMatters) => {
    console.log('the winner is:', onlyResultThatMatters);
  })
  .then((onlyResultThatMatters) => {
    console.log('the winner is:', onlyResultThatMatters);
  })

// Promise.all(promises)
//   .then((results) => {
//     console.log('results:', results);
//   });


