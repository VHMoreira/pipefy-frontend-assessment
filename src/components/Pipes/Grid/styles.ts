import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 30px;
    max-width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: center;
`