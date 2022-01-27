import './App.css';
import HelloWorld from './components/HelloWorld';
// import Lifecycle from './components/Lifecycle';
import LifecycleFunc from './components/Lifecycle-Func';
import {useState} from 'react';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  return (
    <div className="App">
      <h2>Class-based Components</h2>
      <button onClick={() => setShowLifecycle(!showLifecycle)}>Toggle views</button>
      { !showLifecycle && <HelloWorld message="Greetings! Welcome to the site!" interviewer={7} /> }
      {/* { showLifecycle && <Lifecycle /> } */}
      { showLifecycle && <LifecycleFunc /> }

    </div>
  );
};

export default App;
