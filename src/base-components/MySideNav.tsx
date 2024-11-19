import { useEffect, useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import './MySideNav.css';

interface NavItemModel {
  id: string;
  label: string;
}

interface MySideNavProps {
  data: NavItemModel[];
}

export function MySideNav({ data }: MySideNavProps) {
  const [activeItem, setActiveItem] = useState("#home");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const currentHash = window.location.hash || "#home";
    setActiveItem(currentHash);
    setIsLoaded(true);
  }, []);

  const handleClick = (id: string) => {
    setActiveItem(id);
  };

  return (
    <Nav vertical>
      {data.map((item) => (
        <NavItem key={item.id}>
          <NavLink
            href={item.id}
            onClick={() => handleClick(item.id)}
            className={isLoaded && activeItem === item.id ? "active" : ""}
          >
            {item.label}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}
