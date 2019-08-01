import React from 'react';
import PropTypes from 'prop-types';

const LinkItem = ({ link }) => {
  const { id, name, hyperLink, tag } = link;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <span style={{ float: 'right' }} className="badge badge-success">
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {hyperLink && (
          <li>
            <i className="fas fa-envelope-open">{hyperLink}</i>
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

LinkItem.propTypes = {
  link: PropTypes.object.isRequired,
};

export default LinkItem;
