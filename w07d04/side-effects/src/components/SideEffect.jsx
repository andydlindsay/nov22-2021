import {useEffect, useState} from 'react';

const SideEffect = () => {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState('');

  // useEffect(() => {}, [])

  // useEffect(() => {
  //   setCounter(3);
  // }, [counter]);

  useEffect(() => {
    console.log('the document title has been updated');
    document.title = `counter is now ${counter}`;
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`the counter is ${counter}`);
    }, 3000);

    const cleanup = () => {
      console.log('the interval has been cleared');
      clearInterval(interval);
    };

    return cleanup;
  }, [counter, username]);

  return (
    <div>
      <h2>This is the side effect component</h2>
      <h2>Current count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click Me!</button>

      <div>
        <label>Username:</label>
        <input 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SideEffect;
