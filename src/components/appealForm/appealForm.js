import React, { Component } from 'react';

class AppealForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
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
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
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
        </div>
        <div className="row">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
        </div>
        <div className="row">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Добавьте фото</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AppealForm;
