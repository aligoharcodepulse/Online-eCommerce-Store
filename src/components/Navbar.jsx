import { Link } from "react-router-dom";
import '../index.css'
import { FaCartArrowDown } from "react-icons/fa";
import { signOut } from "firebase/auth"
import {auth} from '../firebase'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth)
    .then(()=>navigate('/'))
    .catch(error=>{
      console.log(error);
      alert(error.message)
    })
  }
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav>
      <div className="menu-icon"  onClick={toggleMenu}>☰</div>
      <ul className={menuOpen ? 'show' : ''}>
          <li className="px-3">
            <Link style={{color:'white'}} to="/landingPage">Landing</Link>
          </li>
          <li className="px-3">
            <Link style={{color:'white'}} to="/about">About Me</Link>
          </li>
          <li className="px-3">
            <Link style={{color:'white'}} to="/products">Products</Link>
          </li>
          <li className="px-3 cart-icon">
            <Link style={{ color: 'white', position: 'relative' }} to="/cart">
            <FaCartArrowDown />
            </Link>
          </li>
          <li className="px-3 cart-icon">
            <button onClick={handleSignOut}>Log Out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}


export default Navbar;