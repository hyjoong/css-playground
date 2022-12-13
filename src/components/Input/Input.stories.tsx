import React from 'react';
import styled from 'styled-components';
import Input from './Input';

export default {
  title: 'components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Input',
      },
    },
  },
};

const Template = () => (
  <Root>
    <span>input 3가지 상태 css 옵션 </span>
    <ul>
      <li>1. input value없고 focus도 없는 상태 </li>
      <li>2. input focus된 상태일 때 기본 상태보다 색상 진하게</li>
      <li>3. input안에 값이 있고 focus가 없을 때 색상은 진하게 줌 </li>
    </ul>
    <h2>1. Normal (value x, focus x)</h2>
    <Input placeholder="normal" />
    <h2>2. Focus (value x, focus o)</h2>
    <Input placeholder="focus" autoFocus />
    <h2>3. Value (value o, focus x)</h2>
    <Input defaultValue={'value exist'} />
  </Root>
);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const Default = Template.bind({});
