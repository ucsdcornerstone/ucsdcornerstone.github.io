import React, { useState } from 'react';
import logo from '../../assets/navbar/logo.png';
import burger from '../../assets/navbar/burger.svg';
import dropdown from '../../assets/navbar/dropdown.svg';

import {
  Wrapper,
  Logo,
  LogoImg,
  LogoTitle,
  Word,
  Burger,
  A,
  Triangle,
  Nav,
  SubNav,
  SubMenu,
  Item,
  SubItem,
} from './style';
import { Yellow } from '../../assets/universal';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [showing, setShowing] = useState(false);
  // const [workWithUs, setWorkWithUs] = useState(false);

  let navigate = useNavigate();

  return (
    <Wrapper>
      <Logo className="logo" onClick={() => navigate('/')}>
        <LogoImg src={logo} />
        <LogoTitle>
          <Word>
            <Yellow>C</Yellow>ornerstone
          </Word>
          <Word>
            <Yellow>C</Yellow>ommunity
          </Word>
          <Word>
            <Yellow>C</Yellow>onsultants
          </Word>
        </LogoTitle>
      </Logo>
      <Burger src={burger} onClick={() => setShowing(!showing)} />
      <Nav showing={showing}>
        <Item>
          <A to="/about">About Us</A>
        </Item>
        <Item>
          <SubMenu showing={showing}>
            Work With Us
            <Triangle src={dropdown} />
          </SubMenu>
          <SubNav>
            <SubItem>
              <A to="/services">Our Services</A>
            </SubItem>
            <SubItem>
              <A to="/portfolio">Portfolio</A>
            </SubItem>
          </SubNav>
        </Item>
        <Item>
          <SubMenu showing={showing}>
            Join Us
            <Triangle src={dropdown} />
          </SubMenu>
          <SubNav>
            <SubItem>
              <A to="/team">Our Team</A>
            </SubItem>
            <SubItem>
              <A to="/recruitment">Recruitment</A>
            </SubItem>
          </SubNav>
        </Item>
        <Item>
          <A to="/contact">Contact Us</A>
        </Item>
      </Nav>
    </Wrapper>
  );
}

const styles = {};

export default Navbar;
