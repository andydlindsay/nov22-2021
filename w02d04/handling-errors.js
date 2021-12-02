const promiseGenerator = require('./helpers/promise-generator');

const happyPromise = promiseGenerator('my happy promise', false);

happyPromise
  .then((data) => {
    console.log(data);
    return promiseGenerator('promise two', false);
  })
  .then((data) => {
    console.log(data);
    return promiseGenerator('promise three', false);
  })
  .then((data) => {
    console.log(data);
    return promiseGenerator('promise four', true);
  })
  .catch((err) => {
    console.log('top catch: an error happened:', err);
  })
  .then((data) => {
    console.log('second .then:', data);
  })
  .catch((err) => {
    console.log('bottom catch: an error happened:', err);
  })
