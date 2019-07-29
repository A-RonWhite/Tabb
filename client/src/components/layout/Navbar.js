import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => (
  <div className="navbar bg-primary">
    <h1>
      <i className={icon} /> {title}
    </h1>
  </div>
);

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Tabb',
  icon: 'fas fa-link',
};

export default Navbar;
