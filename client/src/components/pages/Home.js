import React, { useContext, useEffect } from 'react';
import Links from '../links/Links';
import LinkForm from '../links/LinkForm';
import LinkFilter from '../links/LinkFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
};

export default Home;
