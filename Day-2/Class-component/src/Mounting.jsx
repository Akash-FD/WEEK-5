import React, { Component } from "react";

export class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

//   static getDerivedStateFromProps(props, state) {
//     console.log("from getDerivedStateFromProps");
//     return { favoritecolor: props.myColor };
//   }
    componentDidMount() {
      setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
          console.log('form componentDidMount')
      }, 1000);

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("after taking snapshort " + prevState.favoritecolor);
    }

    shouldComponentUpdate() {
      console.log('false')
     return false
    }

    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }   

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Mounting;
