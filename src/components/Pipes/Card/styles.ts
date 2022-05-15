import styled from "styled-components";

interface ContainerProps {
    backgroundColor: string
    isClickable: boolean
}

const getBackgroundColor = (key: string, { colors }: any) =>
    colors[key].light ?? colors.gray.light

export const Container = styled.div<ContainerProps>`
    cursor: ${({ isClickable }) => isClickable ? 'pointer' : 'none'};
    max-width: 150px;
    width: 100%;
    height: 230px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: 10px;
    background-color: 
        ${({ backgroundColor, theme }) => getBackgroundColor(backgroundColor, theme)};
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`

export const Subtitle = styled.p`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray.default};
`