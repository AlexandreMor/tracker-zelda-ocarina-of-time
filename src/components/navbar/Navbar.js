import NavbarLink from "./NavbarLink";

function Navbar() {
  const links = ["Tracker", "Settings", "Help"];
  return (
    <nav className="nav-elements">
      <h2 className="tracker-name">OoT Tracker</h2>
      <ul className="navigation">
        {links.map((link) => (
          <NavbarLink key={link} link={link} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
