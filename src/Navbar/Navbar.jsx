
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">Portfolio</div>

      <ul className="menu-list">
        <li className="menu-list-items">
          <a href="#" className="menu-list-items-link">
            <div className="dot"></div>
            Home
          </a>
        </li>
        <li className="menu-list-items">
          <a href="#About" className="menu-list-items-link">
            <div className="dot"></div>
            About Me
          </a>
        </li>
        <li className="menu-list-items">
          <a href="#Projects" className="menu-list-items-link">
            <div className="dot"></div>
            Projects
          </a>
        </li>
        <li className="menu-list-items">
          <a href="#Contact" className="menu-list-items-link">
            <div className="dot"></div>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
