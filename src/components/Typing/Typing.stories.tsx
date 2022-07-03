import React from 'react';
import styled from 'styled-components';
import Typing from './Typing';

export default {
  title: 'components/Typing',
  component: Typing,
  parameters: {
    docs: {
      description: {
        component: 'Typing',
      },
    },
  },
};

const Template = () => (
  <Root>
    <Typing />
  </Root>
);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  overflow: hidden;
`;
export const Default = Template.bind({});
