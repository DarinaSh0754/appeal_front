import React, { Component } from 'react';
import vedro from '../img/vedro.jpg';
import './home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="font1">ГРАЖДАНИН? ПОДАВАЙ ОБРАЩЕНИЕ!</div>
        <div className="font2">НАЗВАНИЕ</div>
        <div className="font1">
          УНИВЕРСАЛЬНАЯ ПЛАТФОРМА ДЛЯ РЕШЕНИЯ ВОПРОСОВ
        </div>
        <img className="vedro-back" src={vedro} />
      </div>
    );
  }
}
