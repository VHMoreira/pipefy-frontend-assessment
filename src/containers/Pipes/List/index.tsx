import Modal from 'components/Common/Modal';
import PipeCard from 'components/Pipes/Card';
import useToogle from 'hooks/useToogle';
import React, { useCallback, useState } from 'react';
import * as OrganizationQueries from 'queries/organization'
import * as CardQueries from 'queries/card'
import {
  Container,
  Content,
  Subtitle,
  Title
} from './styles';

const PipesList: React.FC = () => {
  const { isActive: isOpen, active: openModal, disable: closeModal } = useToogle()
  const { organization, loading: loadingOrganization } = OrganizationQueries.GetOrganization(300562393)
  const [selectedPipeId, setSelectedPipeId] = useState<number | string>()
  const [lastCursor, setLastCursor] = useState<string>()
  const { cards, page } = CardQueries.GetAllCards(Number(selectedPipeId), 2, lastCursor)

  const handleNextPage = useCallback(() => {
    if (page?.hasNextPage && page.endCursor) {
      setLastCursor(page.endCursor)
    }
  }, [page])

  const handleSelectPipeCard = useCallback((pipeId: number | string) => {
    setSelectedPipeId(pipeId)
    openModal()
  }, [openModal])

  const handleCloseModal = useCallback(() => {
    setLastCursor(undefined)
    closeModal()
  }, [closeModal])

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
          <PipeCard key={pipe.id} pipe={pipe} onClick={() => handleSelectPipeCard(pipe.id)} />
        ))}
      </Content>
      <Modal
        isOpen={isOpen}
        title='Modal Test'
        onClose={handleCloseModal}
      >
        {cards?.map((card) => <div key={card.node.id}>{card.node.title}</div>)}
        {page?.hasNextPage ? <button onClick={handleNextPage}>see more</button> : null}
      </Modal>
    </Container>
  );
}

export default PipesList;
