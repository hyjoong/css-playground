import React, { useEffect, useMemo, useRef, useState } from 'react';
import { throttle } from 'lodash';
import styled from 'styled-components';

const HideNavbarScrollDown = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        if (navRef === null || navRef.current === null) {
          return;
        }

        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          navRef.current.style.top = '-64px';
        } else {
          navRef.current.style.top = '0';
        }

        setLastScrollTop(scrollTop);
        return scrollTop;
      }, 1000),
    [lastScrollTop],
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <NavBar ref={navRef}>
        <h1>Logo</h1>
      </NavBar>
      <Container>
        <Section>
          Window.pageYOffset =Window 인터페이스의 pageYOffset 읽기 전용 속성은
          scrollY의 다른 이름으로, 문서가 수직으로 얼마나 스크롤됐는지 픽셀
          단위로 반환합니다.
        </Section>

        <Section>
          Debounce 는 여러번 발생하는 이벤트에서, 가장 마지막 이벤트 만을 실행
          되도록 만드는 개념이다. 위 예제에서 입력이 끝난 500ms 동안 동일한
          이벤트가 계속해서 발생 한다면, 입력이 끝날때, 가장 마지막 이벤트만을
          실행하여, 성능성 유리함을 가져올 수 있다.
        </Section>
        <Section>
          Throttle 는 입력 주기를 방해하지 않고, 일정 시간 동안의 입력을 모와서,
          한번씩 출력을 제한한다. Debounce 는 입력 주기가 끝나면, 출력한다.
        </Section>

        <Section>
          Throttle Throttle 는 여러번 발생하는 이벤트를 일정 시간 동안, 한번만
          실행 되도록 만드는 개념이다. 위 예제에서 500ms 동안 이벤트 실행을
          막고, 한번만 실행 때문에, 잦은 이벤트 발생을 막아 성능상의 유리함을
          가져 올 수 있다. Debounce 와 다른점은 이벤트 발생 시간 이후에 일정
          시간 동안 만을 기다리고, 이벤트를 실행 후 재차 기다린 다는 점이다.
        </Section>
        <Section>
          Debounce Debounce 는 여러번 발생하는 이벤트에서, 가장 마지막 이벤트
          만을 실행 되도록 만드는 개념이다. 위 예제에서 입력이 끝난 500ms 동안
          동일한 이벤트가 계속해서 발생 한다면, 입력이 끝날때, 가장 마지막
          이벤트만을 실행하여, 성능성 유리함을 가져올 수 있다. Throttle 와
          다른점은, 마지막 이벤트에서 일정 시간동안 이벤트가 발생한다면, 또 일정
          시간을 기다린다는 점이다.
        </Section>

        <Section>
          Throttle 와 Debounce 차이점 Throttle 와 Debounce 의 차이점은 이벤트를
          언제 발생 시킬지의 시점 차이이다. Debounce 는 입력이 끝날때까지
          무한적으로 기다리지만, Throttle 는 입력이 시작되면, 일정 주기로 계속
          실행한다. Debounce 의 시간을 짧게 가져간다면, Throttle 와 비슷한
          효과가 날 수 있지만, 그럼에도 시점에서 차이가 날 수 있다.
        </Section>
      </Container>
    </>
  );
};

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 64px;
  background-color: rgb(22, 163, 201);
  transition: 0.5s;
  color: #ffffff;
`;

const Container = styled.div`
  background-color: black;
`;

const Section = styled.section`
  padding: 3rem 5px;
  color: #ffffff;
  line-height: 30px;
`;

export default HideNavbarScrollDown;
