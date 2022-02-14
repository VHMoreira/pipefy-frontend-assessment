import Modal from 'components/Common/Modal';
import React, { useCallback, useEffect, useState } from 'react';
import * as CardQueries from 'queries/card'

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
      {cards?.map((card) => <div key={card.node.id}>{card.node.title}</div>)}
      {page?.hasNextPage ? <button onClick={handleNextPage}>see more</button> : null}
    </Modal>
  );
}

export default CardsModal;
