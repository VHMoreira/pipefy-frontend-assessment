import React from 'react';
import {
  Container,
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
    </Container>
  );
}

export default Home;
