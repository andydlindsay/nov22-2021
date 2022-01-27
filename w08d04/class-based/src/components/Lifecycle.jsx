import { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      interval: null
    }
  }

  componentDidMount() {
    // useEffect(() => {}, []);
    // gets called only once, when the component is first mounted/added to the DOM
    // data fetching, establish a socket connection, set up a timer/interval
    console.log('the component has mounted');

    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 2000);

    this.setState({ interval });
  }

  componentDidUpdate(prevProps, prevState) {
    // fires multiple times (potentially) any time state or props change
    // listen for changes to particular values and act accordingly
    // useEffect(() => {}, [props.message])
    console.log('the component has updated');

    if (this.props.message !== prevProps.message) {
    //   // do something
    }
  }

  componentWillUnmount() {
    // gets called exactly once; when the component is about to be removed from the DOM
    // cleanup; sever a socket connection, clear an interval
    // useEffect(() => { return () => {} }, []);
    console.log('the component will be unmounted');

    clearInterval(this.state.interval);
  }


  render() {
    return (
      <div>
        <h2>This is the lifecycle component</h2>
        <div>
          <label>Search term:</label>
          <input 
            value={this.state.searchTerm}
            onChange={(event) => this.setState({ searchTerm: event.target.value })}
          />
          <h2>Search Term: {this.state.searchTerm}</h2>
        </div>
      </div>
    );
  }
}

export default Lifecycle;

// const lifecycle = new Lifecycle()
// lifecycle.componentWillUnmount();