import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header>
      <Link to='/'>#VANLIFE</Link>
      <nav>
          <NavLink className={({ isActive }) => isActive? "link-active" : null} to='/host'>Host</NavLink>
          <NavLink className={({ isActive }) => isActive? "link-active" : null} to='/about'>About</NavLink>
          <NavLink className={({ isActive }) => isActive? "link-active" : null} to='/vans'>Vans</NavLink>
          <NavLink className={({ isActive }) => isActive? "link-active login-btn" : "login-btn"} to='/login'><FontAwesomeIcon icon={faUser} /></NavLink>
      </nav>
    </header>
  )
}