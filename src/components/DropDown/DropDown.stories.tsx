import React from 'react';
import DropDown from './DropDown';
import styled from 'styled-components';

export default {
  title: 'components/DropDown',
  component: DropDown,
  argTypes: {},
};

const Template = () => (
  <Root>
    <DropDown />
  </Root>
);

const Root = styled.div`
  display: flex;
  background-color: black;
  height: 100vh;
  overflow: hidden;
`;

export const Default = Template.bind({});
