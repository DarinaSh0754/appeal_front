import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody,
  CardHeader
} from 'reactstrap';
import './addAppeal.css';

class AppealForm extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>Подача обращения</h1>
            <Card className="my-5">
              <CardBody>
                <FormGroup>
                  <Label for="select">Выберете исполнителя:</Label>
                  <Input
                    type="select"
                    className="select2"
                    name="select"
                    id="select"
                  >
                    <option>ЖКХ</option>
                    <option>Автомобильные дороги</option>
                    <option>Социальная сфера</option>
                    <option>Общественный транспорт</option>
                    <option>Трудовые отношения</option>
                    <option>Экология</option>
                    <option>Торговля, товары и услуги</option>
                    <option>Связь и телекоммуникации</option>
                    <option>Стройплощадки</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="text">Опишите вашу проблему:</Label>
                  <Input type="textarea" name="text" id="text" rows={5} />
                </FormGroup>
                <FormGroup className="mx-3">
                  <Label for="file">Прикрепите файл</Label>
                  <Input type="file" name="file" id="file" />
                  <FormText color="muted">
                    Фото, подтверждающие наличие проблемы.
                  </FormText>
                </FormGroup>
                <div className="row justify-content-center">
                  <div className="col-2">
                    <Button color="secondary" size="lg">
                      Отправить
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row" />
      </div>
    );
  }
}

export default AppealForm;
