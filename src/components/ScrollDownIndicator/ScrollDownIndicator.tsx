import React from 'react';
import styled, { keyframes } from 'styled-components';

const ScrollDownIndicator = () => {
  return (
    <StyledScrollDownIndicator>
      <DownIndicator />
      <DownIndicator />
      <DownIndicator />
    </StyledScrollDownIndicator>
  );
};

const StyledScrollDownIndicator = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translateY(-80px) translateX(-50%) rotate(45deg);
`;

const animate = keyframes`
  0% {
    top: -5px;
    left: -5px;
    opacity: 0;
  } 
  25% {
    top: 0;
    left: 0;
    opacity: 1;
  }
  50%, 100% {
    top: 5px;
    left: 5px;
    opacity: 0;
  }
`;

const DownIndicator = styled.div<{ color?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid ${(props) => props.color ?? '#FFFFFF'};
  border-right: 2px solid ${(props) => props.color ?? '#FFFFFF'};
  animation: ${animate} 1.5s linear infinite;
  opacity: 0;

  &:nth-child(1) {
    transform: translate(-15px, -15px);
    animation-delay: -0.4s;
  }
  &:nth-child(2) {
    transform: translate(0, 0);
    animation-delay: -0.2s;
  }
  &:nth-child(3) {
    transform: translate(15px, 15px);
    animation-delay: 0s;
  }
`;

export default ScrollDownIndicator;
