import { useState, useEffect } from 'react';

const LifecycleFunc = () => {
  const [state, setState] = useState({
    searchTerm: '',
    interval: null
  });

  useEffect(() => {
    console.log('the component has mounted');
    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 2000);

    return () => {
      console.log('the component will be unmounted');

      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log('the component has updated');
  }, [state.searchTerm]);

  return (
    <div>
      <h2>This is the lifecycle component</h2>
      <div>
        <label>Search term:</label>
        <input 
          value={state.searchTerm}
          onChange={(event) => setState({ ...state, searchTerm: event.target.value })}
        />
        <h2>Search Term: {state.searchTerm}</h2>
      </div>
    </div>
  );
};

export default LifecycleFunc;
