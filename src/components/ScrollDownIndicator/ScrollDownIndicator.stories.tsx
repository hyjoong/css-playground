import React from 'react';
import styled from 'styled-components';
import ScrollDownIndicator from './ScrollDownIndicator';

export default {
  title: 'components/ScrollDownIndicator',
  component: ScrollDownIndicator,
  argTypes: {},
};

const Template = () => (
  <Root>
    <ScrollDownIndicator />
  </Root>
);

const Root = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

export const Default = Template.bind({});
