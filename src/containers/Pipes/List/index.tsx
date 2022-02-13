import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {
  CardContainer,
  CardContent,
  CardFooter,
  CardSubtitle,
  Container,
  Content,
  Subtitle,
  Title
} from './styles';

const GET_ORGANIZATION = gql`
query GetOrganizations{
  organization(id: 300562393) {
    id
    name
    pipes {
      id
      name
      color
      cards_count
      icon
    }
  }
}
`

const PipesList: React.FC = () => {
  const { data } = useQuery<{ organization: Organization }>(GET_ORGANIZATION)

  return (
    <Container>
      <Title>Your pipes</Title>
      <Subtitle>
        Here are all your process
      </Subtitle>
      <Content>
        {data?.organization.pipes.map(pipe => (
          <CardContainer key={pipe.id} backgroundColor={pipe.color}>
            <CardContent>
              <h4>{pipe.name}</h4>
            </CardContent>
            <CardFooter>
              <CardSubtitle>{pipe.cards_count} cards</CardSubtitle>
            </CardFooter>
          </CardContainer>
        ))}
      </Content>
    </Container>
  );
}

export default PipesList;
