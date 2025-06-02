import { useEffect, useRef, useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './MySideNav.css';

interface NavItemModel {
  id: string;
  label: string;
}

interface MySideNavProps {
  data: NavItemModel[];
  //  refactor, use context at least
  activeItem: string;
  setActiveItem: (id: string) => void;
  manualScrollTarget: string | null;
  setManualScrollTarget: (id: string | null) => void;
  //  refactor, use context at least
}

export function MySideNav(props: MySideNavProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentHash = window.location.hash.replace('#', '') || 'home';
    props.setActiveItem(currentHash);
    setIsLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMenuItemClick = (id: string) => {
    props.setActiveItem(id);
    props.setManualScrollTarget(id);

    const el = document.getElementById(id);
    if (el) {
      // Start smooth scroll to target
      el.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    } else if (id === 'home') {
      // Start smooth scroll to very top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', `#home`);
    }

    // Clear any previous timeout
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // Listen for scroll events and reset timeout
    const onScroll = () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        props.setManualScrollTarget(null);
        window.removeEventListener('scroll', onScroll);
      }, 150); // 150ms after last scroll event
    };

    window.addEventListener('scroll', onScroll);
  };

  return (
    <Nav vertical>
      {props.data.map((item) => (
        <NavItem key={item.id}>
          <NavLink
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick(item.id);
            }}
            className={isLoaded && props.activeItem === `${item.id}` ? 'active' : ''}
          >
            {item.label}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}
