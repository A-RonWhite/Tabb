import React from 'react';
import Links from '../links/Links';
import LinkForm from '../links/LinkForm';
import LinkFilter from '../links/LinkFilter';

const Home = () => (
  <div className="grid-2">
    <div>
      <LinkForm />
    </div>
    <div>
      <LinkFilter />
      <Links />
    </div>
  </div>
);

export default Home;
