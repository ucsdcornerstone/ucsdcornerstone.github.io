import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  background: #1d1d1d;
  height: 110px;
  width: 100%;
  position: fixed;
  z-index: 20;
  color: white;
  font-family: "Lato", sans-serif;
  color: white;
`;

export const Logo = styled.div`
  float: left;
  display: flex;
  color: white;
  padding: 20px 0px 20px 5vw;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  height: 70px;
  width: 80px;
  margin-right: 5px;
`;

export const LogoTitle = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Word = styled.div``;

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

export const Triangle = styled.img`
  width: 16px;
  height: 16px;
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
    ${(props) => props.showing && "max-height: 100em;"}
  }
`;

export const SubNav = styled(Nav)`
  position: absolute;
  top: 38px;
  width: 150px;
  display: none;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-height: 100em;
    position: relative;
    top: 0;
  }
`;

export const SubMenu = styled.div<{ showing: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  padding: 21px;

  &:hover {
    background: #444444;
    transition: 0.5s;
  }

  @media screen and (max-width: 768px) {
    position: static;
    display: block;
    width: 100%;
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

export const SubItem = styled(Item)`
  width: 100%;
  max-height: 100em;

  a {
    background: #1d1d1d;
    padding: 10px;
    @media screen and (max-width: 768px) {
      padding: 10px 10px 10px 50px;
    }
  }
`;
