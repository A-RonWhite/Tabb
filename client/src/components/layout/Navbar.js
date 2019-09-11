import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import LinkContext from '../../context/link/linkContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const linkContext = useContext(LinkContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearLinks } = linkContext;

  const onLogout = () => {
    logout();
    clearLinks();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <span className="hide-sm">Logout</span>{' '}
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Tabb',
  icon: 'fas fa-link',
};

export default Navbar;
