import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html{
        margin: 0;
        padding: 0;
    }
    body {
        @font-face {
            font-family: inter;
            src: url('fonts/Inter-Regular.ttf');
        }

        overflow-x: hidden;
        
        margin: 0;
        padding: 0;
        font-family: inter, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        a{
            text-decoration: none;
        }

        button {
            cursor: pointer;
        }
    }
`

export default GlobalStyle