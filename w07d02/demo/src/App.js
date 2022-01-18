import './App.css';
// import Header from './components/Header';
import Counter from './components/Counter';

const App = () => {
  const name = 'Carol';

  const myObj = {
    keyTwo: "value",
    name: "Dean",
    message: "Welcome to the site with the spread operator"
  };

  return (
    <div className="App">
      <h2>Intro to React</h2>
      {/* <Header keyTwo="value" name={2} message="Welcome to the site" />  */}
      {/* <Header { ...myObj } moreStuff="hello" />  */}
      
      {/* <Header message="This is the about page" name={name} /> */}

      <Counter />
    </div>
  );
};

export default App;


