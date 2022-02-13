import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {
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
        {data?.organization.pipes.map(pipe => <div key={pipe.id}>{pipe.name}</div>)}
      </Content>
    </Container>
  );
}

export default PipesList;
