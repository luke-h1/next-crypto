import styled from 'styled-components';
import Link from 'next/link';

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

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Link href="/">Logo</Link>
      </Header>
      <Main>{children}</Main>
    </Wrapper>
  );
};
export default Layout;
