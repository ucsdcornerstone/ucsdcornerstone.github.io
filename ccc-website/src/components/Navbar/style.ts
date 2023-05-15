import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  background: #1d1d1d;
  height: 110px;
  width: 100%;
  position: fixed;
  z-index: 20;
  color: white;
  font-family: 'Lato', sans-serif;
  color: white;
`;

export const LogoImg = styled.img`
  height: 70px;
  width: 80px;
  margin-right: 5px;
  float: left;
  color: white;
  padding: 20px 0px 20px 5vw;
  cursor: pointer;
`;

export const Burger = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    width: 27px;
    height: 27px;
    display: block;
    position: absolute;
    right: 40px;
    top: 40px;
    cursor: pointer;
  }
`;

export const A = styled(Link)`
  padding: 21px;
  text-decoration: none;
  color: white;
  display: block;
  font-size: 1.1em;
  &:hover {
    background: #444444;
    transition: 0.5s;
  }
`;

export const Nav = styled.ul<{ showing?: boolean }>`
  float: right;
  margin: 0px;
  padding: 0px;
  list-style: none;
  margin-right: 5vw;
  margin-top: 25px;

  @media screen and (max-width: 900px) {
    margin-right: 2vw;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    background: #1d1d1d;
    margin-top: 0px;
    margin-right: 0px;
    max-height: 0px;
    overflow: hidden;
    ${(props) => props.showing && 'max-height: 100em;'}
  }
`;

export const Item = styled.li`
  float: left;
  position: relative;

  &:hover ul {
    display: block;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

