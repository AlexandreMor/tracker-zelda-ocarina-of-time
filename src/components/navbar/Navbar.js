import NavbarLink from "./NavbarLink";

function Navbar() {
  const links = ["Tracker", "Settings"];
  const helpLink = "https://github.com/AlexandreMor/tracker-zelda-ocarina-of-time/blob/main/UserGuide.md"
  return (
    <nav className="nav-elements">
      <h2 className="tracker-name">OoT Tracker</h2>
      <ul className="navigation">
        {links.map((link) => (
          <NavbarLink key={link} link={link} />
        ))}
        <li className="nav-list">
          <a href={helpLink} rel="noreferrer" target="_blank">Help</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
