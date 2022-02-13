import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    font-weight: 700;
    text-align: left;
`

export const Subtitle = styled.p`
    margin-top: 10px;
    margin-bottom: 25px;
    text-align: left;
    color: ${({ theme }) => theme.colors.gray.default};
`

export const Content = styled.div`
    display: grid;
    gap: 30px;
    width: 100%;
    grid-template-columns: repeat(5, 200px);
    overflow-x: auto;

    @media(max-width: 800) {
        grid-template-columns: repeat(4, 200px);
    }
`

