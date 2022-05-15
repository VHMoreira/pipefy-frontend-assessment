import React from 'react';
import Pipes from 'containers/Pipes';
import {
  Container,
  Content,
  Header,
  Logo
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo
          src="https://files.readme.io/9e810f9-small-developers3x.png"
          className="Home-logo"
          alt="logo"
        />
      </Header>
      <Content>
        <Pipes />
      </Content>
    </Container>
  );
}

export default Home;
