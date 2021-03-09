import { FaHome, FaUsers, FaPhoneAlt } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi';

import Index from './views/Index.js';
import Teachers from './views/Teachers.js';
// import Maps from 'views/examples/Maps.js';
// import Register from 'views/examples/Register.js';
// import Login from 'views/examples/Login.js';
// import Tables from 'views/examples/Tables.js';
// import Icons from 'views/examples/Icons.js';

var routes = [
  {
    path: '/index',
    name: 'Main',
    icon: <FaHome />,
    component: Index,
    layout: '/admin',
  },
  {
    path: '/teachers',
    name: 'Teachers',
    icon: <FaUsers />,
    component: Teachers,
    layout: '/admin',
  },
  {
    path: '/pricing',
    name: 'Pricing',
    icon: <GiPriceTag />,
    // component: Maps,
    layout: '/admin',
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: <FaPhoneAlt />,
    // component: Profile,
    layout: '/admin',
  },
];
export default routes;
