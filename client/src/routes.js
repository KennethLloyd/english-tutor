import { FaHome, FaUsers, FaPhoneAlt } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi';

import Index from './views/Index.js';
import Teachers from './views/Teachers.js';
import Pricing from './views/Pricing.js';
import Contacts from './views/Contacts.js';

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
    component: Contacts,
    layout: '/admin',
  },
];
export default routes;
