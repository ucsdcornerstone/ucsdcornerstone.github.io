import styled from 'styled-components';

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
}>`
  font-family: 'Lato', sans-serif;
  margin: 0;
  color: white;
  font-size: ${(props) => props.fontSize || '16px'};
  padding: ${(props) => props.padding || '0'};
  ${(props) => props.letterSpacing && `letter-spacing: ${props.letterSpacing};`}
  ${(props) => props.light && 'font-weight: lighter;'}
  ${(props) => props.bold && 'font-weight: bold;'}
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight};`}
  ${(props) => props.center && 'text-align: center;'}



  @media screen and (max-width: 1200px) {
    font-size: ${(props) => props.tabletFont || '20px'};
  }

  @media screen and (max-width: 480px) {
    font-size: ${(props) => props.mobileFont || '15px'};
  }
`;

export const Yellow = styled.span`
  color: #ffe27c;
`;
