import { useState } from 'react';
import Button from './Button';

// let count = 0;

const Counter = () => {
  // const arr = useState(0);
  // const count = arr[0]; // getter
  // const setCount = arr[1]; // setter

  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('type your search here');

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h2>This is the counter component</h2>
      {/* <button onClick={ increment }>Click me!!</button> */}
      <Button runMyFunc={increment}>Increment the count</Button>
      <h2>The current count is: { count }</h2>

      <h2>This is the searchTerm: {searchTerm}</h2>
      <input 
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value) }
      />
    </div>
  );
};

export default Counter;
