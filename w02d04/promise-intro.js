const promiseGenerator = require('./helpers/promise-generator');

const myPromise = promiseGenerator('my promise');
console.log(myPromise);

myPromise
  .then((resolvedValue) => {
    console.log('resolved value: ', resolvedValue);
    const birthdayPromise = promiseGenerator('happy birthday promise');

    return birthdayPromise;
  })
  .then((whatGetsPassed) => {
    console.log('second .then: ', whatGetsPassed);
    return 'not a promise';
  })
  .then((data) => {
    console.log('data in the 3rd .then:', data);
  });

console.log('when do I run???');
