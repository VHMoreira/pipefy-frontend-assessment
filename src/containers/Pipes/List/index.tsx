import PipeCard from 'components/Pipes/Card';
import useToogle from 'hooks/useToogle';
import React, { useCallback, useState } from 'react';
import * as OrganizationQueries from 'queries/organization'
import {
  Container,
  Content,
  Subtitle,
  Title
} from './styles';
import CardsModal from 'containers/Cards/Modal';

const PipesList: React.FC = () => {
  const { isActive: isOpen, active: openModal, disable: closeModal } = useToogle()
  const { organization, loading: loadingOrganization } = OrganizationQueries.GetOrganization(300562393)
  const [selectedPipe, setSelectedPipe] = useState<Pipe>()

  const handleSelectPipeCard = useCallback((pipe: Pipe) => {
    setSelectedPipe(pipe)
    openModal()
  }, [openModal])

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
        {organization?.pipes.map(pipe => (
          <PipeCard key={pipe.id} pipe={pipe} onClick={() => handleSelectPipeCard(pipe)} />
        ))}
      </Content>
      {selectedPipe ? <CardsModal isOpen={isOpen} onClose={closeModal} pipe={selectedPipe} /> : null}
    </Container>
  );
}

export default PipesList;
