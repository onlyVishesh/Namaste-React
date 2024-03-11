import React from "react";

// Calling 
{/*

- parent constructor
- parent render
  - 1st children constructor
  - 1st children render
  
  - 2st children constructor
  - 2st children render 
  
  .
  .
  .
  
  - 1st children componentDidMount
  - 2st children componentDidMount
  .
  
- parent componentDidMount





*/ }

class UserClass extends React.Component {
  constructor(props) {
    // first it is called
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  componentDidMount() {
    // called last
    // used like useEffect for api call
  }

  render() {
    // then this is called
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h3>Name : {name}</h3>
        <p>Hey this is test file to learn about class based component</p>
        <p>You have clicked {count} times</p>
        <button
          className="dummy-btn"
          onClick={() => {
            // never update variables like this
            // count++; or count = count + 1
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default UserClass;
