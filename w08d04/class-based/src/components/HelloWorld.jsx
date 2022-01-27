import React from 'react';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props); // vs super(props)

    this.state = {
      heading: 'hello there',
      username: 'alice',
      interviewerId: props.interviewer || null,
      counter: 0,
      newStuff: null
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
  // clickHandler = () => {
    // DON'T DO THIS!!
    // this.state.counter += 1;

    this.setState({ counter: this.state.counter + 1, newStuff: 'hello' });
    // const that = this;

    // this.setState((state) => ({ counter: state.counter + 1 }));
  }

  render() {
    const {message} = this.props;
    return (
      <div>
        <h2>This is a class-based component</h2>
        <h2>{message}</h2>
        <h2>You are logged in as: {this.state.username}</h2>

        <div>
          <h2>The counter is: {this.state.counter}</h2>
          <button onClick={() => this.clickHandler()}>Click me!</button>
        </div>
      </div>
    );
  }

}

export default HelloWorld;

// const yourComponent = new HelloWorld(props)
// yourComponent.props = props;
