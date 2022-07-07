import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.bitlab.main};
  border: none;
  border-radius: 6px;
  width: 100%;
  color: #fff;
  height: 52px;
  font-size: 16px;
  transition: all 0.2s ease-in;
  appearance: none;
  box-shadow: 0px 4px 10px #00000012;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bitlab.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.bitlab.dark};
  }

  &:focus {
    box-shadow: 0 0 0 0.25rem ${({ theme }) => theme.colors.bitlab.extraLighter};
  }
`;
