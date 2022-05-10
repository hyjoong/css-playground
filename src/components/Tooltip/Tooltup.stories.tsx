import React from 'react';
import Tooltip from './Tooltip';
import styled from 'styled-components';

export default {
  title: 'components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'Tooltip',
      },
    },
  },
};

const Template = () => (
  <Root>
    <Tooltip />
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
