import React, { Component } from "react";

export default class EffectEx extends Component {
  state = {
    list: [1, 2, 3],
  };

  handleClick = () => {
    const list = this.state.list;
    list.push(list.length + 1);
    this.setState({ list });
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <ul>
          {list.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Add element</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("Effect Init");
  }

  componentDidUpdate() {
    console.log("Effect update");
  }
  componentWillUnmount() {
    console.log("unmount");
  }
}
