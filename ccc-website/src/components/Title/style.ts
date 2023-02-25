import styled from 'styled-components';
import radys from '../../assets/home/radys.jpg';

export const Container = styled.div`
  width: 100%;
  height: 250px;
  background: url(${radys});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.div`
  color: rgb(168, 159, 159);
  white-space: nowrap;
  margin: 0px 10px 0px 70px;
`;

export const Lines = styled.div`
  width: 100%;
  margin-right: 50px;
`;

export const Rectangle = styled.div<{ yellow?: boolean }>`
  height: 4px;
  width: 100%;
  min-width: none;
  background: white;
  ${(props) => props.yellow && 'background: #FFE27C; margin-top: 10px;'}
`;
