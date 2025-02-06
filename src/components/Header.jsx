import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>#VANLIFE</Link>
      <nav>
          <NavLink className={({ isActive }) => isActive? "link-active" : null} to='/host'>Host</NavLink>
          <NavLink className={({ isActive }) => isActive? "link-active" : null} to='/about'>About</NavLink>
          <NavLink className={({ isActive }) => isActive? "link-active" : null} to='/vans'>Vans</NavLink>
      </nav>
    </header>
  )
}