import React from 'react';
import {
  Container,
  Content,
  Footer,
  Subtitle
} from './styles';

interface PipeCardProps {
  pipe: Pipe
}

const PipeCard: React.FC<PipeCardProps> = ({ pipe }) => {

  return (
    <Container key={pipe.id} backgroundColor={pipe.color}>
      <Content>
        <h4>{pipe.name}</h4>
      </Content>
      <Footer>
        <Subtitle>{pipe.cards_count} cards</Subtitle>
      </Footer>
    </Container>
  );
}

export default PipeCard;
