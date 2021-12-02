# W02D04 - Promises

### To Do
- [x] Illustrate the "callback waterfall" (callback hell) problem
- [x] Introduction to Promises
- [x] Error handling with Promises (vs callbacks)
- [x] Parallelizing async things (Promise.all)
- [x] Creating our own Promises

3 5 2 = 10
3 5 2 = 5

### Promises
* pending
* fulfilled/resolved
* fail/rejected


```js
funcThatTakesACallback((err, data) => {
  if (err) {
    console.log(err);
  }
  // use the data
  funcThatTakesACallback((err, data) => {
    if (err) {
      console.log(err);
    }
    // use the data
  });
});
```






