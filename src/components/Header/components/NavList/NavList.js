import NavItem from "../NavItem/NavItem";

const NavList = () => (
  <ul className="navbar-nav ml-auto align-items-center">
    <NavItem foo="home" bar="Home"></NavItem>
    <NavItem foo="resume" bar="Resume"></NavItem>
    <NavItem foo="services" bar="Serivces"></NavItem>
    <NavItem foo="blog" bar="Blog"></NavItem>
    <NavItem foo="contact" bar="Contact"></NavItem>
  </ul>
);

export default NavList;
