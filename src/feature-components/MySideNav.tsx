import { useEffect, useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import './MySideNav.css';

const menuData = [
  { id: "#home", label: "back to top" },
  { id: "#projects", label: "Projects" },
  { id: "#y-dna-public", label: "Y-DNA Public" },
  { id: "#mt-dna-public", label: "mtDNA Public" },
  // { id: "#mt-discover", label: "mtDNA Discover" }, // TBD future
  { id: "#y-dna-pages-by-snp", label: "Y-DNA Pages by SNP" },
  { id: "#y-discover", label: "Y-DNA Discover" },
  { id: "#y-discover-by-people", label: "Y-DNA Discover pages by Person" },
  // { id: "#mr-discover-by-people", label: "mt-DNA Discover pages by Person" }, // TBD future
  { id: "#yfull-pages", label: "YFULL" },
  { id: "#contacts", label: "My Contacts" },
];

export function MySideNav() {
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
      {menuData.map((item) => (
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
