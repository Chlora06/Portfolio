import {useState} from 'react';
const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="nav-logo">Portfolio</div>
      <button className='hamburger' onClick={()=>setIsOpen(!isOpen)}>
        &#9776;
      </button>
      <div className={`menu-list ${isOpen ? 'open': ''}`}>  
        <div className="menu-list-items">
          <a href="#" className="menu-list-items-link">
            <div className="dot"></div>
            Home
          </a>
        </div>
        <div className="menu-list-items">
          <a href="#About" className="menu-list-items-link">
            <div className="dot"></div>
            About Me
          </a>
        </div>
        <div className="menu-list-items">
          <a href="#Projects" className="menu-list-items-link">
            <div className="dot"></div>
            Projects
          </a>
        </div>
        <div className="menu-list-items">
          <a href="#Contact" className="menu-list-items-link">
            <div className="dot"></div>
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
