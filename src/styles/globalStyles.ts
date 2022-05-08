import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * { 
     box-sizing: border-box;
  }

  html,body,#root{
    height: 100%; 
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    background: inherit; 
    border:none; 
    box-shadow:none; 
    border-radius:0; 
    padding:0; 
    overflow:visible;
    cursor:pointer;
  }

  ul, ol {
   list-style:none;
  }

a {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyle;
