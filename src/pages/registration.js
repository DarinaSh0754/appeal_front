import React, { Component } from 'react';
import './registration.css';

export default class Registration extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <form>
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Ваше имя</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Введите Ваше имя"
                  />
                </div>
                <label htmlFor="exampleInputEmail1">Электронная почта</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Введите Вашу электронную почту"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Мы никогда не передадим вашу электронную почту кому-либо еще.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Пароль</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Введите пароль"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="backButton btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
