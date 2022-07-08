import { useContext } from 'react';
import { Container } from './styles';
import Button from '../../components/Button';

import { Context } from '../../Context/AuthContext';

export default function Home() {
  const { handleLogout } = useContext(Context);

  return (
    <Container>
      <Button type="button" onClick={handleLogout}>Sair</Button>
    </Container>
  );
}
