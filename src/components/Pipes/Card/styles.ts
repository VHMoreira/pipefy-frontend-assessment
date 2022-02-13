import styled from "styled-components";

interface ContainerProps {
    backgroundColor: ColorKeys
}

const getBackgroundColor = (key: ColorKeys, { colors }: Theme) =>
    colors[key].light ?? colors.gray.light

export const Container = styled.div<ContainerProps>`
    cursor: pointer;
    max-width: 100%;
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

