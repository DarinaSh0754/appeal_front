import Home from './pages/home';
import Login from './pages/login';
import Registration from './pages/registration';

const routes = [
    { path: '/', exact: true, name: 'Главная' },
    { path: '/home', exact: true, name: 'Домашняя страница', component: Home },
    { path: '/login', exact: true, name: 'Вход', component: Login },
    { path: '/registration', exact: true, name: 'Регистрация', component: Registration }   
  ];
  
  export default routes;
