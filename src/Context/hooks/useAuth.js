import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthService from '../../services/AuthService';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bearerToken, setBearerToken] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setBearerToken(`Bearer ${JSON.parse(token)}`);
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(userName, password) {
    const response = await AuthService.loginUser({
      userName, password,
    });

    if (response.token) {
      setBearerToken(`Bearer ${response.token}`);
      localStorage.setItem('token', JSON.stringify(response.token));
      localStorage.setItem('_oAuthData', JSON.stringify(response.user));
      setAuthenticated(true);
      navigate('/');
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('_oAuthData');
    setBearerToken('');
    navigate('/login');
  }

  return {
    authenticated, loading, handleLogin, handleLogout, bearerToken,
  };
}
