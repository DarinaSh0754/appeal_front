import React, { Component } from 'react';
import AppealCard from '../appealCard';
const testData = [
  {
    title: 'Обращение Пети',
    body:
      'Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение ОбращениеОбращение ОбращениеОбращение Обращение Обращение ОбращениеОбращение Обращение'
  },
  {
    title: 'Обращение Коли',
    body:
      'Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение ОбращениеОбращение ОбращениеОбращение Обращение Обращение ОбращениеОбращение Обращение'
  },
  {
    title: 'Обращение Жени',
    body:
      'Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение Обращение ОбращениеОбращение ОбращениеОбращение Обращение Обращение ОбращениеОбращение Обращение'
  }
];

export default class AppealCardList extends Component {
  render() {
    return <AppealCard list={testData} />;
  }
}
