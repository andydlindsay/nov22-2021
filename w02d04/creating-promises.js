// Promise { <pending> }
const myPromise = new Promise((resolve, reject) => {
  // happy path
  resolve('return value goes here');

  // unhappy path
  // reject('an error has happened');
});

myPromise 
  .then((data) => {
    console.log('data:', data);
  })
  .catch((err) => {
    console.log('err:', err);
  });
