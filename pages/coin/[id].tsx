/* eslint-disable camelcase */
import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout/Layout';

const CoinPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const CoinContainer = styled.div``;

const Name = styled.h1`
  text-decoration: underline;
  text-align: center;
`;

const Ticker = styled.p`
  font-size: 30px;
  text-align: center;
`;

const Current = styled.p`
  margin-top: 1rem;
  font-size: 30px;

  text-align: center;
`;

const Image = styled.img``;

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
      <NextSeo
        title={`Next Crypto | ${coin.name}`}
        canonical="https://lhowsam.com/projects"
        openGraph={{
          url: `https://next-crypto.vercel.app/coin/${coin.name}`,
          title: `Next Crypto | ${coin.name}`,
        }}
      />
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
