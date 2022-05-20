import React from 'react';
import styled from 'styled-components';

const HoverEffect = () => {
  return (
    <CardContainer>
      <Card>
        <Contents>
          <Title>react-query</Title>
          <Text>
            Server와 Client 사이 비동기 로직들을 손쉽게 다루게 해주는 도구 전역
            상태관리 라이브러리가 아니고 서버와 클라이언트 간의 비동기 작업을
            쉽게 해주는 라이브러리 Queries , Mutations, Query Invalidation
          </Text>
          <ReadMoreButton href="#">더보기</ReadMoreButton>
        </Contents>
      </Card>

      <Card>
        <Contents>
          <Title>Vite</Title>
          <Text>
            비트(Vite) 는 기존의 프런트엔드 개발 경험을 향상시켜줄 새로운
            프런트엔드 툴입니다. Vue 창시자 에반 유가 만들었으며 현재 Vue,
            React, Svelte 등의 주요 프레임워크 커뮤니티에서 주목하고 있는 도구
          </Text>
          <ReadMoreButton href="#">더보기</ReadMoreButton>
        </Contents>
      </Card>
      <Card>
        <Contents>
          <Title>Storybook</Title>
          <Text>
            독립적인 환경에서 UI 컴포넌트를 개발할 수 있다 특정한 스냅샷을
            스토리로 만들고 테스트할 수 있다 UI 컴포넌트 라이브러리를 문서화 할
            수도 있고, 디자인 시스템을 개발하기 위해 사용할 수도 있다
          </Text>
          <ReadMoreButton href="#">더보기</ReadMoreButton>
        </Contents>
      </Card>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 940px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 28px;
  transition: 0.5s;
  color: gray;
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  transition: 0.4s;
  color: gray;
`;

const Card = styled.div`
  position: relative;
  width: 300px;
  padding: 20px 40px;
  overflow: hidden;
  box-sizing: border-box;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: calc(-100% + 1px);
    width: 100%;
    height: 100%;
    background: #000000;
    z-index: 1;
    transition: 0.5s ease-in-out;
  }
  &:hover {
    ${Title} {
      color: #ffffff;
    }
    ${Text} {
      color: #ffffff;
    }
  }

  &:hover::before {
    bottom: 0;
  }
  &:nth-child(1)::before {
    background: #0fb6cc;
  }
  &:nth-child(2)::before {
    background: #d070fb;
  }
  &:nth-child(3)::before {
    background: #00ff00;
  }
`;

const Contents = styled.div`
  position: relative;
  z-index: 2;
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  margin: 10px 0 0;
  font-size: 14px;
  text-decoration: none;
  background: #ffffff;
  color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  font-weight: 600;
  transition: 0.7s;
  border-radius: 4px;

  :hover {
    background: #000000;
    color: #ffffff;
  }
`;

export default HoverEffect;
