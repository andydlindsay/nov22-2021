# W07D04 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Rules for Hooks
* Hooks must be called top-level
* Hooks have to be called from inside a React function
* All hooks must start with `use`

### Pure Functions
* without side effects
* given the same arguments the function returns the same value
* does one thing

```js
let addition = 2;

const addTwo = (num) => {
  addition++;
  const result = num + addition;
  // console.log(result);
  return result;
};
```

### Side Effects
* console.log
* data fetching
* set up a socket connection
* set up timers/intervals
* modifying the DOM directly





