import React, { memo } from 'react';
import styled from 'styled-components';

const DATA = [
  {
    title: 'queryAllBy',
    content:
      'queryAllBy* 로 시작하는 쿼리는 조건에 일치하는 DOM 엘리먼트 여러개를 선택합니다. 만약에 존재하지 않아도 에러가 발생하지 않습니다.',
  },
  {
    title: 'findBy',
    content:
      'findBy* 로 시작하는 쿼리는 조건에 일치하는 DOM 엘리먼트 하나가 나타날 때 까지 기다렸다가 해당 DOM 을 선택하는 Promise 를 반환합니다. 기본 timeout 인 4500ms 이후에도 나타나지 않으면 에러가 발생합니다.',
  },
  {
    title: 'findAllBy',
    content:
      'findBy* 로 시작하는 쿼리는 조건에 일치하는 DOM 엘리먼트 여러개가 나타날 때 까지 기다렸다가 해당 DOM 을 선택하는 Promise 를 반환합니다. 기본 timeout 인 4500ms 이후에도 나타나지 않으면 에러가 발생합니다.',
  },
];

const Tooltip = memo(() => {
  return (
    <TooltipList>
      {DATA?.map((item, index) => (
        <TooltipItem key={index}>
          <TooltipContainer>
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>
          </TooltipContainer>
        </TooltipItem>
      ))}
    </TooltipList>
  );
});

const TooltipList = styled.ul`
  display: flex;
`;

const TooltipContainer = styled.div`
  position: absolute;
  visibility: hidden;
  padding: 16px;
  width: 400px;
  bottom: 60px;
  background-color: #ffffff;

  transition: 0.7s;
  opacity: 0;
  transform: translate(-50%, -50px);

  &::before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    background: #ffffff;
    bottom: -14px;
    right: 190px;
    transform: rotate(45deg);
  }
`;

const TooltipItem = styled.li`
  position: relative;
  list-style: none;
  line-height: 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: grey;
  margin: 0 30px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: red;
    box-shadow: 0 0 0 4px black, 0 0 0 6px red;

    ${TooltipContainer} {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Content = styled.span`
  margin-bottom: 10px;
`;

export default Tooltip;
