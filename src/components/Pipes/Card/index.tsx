import React from 'react';
import {
  Container,
  Content,
  Footer,
  Subtitle
} from './styles';

interface PipeCardProps {
  pipe: Pipe
  onClick(): void
}

const PipeCard: React.FC<PipeCardProps> = ({ pipe, onClick }) => {

  return (
    <Container
      backgroundColor={pipe.color}
      onClick={onClick}
    >
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
