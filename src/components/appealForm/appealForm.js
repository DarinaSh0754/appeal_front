import React, { Component } from 'react';
import './appealForm.css';

class AppealForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 offset-md-3">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Выберите исполнителя
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="dropdown-item">ЖКХ</div>
                <div className="dropdown-item">Автомобильные дороги</div>
                <div className="dropdown-item">Социальная сфера</div>
                <div className="dropdown-item">Общественный транспорт</div>
                <div className="dropdown-item">Трудовые отношения</div>
                <div className="dropdown-item">Экология</div>
                <div className="dropdown-item">Торговля, товары и услуги</div>
                <div className="dropdown-item">Связь и телекоммуникации</div>
                <div className="dropdown-item">Стройплощадки</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 form-group offset-md-3">
            <label htmlFor="exampleFormControlTextarea1">
              Опишите Вашу проблему
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
        </div>
        <div className="row">
          <form className="col-6 offset-md-3">
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
