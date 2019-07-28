import React, { Component } from 'react';
import vk from '../../img/vk.png';
import loc from '../../img/loc.png';
import './footer.css';
export default class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-light bg-custom">
        <div className="myfont navbar-brand text-light text-right">
          <img src={loc} />
          г. Курск, ул. Ленина,1
          <img src={vk} />
          vk.com/123456789
        </div>
      </nav>
    );
  }
}
