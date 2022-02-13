import React from 'react';
import PipesList from 'containers/Pipes/List';
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
      <section>
        <PipesList />
      </section>
    </Container>
  );
}

export default Home;
