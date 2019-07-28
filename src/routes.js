import Home from './pages/home';
import Login from './pages/login';
import Registration from './pages/registration';
import addAppeal from './pages/addAppeal';

const routes = [
  { path: '/', exact: true, name: 'Главная' },
  { path: '/home', exact: true, name: 'Домашняя страница', component: Home },
  { path: '/login', exact: true, name: 'Вход', component: Login },
  {
    path: '/registration',
    exact: true,
    name: 'Регистрация',
    component: Registration
  },
  {
    path: '/appeal',
    exact: true,
    name: 'Создание обращений',
    component: addAppeal
  }
];

export default routes;
