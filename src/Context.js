import React, {useContext} from "react";

const ColorButtonContext = React.createContext("green");

export class ContextEx1 extends React.PureComponent {
  render() {
    return (
      <ColorButtonContext.Provider value="red">
        <Comp2 />
      </ColorButtonContext.Provider>
    );
  }
}

export class Comp2 extends React.PureComponent {
  render() {
    return (
      <div>
        <Comp3 />
      </div>
    );
  }
}

export class Comp3 extends React.PureComponent {
  static context = ColorButtonContext.Consumer;
  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.context }}>Кнопка</button>
      </div>
    );
  }
}

export const Comp3Func = () => {
  const backgroundColor = useContext(ColorButtonContext);
  return (
    <div>
      <button style={{ backgroundColor }}>Кнопка</button>
    </div>
  );
};
