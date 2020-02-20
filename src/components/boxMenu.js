import React, { Component } from "react";

class BoxMenu extends Component {
  state = {
    user: "",
    pass: ""
  };
  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };
  handleButtonSubmit = e => {
    e.preventDefault();
    this.setState({
      user: this.state.user,
      pass: this.state.pass
    });
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleButtonSubmit}>
        <input
          type="text"
          name="user"
          value={this.state.user}
          onChange={this.handleInputChange}
        ></input>
        <input
          type="text"
          name="pass"
          value={this.state.pass}
          onChange={this.handleInputChange}
        ></input>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default BoxMenu;
