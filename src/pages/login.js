import React, { Component } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink
} from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button color="link">
          <Link to="/lkuser" className="link">
            Личный кабинет
          </Link>
        </Button>
      </div>
    );
  }
}
