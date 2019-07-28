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
          <button
            type="submit"
            className="ButtonAdd btn btn-primary"
            color="link"
          >
            <Link to="/appeal" className="link">
              Создать обращение
            </Link>
          </button>
          <p>Гражданин? Подай обращение!</p>
          <h1>APPEALSERVICE</h1>
          <p>Универсальная платформа для решения вопросов</p>
        </div>
      </div>
    );
  }
}
