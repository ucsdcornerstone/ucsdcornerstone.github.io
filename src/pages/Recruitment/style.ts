import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Subtitle = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const TimelineImage = styled.img`
  width: 90%;
  align-self: center;
  max-width: 1100px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: center;
  align-items: center;
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 1vw;
`;

export const Question = styled.button<{ active: boolean }>`
  background-color: #1d1d1d;
  cursor: pointer;
  padding: 18px;
  border: none;
  outline: none;
  text-align: left;
  letter-spacing: 0.05em;
  transition: 0.4s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #444;
  }
  &::after {
    content: '+';
    font-weight: bold;
    color: #fff;
    font-size: 13px;
    float: right;
    margin-left: 5px;
  }

  ${(props) => props.active && "&::after{content: '-';}"}
`;

export const Answer = styled.div`
  letter-spacing: 0.005em;
  padding: 20px 25px;
  background-color: #1d1d1d;
`;
