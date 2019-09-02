import React, { Fragment, useContext } from 'react';
import LinkItem from './LinkItem';
import LinkContext from '../../context/link/linkContext';

const Links = () => {
  const linkContext = useContext(LinkContext);

  const { links, filtered } = linkContext;

  if (links.length === 0) {
    return <h4>Please add a link</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(link => <LinkItem key={link.id} link={link} />)
        : links.map(link => <LinkItem key={link.id} link={link} />)}
    </Fragment>
  );
};

export default Links;
