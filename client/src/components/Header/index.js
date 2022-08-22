import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import '../../styles/Header.css'
import logo from "../../Images/bookbuddyimg.png"

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="header">
      <div>
        <Link to="/home">
          <img
            src={logo}
            alt="example"
            className="logoImg"
          />
        </Link>
      </div>
      {Auth.loggedIn() ? (
        <div className="login">
          <div>
            <Link to="/profile" className="link">
              Profile
            </Link>
          </div>
          <div>
            <Link to="/bookshelf" className="link">
              BookShelf
            </Link>
          </div>
          <div>
            <button onClick={logout} className="btnLink">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="login">
            <Link to="/" className="link">
              Login
            </Link>
            <Link to="/signup" className="link">
              Signup
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
