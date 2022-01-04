import React, { createRef } from "react";

export class RefEx extends React.Component {
  inputRef = createRef();

  handleClick = () => {
    console.log(this.inputRef);
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>Кнопка</button>
      </div>
    );
  }
}
