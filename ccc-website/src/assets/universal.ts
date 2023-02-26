import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.div<{
  fontSize?: string;
  mobileFont?: string;
  tabletFont?: string;
  bold?: boolean;
  letterSpacing?: string;
  light?: boolean;
  padding?: string;
  lineHeight?: string;
  center?: boolean;
  color?: string;
}>`
  font-family: 'Lato', sans-serif;
  margin: 0;
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize || '16px'};
  padding: ${(props) => props.padding || '0'};
  ${(props) => props.letterSpacing && `letter-spacing: ${props.letterSpacing};`}
  ${(props) => props.light && 'font-weight: lighter;'}
  ${(props) => props.bold && 'font-weight: bold;'}
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight};`}
  ${(props) => props.center && 'text-align: center;'}

  @media screen and (max-width: 1200px) {
    font-size: ${(props) => props.tabletFont || '15px'};
  }

  @media screen and (max-width: 480px) {
    font-size: ${(props) => props.mobileFont || '14px'};
  }
`;

export const HeadingText = styled(Text)`
  font-size: 2em;
  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const MediumText = styled(Text)`
  font-size: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Yellow = styled.span`
  color: #ffe27c;
`;

export const Button = styled(Link)`
  background-color: #1d1d1d;
  border: 2px solid #ffe27b;
  color: #ffe27b;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.4s;
  padding: 10px 24px;
  margin: auto 0;
  width: fit-content;

  &:hover {
    background-color: #ffe27b;
    color: black;
  }

  &:active {
    background-color: #ffe27b;
    transform: translateY(4px);
  }
`;

export const Container = styled.div`
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
  padding: 0px 8vw;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px 3vw;
  }
`;
