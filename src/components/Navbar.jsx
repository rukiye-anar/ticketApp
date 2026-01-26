import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import Hamburger from "hamburger-react";
import { useState } from "react";
function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") {
      return;
    }
    console.log("yazıldı");
    setQuery("");
  };
  const handleKeyPress = (e) => {
    if (query.trim() === "") {
      return;
    }
    if (e.key === "Enter") {
      handleSearch;
      console.log("entera bastı");
       setQuery("");
    }
    
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">Biletx</Link>
      </div>
      <div className="navbar-link">
        <Link to="/Concert">Konser</Link>
        <Link to="/Activity">Etkinlik</Link>
        <Link to="/Theatre">Tiyatro</Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Arayacağınız Kelime"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <FaSearch onClick={handleSearch} />
      </div>
      <div className="navbar-login">
        <Link to="/Login">
          <FaUserCircle />
        </Link>
      </div>
      <div className="hamburger-icon-wrapper">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#E0EDFF" />
      </div>
      {isOpen && (
        <div className="hamburger-menu">
          <div className="hamburger-login">
            <Link to="/Login">
              <FaUserCircle />
            </Link>
          </div>
          <div className="hamburger-link">
            <Link to="/Concert">Konser</Link>
            <Link to="/Activity">Etkinlik</Link>
            <Link to="/Theatre">Tiyatro</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
