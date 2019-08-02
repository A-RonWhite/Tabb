import React, { useState, useContext } from 'react';
import LinkContext from '../../context/link/linkContext';

const LinkForm = () => {
  const linkContext = useContext(LinkContext);

  const [link, setLink] = useState({
    name: '',
    hyperLink: '',
    tag: '',
  });

  const onChange = e =>
    setLink({
      ...link,
      [e.target.name]: e.target.value,
    });

  const onSubmit = e => {
    e.preventDefault();
    linkContext.addLink(link);
    setLink({
      name: '',
      hyperLink: '',
      tag: '',
    });
  };

  const { name, hyperLink, tag } = link;

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Link</h2>
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
          value="Add Link"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default LinkForm;
