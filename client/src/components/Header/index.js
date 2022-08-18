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
        <Link to="/">
        <img
            src={logo}
            alt="example"
            className="logoImg"
          />
        </Link>
      </div>
      {Auth.loggedIn() ? (
        <>
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
            <Link onClick={logout}>
              Logout
            </Link>
          </div>
        </>
      ) : (
        <>
        <div className="login">
            <Link to="/login" className="link">
              Login
            </Link>
            <Link to="/signup"className="link">
              Signup
            </Link>
        </div>
        </>
      )}
    </header>
  );
};

export default Header;
