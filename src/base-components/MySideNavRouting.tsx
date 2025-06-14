import { Link, useLocation } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

import { sideNavData } from '../shared/constant';
import './MySideNav.css';

interface NavItemModel {
  id: string;
  label: string;
}

export function MySideNavRouting() {
  const location = useLocation();

  return (
    <Nav vertical className="bg-light p-1" style={{ minWidth: '240px' }}>
      {sideNavData.map((item: NavItemModel) => {
        const path = item.id === 'my-projects' ? '' : item.id;
        const isActive =
          path === ''
            ? location.pathname === '/'
            : location.pathname === `/${path}`;

        return (
          <NavItem key={item.id} className="mb-2">
            <Link
              to={path}
              className={`nav-link ${isActive ? 'active fw-bold' : ''}`}
            >
              {item.label}
            </Link>
          </NavItem>
        );
      })}
    </Nav>
  );
}
