import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    //{this.handleIncrement}
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-body text-center">
          <h2>Score Count: {this.state.count}</h2>
        </div>
      </div>
    );
  }
}

export default Counter;