import Modal from 'components/Common/Modal';
import React from 'react';
import {
    BottomButtom,
    ButtonText,
    CardListContainer,
    CardListItemContainer,
    Footer,
    ItemFieldContainer
} from './styles';
import { Pipe } from 'types/Entities';
import { useCardsFromPipe } from 'services/pipe';

type Props = {
    pipe: Pipe
    isOpen: boolean,
    onClose: () => void
}

const CardsModal: React.FC<Props> = ({
    pipe,
    isOpen = false,
    onClose
}) => {
    const { cards, page, fetchMore } = useCardsFromPipe(pipe.id)

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
                    <BottomButtom onClick={fetchMore}>
                        <ButtonText>see more</ButtonText>
                    </BottomButtom>
                ) : null}
            </Footer>
        </Modal>
    );
}

export default CardsModal;