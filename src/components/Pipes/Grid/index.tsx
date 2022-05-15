import React from "react"
import { Pipe } from "types/Entities"
import PipeCard from "../Card"
import { Container } from "./styles"

type Props = {
    pipes: Pipe[]
}

const PipesGrid: React.FC<Props> = ({ pipes }) => {
    return (
        <Container>
            {pipes.map((pipe) => <PipeCard pipe={pipe} />)}
        </Container>
    )
}

export default PipesGrid