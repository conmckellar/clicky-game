import React from "react";

class Counter extends React.Component {
  state = {
    score: 0
  };

  handleIncrement = event => {
    this.setState({ score: this.state.score + 1 });
    //{this.handleIncrement}
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-body text-center">
          <h2>Score Count: {this.state.score}</h2>
        </div>
      </div>
    );
  }
}

export default Counter;