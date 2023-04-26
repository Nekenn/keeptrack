import React, { SyntheticEvent } from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State>{

  state = { currentEnthusiasm: this.props.enthusiasmLevel || 1 };

  onIncrement = (event: SyntheticEvent) => {
    console.log(event);
    this.updateEntusiasm(1);
  };
  onDecrement = (event: SyntheticEvent) => {
    console.log(event);
    this.updateEntusiasm(-1);
  };

  render() {

    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error("the enthusiasm must greater than zero");
    }


    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getEnthusiasmExclamation(this.state.currentEnthusiasm)}
          <button onClick={this.onIncrement}>+</button>
          <button onClick={this.onDecrement}>-</button>
        </div>

      </div>
    );
  }

  updateEntusiasm(change: number) {
    this.setState((currentState) => {
      return { currentEnthusiasm: currentState.currentEnthusiasm + change }
    });
  }

}

function getEnthusiasmExclamation(numbChar: number) {
  return Array(numbChar + 1).join("!");
}

export default Hello;
