import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { Collapse, Jumbotron, Container, NavItem, Button } from 'reactstrap';
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vedro">
        <div className="container">
          <Button color="link">
            <Link to="/appeal" className="link">
              Создать обращение
            </Link>
          </Button>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    );
  }
}
