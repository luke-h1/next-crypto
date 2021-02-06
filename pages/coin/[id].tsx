/* eslint-disable camelcase */
import Layout from '../../components/Layout/Layout';
import {
  CoinPage,
  CoinContainer,
  Name,
  Ticker,
  Current,
  Image,
} from './CoinStyles';

export type CoinType = {
  coin: any;
  base: string;
  target: string;
  market: [Object];
  last: number;
  volume: number;
  converted_last: [Object];
  converted_volume: [Object];
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: string;
  token_info_url: string;
  coin_id: string;
  target_coin_id: string;
};

const Coin = ({ coin }: CoinType) => {
  return (
    <Layout>
      <CoinPage>
        <CoinContainer>
          <Image src={coin.image.large} />
          <Name>{coin.name}</Name>
          <Ticker>{coin.symbol}</Ticker>
          <Current>£{coin.market_data.current_price.gbp.toFixed(2)}</Current>
        </CoinContainer>
      </CoinPage>
    </Layout>
  );
};
export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
