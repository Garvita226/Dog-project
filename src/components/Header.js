import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import ModeContext from '../utils/ModeContext';

const Header = () => {
  const {mode, setMode} = useContext(ModeContext)

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`header ${mode}`}>
      <nav>
        <ul>
          <div>
          <li><NavLink to='myspace' activeClassName={`active`}><i class="fa-solid fa-globe"></i> My Space</NavLink></li>
          <li><NavLink to='/' activeClassName={`active`}><i class="fa-solid fa-house"></i> Home</NavLink></li>
          <li><NavLink to='events' activeClassName={`active`}><i class="fa-solid fa-trophy"></i> Events</NavLink></li>
          <li><NavLink to='videos' activeClassName={`active`}><i class="fa-brands fa-youtube"></i> Videos</NavLink></li>
          <li><NavLink to='live' activeClassName={`active`}><i class="fa-solid fa-house"></i> Live</NavLink></li>
          <li><NavLink to='register' activeClassName={`active`}><i class="fa-solid fa-user"></i> Register</NavLink></li>
          </div>
          <div className='btn-container'>
          <li><button className={`btn ${mode}-btn`} onClick={toggleMode}>{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</button></li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
