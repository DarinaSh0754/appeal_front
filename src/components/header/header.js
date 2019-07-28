import React, { Component } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import './header.css';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink
} from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectRegistration: false,
      redirectLogin: false
    };
  }
  onRegistration = () => {
    return <Redirect from="/home" to="/registration" />;
  };
  render() {
    return (
      <div className="header">
        <Navbar light expand="md">
          <Button color="link">
            <Link to="/" className="link">
              <div className="title">Appeal</div>
            </Link>
          </Button>

          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button color="link">
                  <Link to="/registration" className="link">
                    Регистрация
                  </Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button color="link">
                  <Link to="/login" className="link">
                    Вход
                  </Link>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
