import { gql, useQuery } from '@apollo/client';
import Modal from 'components/Common/Modal';
import PipeCard from 'components/Pipes/Card';
import useToogle from 'hooks/useToogle';
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
  const { data, loading: loadingOrganization } = useQuery<{ organization: Organization }>(GET_ORGANIZATION)


  const { isActive: isOpen, active: openModal, disable: closeModal } = useToogle()

  if (loadingOrganization) {
    return null
  }

  return (
    <Container>
      <Title>Your pipes</Title>
      <Subtitle>
        Here are all your process
      </Subtitle>
      <Content>
        {data?.organization.pipes.map(pipe => (
          <PipeCard key={pipe.id} pipe={pipe} onClick={openModal} />
        ))}
      </Content>
      <Modal
        isOpen={isOpen}
        title='Modal Test'
        onClose={closeModal}
      >
        Hello World
      </Modal>
    </Container>
  );
}

export default PipesList;
