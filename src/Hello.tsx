import React from 'react';


export interface Props{
  name: string;
  enthusiasmLevel?: number;
}

function Hello({name, enthusiasmLevel=1}: Props){
  
  if(enthusiasmLevel < 1){
    throw new Error("the enthusiasm must greater than zero");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getEnthusiasmExclamation(enthusiasmLevel)}
      </div>

    </div>

  );
  
}

function getEnthusiasmExclamation(numbChar:number){
  return Array(numbChar + 1).join("!");
}

export default Hello;
