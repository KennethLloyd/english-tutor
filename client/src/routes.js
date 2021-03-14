import { FaHome, FaUsers, FaPhoneAlt } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi';

import Index from './views/Index.js';
import Teachers from './views/Teachers.js';
import Pricing from './views/Pricing.js';

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
    component: Pricing,
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
