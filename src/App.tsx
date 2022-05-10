import React from 'react';
import styled from 'styled-components';
import Tooltip from './components/Tooltip/Tooltip';
import GlobalStyle from './styles/globalStyles';
function App() {
  return (
    <Root>
      <GlobalStyle />
      <Tooltip />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  overflow: hidden;
`;

export default App;
