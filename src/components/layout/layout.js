import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import './layout.js'

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.routes = routes;
  }
  getRoutes() {
    return this.routes.map((route, idx) => {
      return route.component ? (
        <Route
          key={idx}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props => <route.component {...props} />}
        />
      ) : null;
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <main className="main">
            <Container fluid className="container-fluid p-0" >
              <Switch>
                {this.getRoutes()}
                <Redirect from="/" to="/home" />
              </Switch>
            </Container>
          </main>
        </div>
        <Footer className="justify-content-center" />
      </div>
    );
  }
}
