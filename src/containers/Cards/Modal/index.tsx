import Modal from 'components/Common/Modal';
import React, { useCallback } from 'react';
import {
  BottomButtom,
  ButtonText,
  CardListContainer,
  CardListItemContainer,
  Footer,
  ItemFieldContainer
} from './styles';
import { useQuery } from '@apollo/client';
import CardQueries from 'store/cards/queries';

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
  const { data, fetchMore } = useQuery<GetAllCardsData, GetAllCardsVariables>(CardQueries.GET_ALL_CARDS, {
    variables: {
      pipeId: pipe.id,
      limit: 2
    }
  })

  const cards = data?.cards.edges
  const page = data?.cards.pageInfo

  const handleNextPage = useCallback(async () => {
    if (page?.hasNextPage && page.endCursor && cards) {
      await fetchMore({
        variables: {
          cursor: page.endCursor
        }
      })
    }
  }, [cards, page, fetchMore])

  return (
    <Modal
      isOpen={isOpen}
      title={`Pipe ${pipe.name} cards`}
      onClose={onClose}
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
