import React from 'react';
import Links from '../links/Links';
import LinkForm from '../links/LinkForm';

const Home = () => (
  <div className="grid-2">
    <div>
      <LinkForm />
    </div>
    <div>
      <Links />
    </div>
  </div>
);

export default Home;
