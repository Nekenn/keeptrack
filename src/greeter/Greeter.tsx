import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';


const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement);

function Greeter(props : any){
  return <h1>Hello, {props.name} </h1>
}

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Greeter;
