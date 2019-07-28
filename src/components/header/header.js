import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Header extends Component {
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Appeal</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/registration">Регистрация</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Вход</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}