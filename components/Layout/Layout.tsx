import styled from 'styled-components';
import Link from 'next/link';
import { GlobalStyle } from 'styles/GlobalStyles';
import { FaBitcoin } from 'react-icons/fa';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Crypto = styled(FaBitcoin)`
font-size: 60px;
margin: 1rem 0 1rem 0;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <Link href="/"><Crypto /></Link>
      </Header>
      <Main>{children}</Main>
    </Wrapper>
  );
};
export default Layout;
