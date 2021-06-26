import React, { createRef } from "react";

export class Counter2 extends React.Component {
  inputRef = createRef();

  handleClick = (e) => {
    console.log(this.inputRef);
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>Кнопка</button>
      </div>
    );
  }
}
