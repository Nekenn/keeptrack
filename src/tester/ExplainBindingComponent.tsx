import React from "react";

class ExplainBindingComponent extends React.Component{
    handleClick;
    constructor(props:any){
        super (props);
        this.handleClick = ()=>{
            console.log(this)
        };
    }
    render (){
        return(
            <button onClick={this.handleClick}>
                Click me
            </button>

        );
    }
   }

export default ExplainBindingComponent;