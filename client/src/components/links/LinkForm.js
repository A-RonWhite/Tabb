import React, { useState, useContext, useEffect } from 'react';
import LinkContext from '../../context/link/linkContext';

const LinkForm = () => {
  const linkContext = useContext(LinkContext);

  const { addLink, current, clearCurrent, updateLink } = linkContext;

  const [link, setLink] = useState({
    name: '',
    hyperLink: '',
    tag: '',
  });

  useEffect(() => {
    if (current !== null) {
      setLink(current);
    } else {
      setLink({
        name: '',
        hyperLink: '',
        tag: '',
      });
    }
  }, [current, linkContext]);

  const onChange = e =>
    setLink({
      ...link,
      [e.target.name]: e.target.value,
    });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addLink(link);
    } else {
      updateLink(link);
    }
    clearAll();
  };

  const { name, hyperLink, tag } = link;

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? 'Edit Link' : 'Add Link'}</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="www.tabb.com"
        name="hyperLink"
        value={hyperLink}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={onChange}
        name="tag"
      />
      <div>
        <input
          type="submit"
          value={current ? 'Update Link' : 'Add Link'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default LinkForm;
