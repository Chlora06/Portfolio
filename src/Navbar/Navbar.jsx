import {useState, useEffect, useRef} from 'react';
const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const handleClickOutside = (event) => {
    if(menuRef.current && !menuRef.current.contains(event.target)){
      setIsOpen(false);
    }
  };
  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav className="nav-bar">
      <div className="nav-logo">Portfolio</div>
      <button className='hamburger' onClick={()=>setIsOpen(!isOpen)}>
        &#9776;
      </button>
      <div className={`menu-list ${isOpen ? 'open': ''}`} ref={menuRef}>  
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
