import { useState } from 'react';
import { NextSeo } from 'next-seo';
import CoinList from '../components/CoinList/CoinList';
import Search from '../components/Search/Search';
import Layout from '../components/Layout/Layout';
import { CoinType } from './coin/[id]';

export default function Home({ data }) {
  const [search, setSearch] = useState('');

  // eslint-disable-next-line max-len
  const filterCoins = data.filter((coin: CoinType) => coin.name.toLowerCase().includes(search.toLowerCase()));

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value !== null || '') {
      setSearch(e.target.value.toLowerCase());
    }
  };
  return (
    <Layout>
      <NextSeo
        title="Next Crypto"
        canonical="https://next-crypto.vercel.app/"
        openGraph={{
          url: 'https://next-crypto.vercel.app',
          title: 'Next Crypto',
        }}
      />
      <Search type="text" placeholder="search" onChange={handleChange} />
      <CoinList data={filterCoins} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=30&page=1&sparkline=false';
  const res = await fetch(API_URL);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
