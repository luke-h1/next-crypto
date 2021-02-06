import Link from 'next/link';
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

const Coins = ({
  name,
  price,
  symbol,
  marketCap,
  volume,
  image,
  priceChange,
  id,
}) => {
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
              <Price>{price}</Price>
              <Volume>
                £
                {volume.toLocaleString()}
              </Volume>
              {priceChange < 0 ? (
                <CoinPercRed>
                  {priceChange.toFixed(2)}
                  %
                </CoinPercRed>
              ) : (
                <CoinPercGreen>
                  {priceChange.toFixed(2)}
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
