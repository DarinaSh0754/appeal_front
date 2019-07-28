import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import AppealCardList from '../components/appealCardList';

export default class LkUser extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Sidebar />
          </div>
          <div className="col-sm-9">
            <AppealCardList />
          </div>
        </div>
      </div>
    );
  }
}
