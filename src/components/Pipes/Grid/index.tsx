import React, { useCallback, useState } from "react"
import { Pipe } from "types/Entities"
import PipeCard from "../Card"
import { Container } from "./styles"
import CardsModal from 'containers/Cards/Modal';
import useToogle from 'hooks/useToogle';

type Props = {
    pipes: Pipe[]
}

const PipesGrid: React.FC<Props> = ({ pipes }) => {
    const [selectedPipe, setSelectedPipe] = useState<Pipe>()
    const { isActive: isOpen, active: openModal, disable: closeModal } = useToogle(true)

    const handleSelectPipeCard = useCallback((pipe: Pipe) => {
        setSelectedPipe(pipe)
        openModal()
    }, [openModal])

    return (
        <Container>
            {pipes.map((pipe) => <PipeCard key={pipe.id} pipe={pipe} onClick={() => handleSelectPipeCard(pipe)} />)}
            {selectedPipe ? <CardsModal isOpen={isOpen} onClose={closeModal} pipe={selectedPipe} /> : null}
        </Container>
    )
}

export default PipesGrid