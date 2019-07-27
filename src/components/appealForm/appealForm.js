import React, { Component } from 'react';

class AppealForm extends Component {
  render() {
    return (
      <div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item" href="#">
              Action
            </button>
            <button className="dropdown-item" href="#">
              Another action
            </button>
            <button className="dropdown-item" href="#">
              Something else here
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppealForm;
