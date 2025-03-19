
import React, { PureComponent } from "react";

class PureComponentwithClass extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "React JS"
    };
  }

  changeName = () => {
    this.setState({ name: "React JS" });
  };

  render() {
    console.log("FirstComponent -- Render method called");
    return (
      <div>
        <p> Name is : {this.state.name} </p>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default PureComponentwithClass;