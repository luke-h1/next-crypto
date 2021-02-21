/* eslint-disable camelcase */
import Coins from '../Coins/Coins';

type CoinListType = {
  name: string;
  price: number;
  symbol: string;
  marketCap: number;
  volume: number;
  image: any;
  priceChange: number;
  id: number;
  market_cap: number;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
};
interface CoinTypes {
  data: {
    id?: string;
    map: any;
    symbol?: string;
    name?: string;
    image?: string;
    current_price?: number;
    market_cap?: number;
    market_cap_rank?: number;
    fully_diluted_valuation?: number;
    total_volume?: number;
    high_24h?: number;
    low_24h?: number;
    price_change_24h?: number;
    price_change_percentage_24h?: number;
    market_cap_change_24h?: number;
    market_cap_change_percentage_24h?: number;
    circulating_supply?: number;
    total_supply?: number;
    max_supply?: number
    ath?: number;
    ath_change_percentage?: number;
    ath_date?: string;
    atl?: number;
    atl_change_percentage?: number;
    atl_date?: string;
    roi?: {
      times: number;
      currency: string;
      percentage: number;
    }
    last_updated: string;
  }
}

const CoinList = ({ data }: CoinTypes) => {
  return (
    <>
      {data.map((coin: CoinListType) => (
        <Coins
          key={coin.id}
          name={coin.name}
          id={coin.id}
          price={coin.current_price}
          symbol={coin.symbol}
          marketCap={coin.market_cap}
          volume={coin.total_volume}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
        />
      ))}
    </>
  );
};
export default CoinList;
