import React, { useState } from 'react';
import logo from '../../assets/navbar/logo.png';
import burger from '../../assets/navbar/burger.svg';
import dropdown from '../../assets/navbar/dropdown.svg';

import {
  Wrapper,
  LogoImg,
  Burger,
  A,
  Nav,
  Item,
} from './style';
import { Yellow } from '../../assets/universal';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [showing, setShowing] = useState(false);
  // const [workWithUs, setWorkWithUs] = useState(false);

  let navigate = useNavigate();

  return (
    <Wrapper>
        <LogoImg src={logo} onClick={() => navigate('/')}/>
      <Burger src={burger} onClick={() => setShowing(!showing)} />
      <Nav showing={showing}>
        <Item>
          <A to="/">Home</A>
        </Item>
        <Item>
          <A to="/about">Our Team</A>
        </Item>
        <Item>
          <A to="/work">Our Work</A>
        </Item>
        <Item>
          <A to="/recruitment">Join Us</A>
        </Item>
      </Nav>
    </Wrapper>
  );
}

const styles = {};

export default Navbar;
