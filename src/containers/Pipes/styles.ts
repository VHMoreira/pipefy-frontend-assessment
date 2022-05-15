import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 20px;
    align-items: center;
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