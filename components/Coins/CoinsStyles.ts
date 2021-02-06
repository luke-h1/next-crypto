import styled from 'styled-components';

export const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #2e2e2e;
  width: 1000px;
  padding: 0;
  &:hover {
    color: blue;
  }
`;

export const CoinWrap = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
`;

export const Image = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

export const Heading = styled.h1`
  font-size: 16px;
  width: 150px;
`;

export const Symbol = styled.p`
  text-transform: uppercase;
`;

export const Data = styled.div`
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.p`
  width: 110px;
  text-align: center;

`;

export const Volume = styled.p`
  width: 155px;
  text-align: left;
`;

export const CoinPercRed = styled.p`
  color: red;
`;

export const CoinPercGreen = styled.p`
  color: green;
  text-align: center;

`;

export const MarketCap = styled.p`
  width: 230px;
  text-align: center;

`;
