import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Checkbox',
      },
    },
  },
};

const Template = () => (
  <Root>
    <Checkbox />
  </Root>
);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Default = Template.bind({});
