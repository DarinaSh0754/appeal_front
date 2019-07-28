import Layout from './components/layout/layout';
import Home from './pages/home';

const routes = [
    { path: '/', exact: true, name: 'Главная' },
    { path: '/home', exact: true, name: 'Домашняя страница', component: Home }    
  ];
  
  export default routes;