import styled from 'styled-components';

export const CoinSearch = styled.div`
  margin: 4rem 0 4rem 0;
  display: flex;
  align-items: center;
  width: 300px;
`;

export const Input = styled.input`
  background: #222531;
  color: #e2e2e2;
  border: none;
  padding: 16px;
  border-radius: 4px;
  outline: 0;
  height: 100%;
  width: 100%;
  &::placeholder {
    color: #e2e2e2;
  }
`;
