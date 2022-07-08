import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

export default function Private({ children }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

Private.propTypes = {
  children: PropTypes.node.isRequired,
};
