import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/Home';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from 'themes/globalStyle';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from 'themes/default';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'configs/clients/Apollo';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
