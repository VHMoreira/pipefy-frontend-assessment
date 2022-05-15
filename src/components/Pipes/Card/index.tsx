import React from 'react';
import { Pipe } from 'types/Entities';
import {
    Container,
    Content,
    Footer,
    Subtitle
} from './styles';

interface PipeCardProps {
    pipe: Pipe
    onClick?: () => void
}

const PipeCard: React.FC<PipeCardProps> = ({ pipe, onClick }) => {
    const canClick = !!onClick

    return (
        <Container
            isClickable={canClick}
            backgroundColor={pipe.color}
            onClick={onClick}
        >
            <Content>
                <h4>{pipe.name}</h4>
            </Content>
            <Footer>
                <Subtitle>{pipe.cards_count} cards</Subtitle>
            </Footer>
        </Container>
    );
}

export default PipeCard;