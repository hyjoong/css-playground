import React from 'react';
import styled from 'styled-components';
import HoverEffect from './HoverEffect';

export default {
  title: 'components/HoverEffect',
  component: HoverEffect,
  parameters: {
    docs: {
      description: {
        component: 'HoverEffect',
      },
    },
  },
};

const Template = () => (
  <Root>
    <HoverEffect />
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
