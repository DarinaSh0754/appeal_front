import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/layout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = ({
      redirect: false
    });
}      

  render() {
    return (
      <HashRouter>
          <Switch>
           <Route path="/" name="Главная" component={ Layout } />
          </Switch>
      </HashRouter>
    );
  }
}
export default App;


