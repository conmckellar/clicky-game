import React from "react";

class Counter extends React.Component {

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-body text-center">
          <h2>Score: {this.props.score}</h2>
          <h3>Highscore: {this.props.topscore}</h3>
        </div>
      </div>
    );
  }
}

export default Counter;