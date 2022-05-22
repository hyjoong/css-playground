import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const DropDown = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const handleMenu = () => {
    if (!navRef || !navRef.current) {
      return;
    }
    const style = navRef.current.style;
    if (isMenu) {
      style.maxHeight = '0';
    } else if (!isMenu) {
      style.maxHeight = `${navRef.current.scrollHeight}px`;
    }
    setIsMenu(!isMenu);
  };

  return (
    <>
      <NavBar>
        <Container>
          <MenuIcon onClick={handleMenu}>☰</MenuIcon>
        </Container>
      </NavBar>
      <DropDownContainer ref={navRef}>
        <Menu>메뉴1</Menu>
        <Menu>메뉴2</Menu>
        <Menu>메뉴3</Menu>
        <Menu>메뉴4</Menu>
      </DropDownContainer>
    </>
  );
};

const NavBar = styled.nav`
  width: 100%;
  height: 50px;
  background: #ffffff;
  border: 1px solid #000;
`;

const Container = styled.div`
  padding: 7px;
`;

const MenuIcon = styled.p`
  cursor: pointer;
`;

const DropDownContainer = styled.section`
  max-height: 0;
  margin-top: 51px;
  position: fixed;
  width: 100vw;
  background-color: #ffffff;
  color: black;
  overflow: hidden;
  transition: max-height 0.3s ease;
  z-index: 10;
`;

const Menu = styled.div`
  width: 85%;
  border-bottom: 1px solid black;
  padding: 5px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
`;

export default DropDown;
