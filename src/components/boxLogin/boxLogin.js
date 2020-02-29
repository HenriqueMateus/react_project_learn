import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
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
        <div className="container">
          <div className="col-sm-6">
            <form action="/action_page.php" onSubmit={this.handleButtonSubmit}>
              <div className="form-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input
                  id="usuario"
                  className="form-control"
                  type="text"
                  name="user"
                  placeholder="Nome de Usuario"
                  value={this.state.user}
                  onChange={this.handleInputChange}
                ></input>
              </div>
              <div className="form-group">
                {/* <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span> */}
                <input
                  id="senha"
                  className="form-control input-sm"
                  type="text"
                  name="pass"
                  value={this.state.pass}
                  onChange={this.handleInputChange}
                ></input>
              </div>
              <Button type="submit" classNameName="bttLogin">
                Entrar
              </Button>
              {/* <button type="button" className="btn btn-primary">Primary</button> */}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default BoxLogin;
