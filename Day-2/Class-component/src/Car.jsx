import React, { Component } from "react";

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  render() {
    return (
      <div>
        i have a {this.props.model} and the color of my car is
        {this.state.color}
        <button onClick={()=>this.state.color = 'red'? this.setState({color : 'Blue'}):this.setState({color : 'red'})}> Color change</button>
      </div>
    );
  }
}

export class Garage extends Car {
  render() {
    return (
      <div>
       <h1>hello</h1>
       <Car/>
      </div>
    );
  }
}




