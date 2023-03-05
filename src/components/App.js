import React from "react";

class App extends React.Component {
  state = { count: 0 };

  onReduceClick = () => {
    if (this.state.count < 1) {
      return;
    } else
      return this.setState({
        count: this.state.count - 1,
      });
  };

  onIncreaseClick = () => {
    return this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Count:</h3>
        <h1>{this.state.count}</h1>
        <button onClick={this.onReduceClick}>Reduce</button>
        <button onClick={this.onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

export default App;
