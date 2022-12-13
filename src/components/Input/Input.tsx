import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: Props) => {
  return <InputStyled {...props} />;
};

const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  color: #888888;
  border: 1px solid #e5e7eb;
  outline: none;
  box-sizing: border-box;
  background-color: #ffffff;

  &::placeholder {
    color: #9ca3af;
  }
  &:focus {
    border: 1px solid #6b7280;
    color: #6b7280;
    background-color: #f9fafb;
  }
  &:not(:placeholder-shown) {
    color: #6b7280;
    border: 1px solid #6b7280;
  }
`;

export default Input;
