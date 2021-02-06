import { CoinSearch, Input } from './SearchStyles';

const Search = ({ ...rest }) => {
  return (
    <CoinSearch>
      <Input {...rest} />
    </CoinSearch>
  );
};
export default Search;
