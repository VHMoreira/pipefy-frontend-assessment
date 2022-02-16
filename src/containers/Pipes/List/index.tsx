import PipeCard from 'components/Pipes/Card';
import useToogle from 'hooks/useToogle';
import React, { useCallback, useState } from 'react';
import {
  Container,
  Content,
  Subtitle,
  Title
} from './styles';
import CardsModal from 'containers/Cards/Modal';
import { useQuery } from '@apollo/client';
import { GET_ORGANIZATION } from 'store/organizations/queries';

const PipesList: React.FC = () => {
  const { isActive: isOpen, active: openModal, disable: closeModal } = useToogle()
  const { data, loading } = useQuery<GetOrganizationData, GetOrganizationVariables>(GET_ORGANIZATION, {
    variables: {
      organizationId: 300562393
    }
  })
  const [selectedPipe, setSelectedPipe] = useState<Pipe>()

  const organization = data?.organization

  const handleSelectPipeCard = useCallback((pipe: Pipe) => {
    setSelectedPipe(pipe)
    openModal()
  }, [openModal])

  if (loading) {
    return null
  }

  return (
    <Container>
      <Title>Your pipes</Title>
      <Subtitle>
        Here are all your process
      </Subtitle>
      <Content>
        {organization?.pipes.map(pipe => (
          <PipeCard key={pipe.id} pipe={pipe} onClick={() => handleSelectPipeCard(pipe)} />
        ))}
      </Content>
      {selectedPipe ? <CardsModal isOpen={isOpen} onClose={closeModal} pipe={selectedPipe} /> : null}
    </Container>
  );
}

export default PipesList;
