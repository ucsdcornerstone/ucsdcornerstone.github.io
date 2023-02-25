import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
  padding: 0px 8vw;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px 3vw;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Block = styled.div<{ column?: boolean }>`
  display: flex;
  gap: 40px;

  ${(props) =>
    props.column
      ? 'flex-direction: column;'
      : 'align-items: center; @media screen and (max-width: 900px) { flex-direction: column; }'}
`;

export const Handshake = styled.img`
  width: 500px;
  height: 400px;

  @media screen and (max-width: 768px) {
    width: 320px;
    height: 256px;
  }
`;
