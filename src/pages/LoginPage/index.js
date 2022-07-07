import { useState } from 'react';

import {
  Container, Form, FormContainer, ImageLogo,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import imgLogo from '../../assets/images/img_login.png';

export default function LoginPage() {
  const [user, setUser] = useState('');
  const [password, setPassowrd] = useState('');

  function handleUser(e) {
    setUser(e.target.value);
  }

  function handlePassword(e) {
    setPassowrd(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user, password);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <ImageLogo>
            <img src={imgLogo} alt="Logo Empresa" />
          </ImageLogo>
        </FormContainer>
        <FormContainer>
          <Input
            type="text"
            placeholder="Informe o nome de usuário..."
            value={user}
            onChange={handleUser}
          />
          <Input
            type="password"
            placeholder="Informe a senha..."
            value={password}
            onChange={handlePassword}
          />
        </FormContainer>
        <FormContainer>
          <Button type="submit">Entrar</Button>
        </FormContainer>
      </Form>
    </Container>
  );
}
