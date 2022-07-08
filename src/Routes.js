import {
  BrowserRouter, Route, Routes as Switch,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Private from './pages/Private';
import Home from './pages/Home';

import { AuthProvider } from './Context/AuthContext';

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Private><Home /></Private>} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
