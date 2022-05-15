import React from 'react';
import PipesGrid from 'components/Pipes/Grid';
import { useOrganization } from 'services/organization';
import {
    Container, Subtitle, Title
} from './styles';

const Pipes: React.FC = () => {
    const { data, loading } = useOrganization()

    return (
        <Container>
            <Title>Your pipes</Title>
            <Subtitle>
                Here are all your process
            </Subtitle>
            {!loading && data ? <PipesGrid pipes={data.pipes} /> : null}
        </Container>
    );
}

export default Pipes;
