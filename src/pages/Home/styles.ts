import styled from "styled-components";

export const Container = styled.main`
    text-align: center;
`

export const Logo = styled.img`
    height: 40px;
    pointer-events: none;
`

export const Header = styled.header`
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: red;
    padding: 20px 0;
`;