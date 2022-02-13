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
    gap: 40px;
    width: 100%;
    grid-template-columns: repeat(5, 200px);
    overflow-x: auto;

    @media(max-width: 800) {
        grid-template-columns: repeat(4, 200px);
    }
`

interface CardContainerProps {
    backgroundColor: ColorKeys
}

const getBackgroundColor = (key: ColorKeys, { colors }: Theme) =>
    colors[key].light ?? colors.gray.light

export const CardContainer = styled.div<CardContainerProps>`
    max-width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: 10px;
    background-color: 
        ${({ backgroundColor, theme }) => getBackgroundColor(backgroundColor, theme)};
`

export const CardContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`

export const CardSubtitle = styled.p`
    color: ${({ theme }) => theme.colors.gray.default};
`

