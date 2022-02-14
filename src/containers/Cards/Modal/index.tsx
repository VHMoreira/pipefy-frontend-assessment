import Modal from 'components/Common/Modal';
import React, { useCallback, useState } from 'react';
import * as CardQueries from 'queries/card'
import {
  BottomButtom,
  ButtonText,
  CardListContainer,
  CardListItemContainer,
  Footer,
  ItemFieldContainer
} from './styles';

interface CardsModalProps {
  pipe: Pipe
  isOpen: boolean,
  onClose: () => void
}

const CardsModal: React.FC<CardsModalProps> = ({
  pipe,
  isOpen,
  onClose
}) => {
  const [lastCursor, setLastCursor] = useState<string>()
  const { cards, page } = CardQueries.GetAllCards(Number(pipe.id), 2, lastCursor)

  const handleCloseModal = useCallback(() => {
    setLastCursor(undefined)
    onClose()
  }, [onClose])

  const handleNextPage = useCallback(() => {
    if (page?.hasNextPage && page.endCursor) {
      setLastCursor(page.endCursor)
    }
  }, [page])

  return (
    <Modal
      isOpen={isOpen}
      title={`Pipe ${pipe.name} cards`}
      onClose={handleCloseModal}
    >
      <CardListContainer>
        {cards?.map((card) => (
          <CardListItemContainer key={card.node.id}>
            <ItemFieldContainer>{card.node.id}</ItemFieldContainer>
            <ItemFieldContainer>{card.node.title}</ItemFieldContainer>
            <ItemFieldContainer>
              {card.node.current_phase.name}
            </ItemFieldContainer>
          </CardListItemContainer>
        ))}
      </CardListContainer>
      <Footer>
        {page?.hasNextPage ? (
          <BottomButtom onClick={handleNextPage}>
            <ButtonText>see more</ButtonText>
          </BottomButtom>
        ) : null}
      </Footer>
    </Modal>
  );
}

export default CardsModal;
