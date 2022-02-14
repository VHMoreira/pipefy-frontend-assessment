import styled from "styled-components";

export const CardListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 10px;
    min-height: 200px;
`

export const CardListItemContainer = styled.li`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 2fr 5fr 3fr;
    height: 50px;
    border: ${({ theme: { colors } }) => `1px solid ${colors.gray.light}`};
    border-radius: 10px;
    padding: 10px;
    -webkit-box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 24%); 
    box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 24%);

    & + li{
        margin-top: 10px;
    }
`

export const ItemFieldContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Footer = styled.footer`
    height: 30px;
    width: 100%;
`

export const BottomButtom = styled.button`
    border: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.p`
    text-align: left;
    color: ${({ theme }) => theme.colors.gray.default};
    font-size: medium;
`

