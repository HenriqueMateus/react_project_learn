import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import "./style.css"
class BoxLogin extends Component {
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
      <>
        <div class="container">
          <div class="col-sm-6">
            <form action="/action_page.php" onSubmit={this.handleButtonSubmit} >
              <div class="form-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input
                  id="usuario"
                  class="form-control"
                  type="text"
                  name="user"
                  placeholder="Nome de Usuario"
                  value={this.state.user}
                  onChange={this.handleInputChange}
                ></input>
              </div>
              <div class="form-group">
                {/* <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span> */}
                <input
                  id="senha"
                  class="form-control input-sm"
                  type="text"
                  name="pass"
                  value={this.state.pass}
                  onChange={this.handleInputChange}
                ></input>
              </div>
              <Button type="submit" className="bttLogin" >Entrar</Button>
              {/* <button type="button" class="btn btn-primary">Primary</button> */}
            </form>
          </div>
        </div>
      </>

    );
  }
}

export default BoxLogin;
