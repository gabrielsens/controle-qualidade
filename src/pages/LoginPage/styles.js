import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bitlab.main};
`;

export const Form = styled.form`
  margin: 16px;
  padding: 8px;
  height: 500px;
  max-width: 700px;
  background-color: #fff;
  border-radius: 8px;
`;

export const FormContainer = styled.div`
  input {
    margin: 8px 0;
  }
  button {
    margin-top: 16px;
  }
`;

export const ImageLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  img {
    width: 100%;

  }
`;
