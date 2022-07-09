import React, { Component } from "react";

class ChangeColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };
  }

  render() {
    return (
      <div>
        {this.state.color}
        <button onClick={() => this.setState({ color: "red" })}>
          Change Red
        </button>
        <button onClick={() => this.setState({ color: "blue" })}>
          Change Blue
        </button>
      </div>
    );
  }
}

export default ChangeColor;
