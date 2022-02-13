import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Title = styled.h3`
    font-weight: 700;
`

export const Subtitle = styled.p`
    color: #939393;
`

export const Content = styled.div`
    display: grid;
    gap: 20px;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    overflow-x: auto;

    @media(max-width: 750) {
        grid-template-columns: repeat(5, 1fr);
    }
`