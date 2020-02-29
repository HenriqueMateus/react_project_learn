import React, { useEffect, useState } from "react";
import "./style.css";
import { Navbar, Nav, FormControl, Button, Form, Card } from "react-bootstrap";
import API from "../API/ApiFilmes";

// import { Container } from './styles';

export default function Main() {
  const [boxfilme, setboxfilme] = useState([]);
  const [imgFilme, setimgFilme] = useState([]);
  useEffect(() => {
    async function getFilme() {
      let imgFilmes = [];
      await API("inception").then(resposta => {
        imgFilmes.push(resposta.titles[0].image + "/10px180");
      });

      await API("Batman arkham knight").then(resposta => {
        console.log(resposta.titles[0].image + "/10px180");
        imgFilmes.push(resposta.titles[0].image);
      });

      setimgFilme(imgFilmes);
    }
    getFilme();
  });
  return (
    <div className="mainBody">
      <Navbar className="mb-5" bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Filmes</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav className="mr-0 col-xs-1 pr-0">
          <Nav.Link href="/Login">Login</Nav.Link>
        </Nav>
      </Navbar>

      <div className="container">
        <div className="row">
          <div className="col-sm-3 ">
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src={imgFilme[0]} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3 ">
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src={imgFilme[1]} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
