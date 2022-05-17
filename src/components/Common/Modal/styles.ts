import styled from "styled-components";

interface WrapperProps {
    show?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: ${({ show }) => show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
`

export const WrapperBackground = styled.div`
    background-color: black;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`

export const Container = styled.div`
    background-color: white;
    height: fit-content;
    max-height: 70%;
    width: 100%;
    max-width: 600px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid #e9e9e9;
`

export const Content = styled.div`
    flex: 1;
`

export const CloseButton = styled.button`
    border: 0;
    background-color: transparent;
    font-size: large;
`