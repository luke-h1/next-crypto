import Link from 'next/link';
import { CoinType } from 'pages/coin/[id]';
import {
  CoinContainer,
  CoinRow,
  CoinWrap,
  Image,
  Heading,
  Symbol,
  Price,
  Data,
  Volume,
  CoinPercRed,
  CoinPercGreen,
  MarketCap,
} from './CoinsStyles';

export type Coin = {
  name: string;
  price: number;
  symbol: string;
  marketCap: number;
  volume: number;
  image: any;
  priceChange: number;
  id: number;
};

const Coins = ({
  name,
  price,
  symbol,
  marketCap,
  volume,
  image,
  priceChange,
  id,
}: Coin) => {
  return (
    <Link href={`/coin/${id}`}>
      <a>
        <CoinContainer>
          <CoinRow>
            <CoinWrap>
              <Image src={image} alt={name} />
              <Heading>{name}</Heading>
              <Symbol>{symbol}</Symbol>
            </CoinWrap>
            <Data>
              <Price>
                £
                {price.toFixed(2)}
              </Price>
              <Volume>
                Vol:<br />
                {volume.toLocaleString()}
              </Volume>
              {priceChange < 0 ? (
                <CoinPercRed>
                  {priceChange.toFixed(2).toLocaleString()}
                  %
                </CoinPercRed>
              ) : (
                <CoinPercGreen>
                  {priceChange.toFixed(2).toLocaleString()}
                  %
                </CoinPercGreen>
              )}
              <MarketCap>
                Market Cap: £
                {marketCap ? marketCap.toLocaleString() : ''}
              </MarketCap>
            </Data>
          </CoinRow>
        </CoinContainer>
      </a>
    </Link>
  );
};
export default Coins;
