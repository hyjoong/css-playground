import React from 'react';
import styled, { keyframes } from 'styled-components';

const Typing = () => {
  const text = 'henry github css';
  return (
    <TextTyping data-text={text} textLength={text.length}>
      {text}
    </TextTyping>
  );
};

const animation = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

const TextTyping = styled.span<{ textLength: number }>`
  margin: 0;
  position: absolute;
  top: 40%;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: transparent;
  font-size: 25px;
  white-space: nowrap;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    overflow: hidden;
    border-right: 1px solid white;
    animation: ${animation} 5s steps(${(props) => props.textLength}) infinite;
  }
`;

export default Typing;
