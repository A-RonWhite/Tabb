import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LinkContext from '../../context/link/linkContext';

const LinkItem = ({ link }) => {
  const linkContext = useContext(LinkContext);

  const { deleteLink, setCurrent, clearCurrent } = linkContext;

  const { _id, name, hyperLink, tag } = link;

  const onDelete = () => {
    deleteLink(_id);
    clearCurrent();
  };

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
            <i className="fas fa-envelope-open"> {hyperLink}</i>
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(link)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

LinkItem.propTypes = {
  link: PropTypes.object.isRequired,
};

export default LinkItem;
